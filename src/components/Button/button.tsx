import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface ButtonProps {
  variant?: string;
}

const Button = styled.button<ButtonProps>`
  ${tw`
    relative
    w-64 min-w-full
    flex justify-center
    border border-transparent
    text-sm leading-5 font-medium
    rounded-lg
    text-white
    bg-green
    hover:bg-green-dark
    focus:(outline-none border-green bg-green-dark)
    disabled:(bg-darkGray opacity-50)
    active:bg-green-dark
    transition duration-150 ease-in-out
  `}
  ${({ variant }) => {
    switch (variant) {
      case "medium":
        return tw`py-3 px-4`;
      case "large":
        return tw`py-5 px-7`;
      default:
        return tw`py-2 px-4`;
    }
  }}
`;

const IconWrapper = styled.span`
  ${tw`
  absolute left-0 inset-y-0
  flex items-center
  pl-3
  `}
`;

const Icon = styled.svg(tw`
  h-5 w-5
  text-white
  group-hover:text-white
  transition ease-in-out duration-150
`);

interface Props {
  className?: string;
  variant?: string;
  children: JSX.Element | string;
  iconPath?: any;
}

const ButtonStyled = ({
  className,
  iconPath,
  variant,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <Button
      {...props}
      className={["group", className].join(" ")}
      variant={variant}
    >
      {iconPath && (
        <IconWrapper>
          <Icon fill="currentColor" viewBox="0 0 20 20">
            {iconPath}
          </Icon>
        </IconWrapper>
      )}
      {children}
    </Button>
  );
};

export default ButtonStyled;
