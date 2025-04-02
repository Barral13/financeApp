import React, { useContext } from "react";
import { Platform } from "react-native";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles';

import { AuthContext } from "../../contexts/auth"; 

export default function SignUp() {

  const { user } = useContext(AuthContext)

  function handleSignUp() {
    console.log(user);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <Logo
          style={{ width: 130, height: 130 }}
          source={require('../../assets/Logo02.png')}
        />

        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>
            Cadastrar
          </SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  );
}

