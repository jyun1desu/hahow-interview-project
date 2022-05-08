import { useEffect, useMemo, useState } from "react";
import { styled } from "stitches.config";
import { useParams } from "react-router-dom";
import { getHeroProfile, saveHeroProfile } from "api/hero";
import Button from "components/atoms/Button";
import MinusPlusInput from "components/molecules/MinusPlusInput";
import { HeroProfile } from "types/hero";

const PointBoard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: "36px",
  marginTop: "20px",
});

const ControlBoard = styled("section", {
  flex: "0 0 45%",
  minWidth: '360px',
});

const Result = styled("section", {
  flex: "0 0 30%",

  "& > p": {
    marginBottom: "16px",
  },
});

const EachCount = styled("div", {
  display: "flex",
  alignItems: "center",

  "& + div": {
    marginTop: "16px",
  },

  "& > .title": {
    flex: "0 0 100px",
  },

  "& > *:last-child": {
    flex: "1 1 auto",
  },
});
const HeroProfileBoard = () => {
  const { heroId } = useParams();
  const [profile, setProfile] = useState<HeroProfile | null>(null);
  const [max, setMax] = useState<number | null>(0);
  const mappedProfile = useMemo(() => {
    if (!profile) return [];
    const order = ['str', 'int', 'agi', 'luk'];
    return order.map(type => ({
      type,
      value: profile[type]
    }));
  }, [profile]);
  const remain = useMemo(() => {
    if (!max || !profile) return 0;
    return max - Object.values(profile).reduce((a, c) => {
      return a + c
    }, 0);
  }, [max, profile])

  useEffect(() => {
    (async () => {
      if (heroId) {
        const p = await getHeroProfile(heroId);
        setProfile(p);
        setMax(Object.values(p).reduce((a, c) => {
          return a + c
        }, 0))
      }
    })();

    return () => setProfile(null)
  }, [heroId])

  const handleChange = (type: string, value: number) => {
    setProfile(pre => ({
      ...pre,
      [type]: value
    }))
  }

  if (!profile) {
    return <>loading...</>
  }

  return (
    <PointBoard>
      <ControlBoard>
        {mappedProfile.map((p) => {
          return (
            <EachCount key={`${heroId}${p.type}`}>
              <span className="title">{p.type.toUpperCase()}</span>
              <MinusPlusInput
                initialNumber={p.value}
                onChange={(v) => {
                  handleChange(p.type, v)
                }}
                disablePlus={remain === 0}
                disableMinus={remain === max || p.value === 0}
              />
            </EachCount>
          )
        })}
      </ControlBoard>
      <Result>
        <p>剩餘點數：{remain}</p>
        <Button
          onClick={() => {
            saveHeroProfile(heroId as string, profile)
          }}
          disabled={remain !== 0}
          stretch
        >
          儲存
        </Button>
      </Result>
    </PointBoard>
  );
};

export default HeroProfileBoard;
