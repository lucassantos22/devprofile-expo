import React from 'react';
import { Container, Content, Title } from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button title="Login" />
        </Content>
      </Container>
    </ScrollView>
  );
};
