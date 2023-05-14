import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
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
import { InputControl } from '../../components/Form/InputControl';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import logo from '../../assets/logo.png';

interface IFormInputs {
  [email: string]: any;
}

export const SignIn: React.FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();
  const navigation = useNavigation<any>();

  function handleSignIn({ email, password }: IFormInputs) {
    console.log(email, password);
  }

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
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button title="Login" onPress={handleSubmit(handleSignIn)} />
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
