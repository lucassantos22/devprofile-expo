import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  Logo,
  Title,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  CreateAccount,
  Icon,
  CreateAccountTitle,
} from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import logo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Login</Title>
            </View>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button title="Login" />
            <ForgotPasswordButton>
              <ForgotPasswordTitle>Forgot my password</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Create account</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
