import React from 'react';
import { Container, Content, Title } from './styles';
import { Input } from '../../components/Form/Input';
import { SafeAreaView, ScrollView } from 'react-native';

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
        </Content>
      </Container>
    </ScrollView>
  );
};
