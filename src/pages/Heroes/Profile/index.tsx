import { useMemo } from "react";
import { styled } from "stitches.config";
import { useParams } from "react-router-dom";
import Button from "components/atoms/Button";
import MinusPlusInput from "components/molecules/MinusPlusInput";
import { useHeroProfile } from "recoil/hero";

const PointBoard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: "36px",
  marginTop: "24px",

  '@mb': {
    display: "block",
    padding: '0',
  },
});

const ControlBoard = styled("section", {
  flex: "0 0 45%",
  minWidth: '360px',

  '@mb': {
    minWidth: 'unset',
    marginBottom: '24px'
  }
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
  const [{ heroProfile, heroPoint, patchLoading }, { updateProfile, saveProfile }] = useHeroProfile(heroId as string);
  const mappedProfile = useMemo(() => {
    if (!heroProfile) return [];
    const order = ['str', 'int', 'agi', 'luk'];
    return order.map(type => ({
      type,
      value: heroProfile[type]
    }));
  }, [heroProfile]);

  const remain = useMemo(() => {
    if (!heroPoint || !heroProfile) return 0;
    return heroPoint - Object.values(heroProfile).reduce((a, c) => {
      return a + c
    }, 0);
  }, [heroPoint, heroProfile])

  return (
    <PointBoard>
      <ControlBoard>
        {mappedProfile.map((p) => {
          return (
            <EachCount key={`${p.type}${p.value}`}>
              <span className="title">{p.type.toUpperCase()}</span>
              <MinusPlusInput
                initialNumber={p.value}
                onChange={(v) => {
                  updateProfile(p.type, v)
                }}
                disablePlus={remain === 0 || patchLoading}
                disableMinus={remain === heroPoint || p.value === 0 || patchLoading}
              />
            </EachCount>
          )
        })}
      </ControlBoard>
      <Result>
        <p>剩餘點數：{remain}</p>
        <Button
          onClick={saveProfile}
          disabled={remain !== 0 || patchLoading}
          stretch
        >
          {patchLoading ? '儲存中...' : '儲存'}
        </Button>
      </Result>
    </PointBoard>
  );
};

export default HeroProfileBoard;
