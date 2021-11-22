import React from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
