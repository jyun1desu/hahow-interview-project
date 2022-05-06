import { styled } from "stitches.config";

const StyledButton = styled("button", {
  borderRadius: "8px",
  padding: "12px 24px",
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: "pink",
        "&:hover": {
          backgroundColor: "yellow",
        },
      },
      secondary: {
        backgroundColor: "$gray500",
        "&:hover": {
          backgroundColor: "$gray400",
        },
      },
    },
  },
});

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  theme?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button = ({
  onClick,
  children,
  type = "button",
  theme = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={theme}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
