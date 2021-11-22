import * as React from "react";
import {
  Container,
  Title,
  Separator,
  LoginInput,
  PasswordInput,
} from "./styles";
import { Button } from "../../components/Button/Button";
import { LostPassword } from "../../components/LostPassword/LostPassword";
import { IconsHeader } from "../../components/IconsHeader/IconsHeader";
import api from "../../services/api";
import { useState } from "react";

export default function LoginScreen({}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  async function handleEnterButtonPress() {
    try {
      api.post("api/v1/Acesso/login", {
        login: login,
        senha: password,
        nomeApp: "br.com.eem.teste",
        versaoApp: "10",
        versaoSO: "10",
        idDispositivo: "teste-mobile",
      });
      console.log("sucess");
    } catch (error: any) {
      throw new Error(error);
    }
  }
  return (
    <Container>
      <IconsHeader
        leftIconName="chevron-back"
        leftIconColor="white"
        leftIconSize={45}
        rightIconName="questioncircleo"
        rightIconColor="white"
        rightIconSize={45}
      />
      <Title>Informe o usuário e a senha{"\n"} encaminhados pela escola</Title>
      <Separator />
      <LoginInput
        placeholder="Usuário"
        placeholderTextColor="#fff"
        onChangeText={(login: string) => setLogin(login)}
      />
      <PasswordInput
        placeholder="Senha"
        placeholderTextColor="#fff"
        onChangeText={(password: string) => setPassword(password)}
      />
      <Button title="Entrar" onPress={() => {}} />
      <LostPassword
        lostPasswordClick={() => {}}
        policyClick={() => {}}
        leftText="Esqueci minha senha"
        rightText=" Politica de privacidade"
      />
    </Container>
  );
}