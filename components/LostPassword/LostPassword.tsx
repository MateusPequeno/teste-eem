import React from "react";
import { Container, RowTexts } from "./styles";
import { TextProps } from "react-native";

interface TextInterface extends TextProps {
  leftText?: string;
  rightText?: string;
  lostPasswordClick?: (e: any) => void;
  policyClick?: (e: any) => void;
}

export function LostPassword({
  lostPasswordClick,
  policyClick,
  rightText,
  leftText,
  ...rest
}: TextInterface) {
  return (
    <Container {...rest}>
      <RowTexts onCLick={lostPasswordClick}>{leftText}</RowTexts>
      <RowTexts onCLick={policyClick}>{rightText}</RowTexts>
    </Container>
  );
}
