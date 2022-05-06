import Button from "components/atoms/Button";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "stitches.config";

const Input = styled("div", {
  display: "flex",
  alignItems: "stretch",

  "& > .count": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 auto",
    margin: "0 12px",
    textAlign: "center",
    border: "1px solid $gray500",
    borderRadius: "8px",
    fontSize: "20px",
  },
});

const ButtonChild = styled("span", {
  fontSize: "16px",
});

type MinusPlusInputProps = {
  onChange: (count: number) => void;
  initialNumber?: number;
  disablePlus?: boolean;
  disableMinus?: boolean;
};

const MinusPlusInput = ({
  onChange,
  initialNumber = 0,
  disablePlus = false,
  disableMinus = false,
}: MinusPlusInputProps) => {
  const [count, setCount] = useState(initialNumber);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange(count);
  }, [count, onChange]);

  return (
    <Input>
      <Button
        onClick={() => setCount((pre) => pre + 1)}
        disabled={disablePlus}
        theme="secondary"
      >
        <ButtonChild>+</ButtonChild>
      </Button>
      <span className="count">{count}</span>
      <Button
        onClick={() => setCount((pre) => pre - 1)}
        disabled={disableMinus}
        theme="secondary"
      >
        <ButtonChild>-</ButtonChild>
      </Button>
    </Input>
  );
};

export default MinusPlusInput;
