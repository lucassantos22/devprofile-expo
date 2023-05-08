import React from 'react';
import {
  Container,
  Content,
  Logo,
  Title,
  ForgotPasswordButton,
  ForgotPasswordTitle,
} from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import logo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Logo source={logo} />
          <Title>Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button title="Login" />
          <ForgotPasswordButton>
            <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
          </ForgotPasswordButton>
        </Content>
      </Container>
    </ScrollView>
  );
};
