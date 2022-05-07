import Button from "components/atoms/Button";
import MinusPlusInput from "components/molecules/MinusPlusInput";
import { styled } from "stitches.config";

const fakeData = [
  {
    id: 1,
    type: "cute",
    count: 1,
  },
  {
    id: 2,
    type: "cool",
    count: 1,
  },
  {
    id: 3,
    type: "handsome",
    count: 1,
  },
  {
    id: 4,
    type: "soft",
    count: 1,
  },
];

const PointBoard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: "36px",
  marginTop: "20px",
});

const ControlBoard = styled("section", {
  flex: "0 0 45%",
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
    flex: "0 0 150px",
  },

  "& > *:last-child": {
    flex: "1 1 auto",
  },
});
const HeroProfile = () => {
  return (
    <PointBoard>
      <ControlBoard>
        {fakeData.map((d) => (
          <EachCount key={d.id}>
            <span className="title">{d.type}</span>
            <MinusPlusInput
              initialNumber={d.count}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </EachCount>
        ))}
      </ControlBoard>
      <Result>
        <p>剩餘點數：30</p>
        <Button onClick={() => {}} stretch>
          儲存
        </Button>
      </Result>
    </PointBoard>
  );
};

export default HeroProfile;
