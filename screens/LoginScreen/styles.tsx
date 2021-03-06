import styled from "styled-components/native";
import { Button } from "../../components/Button/Button";

export const Container = styled.View`
  background-color: #0583a4;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-self: flex-start;
  margin-left: 6%;
  font-size: 20px;
  color: #fff;
`;
export const Separator = styled.View`
  margin: 10px;
  height: 1px;
  width: 80%;
`;
export const LoginInput = styled.TextInput`
  border-width: 1.5px;
  border-color: #fff;
  color: #fff;
  width: 90%;
  font-size: 18px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const PasswordInput = styled.TextInput`
  border-width: 1.5px;
  border-color: #fff;
  color: #fff;
  width: 90%;
  font-size: 18px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const BottomButton = styled(Button)`
  background-color: #ffffff;

  height: 7%;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  bottom: 6%;
  position: absolute;
`;
