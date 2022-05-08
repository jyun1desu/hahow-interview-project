import { styled } from "stitches.config";

const StyledButton = styled("button", {
  borderRadius: "8px",
  padding: "12px 24px",
  cursor: "pointer",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$gray500",
        "&:hover": {
          backgroundColor: "$gray400",
        },

        "&:disabled": {
          pointerEvents: 'none',
        }
      },
    },
  },
});

enum ButtonThemeTypes {
  primary = "primary",
}

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  theme?: ButtonThemeTypes;
  type?: "button" | "submit";
  disabled?: boolean;
  stretch?: boolean;
};

const Button = ({
  onClick,
  children,
  type = "button",
  theme = ButtonThemeTypes.primary,
  disabled = false,
  stretch = false,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={theme}
      css={{
        width: `${stretch ? '100%' : 'inherit'}`
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
