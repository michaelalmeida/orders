import React from "react";
import styled from "styled-components";
import { DARK } from "../../constants/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

type variant = "normal" | "small" | "large";

interface NumberProps {
  variant?: variant;
}

const numberSizeVariant = (variant?: variant) => {
  switch (variant) {
    case "normal":
      return "2.4rem";
    case "small":
      return "1.8rem";
    case "large":
      return "3.2rem";
    default:
      return "2.4rem";
  }
};

export const Number = styled.h4<NumberProps>`
  display: flex;
  color: ${DARK};
  font-size: ${(props) => numberSizeVariant(props.variant)};
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: 800;
`;

export const Label = styled.span`
  font-size: 1.2rem;
`;

interface NumberCardProps {
  number: number;
  label: string;
  money?: boolean;
  variant?: variant;
}

export const NumberCard = ({
  number,
  label,
  money,
  variant = "normal",
}: NumberCardProps) => {
  return (
    <Card>
      <Number variant={variant}>
        {money && "R$ "}
        {number}
      </Number>
      <Label>{label}</Label>
    </Card>
  );
};
