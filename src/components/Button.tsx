import { FC, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

// here we are getting back an HTML <button> tag with styles applied

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: 700;
  color: ${(p) => (p.variant === "secondary" ? "#00e8af" : white)};
  padding: 0px;
  background-color: #00e8af;
  height: 40px;
  min-width: 100px;
`;

type ButtonProps = {
  children: ReactNode;
  variant: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  // We render our special custom <button> tag and pass in the props
  return (
    <StyledButton {...props} variant={variant}>
      {children}
    </StyledButton>
  );
};

export { Button };
