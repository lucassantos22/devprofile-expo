import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native';
import { Button } from '../../components/Form/Button';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';

interface IFormInputs {
  [email: string]: any;
}

const formSchema = yup.object({
  email: yup
    .string()
    .email('Invalid e-mail.')
    .required('E-mail cannot be empty.'),
  password: yup.string().required('Password cannot be empty.'),
});

export const SignIn: React.FunctionComponent = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });
  const navigation = useNavigation<any>();

  async function handleSignIn({ email, password }: IFormInputs) {
    const data = { email, password };
    try {
      setLoading(true);
      await signIn(data);
    } catch (error) {
      Alert.alert('Authentication error', 'Verify your credentials');
    } finally {
      setLoading(false);
    }
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
              error={errors.email && errors.email.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Password"
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <Button
              title="Login"
              onPress={handleSubmit(handleSignIn)}
              disabled={loading || !!errors.password || !!errors.email}
            />
            <ForgotPasswordButton
              onPress={() => navigation.navigate('ForgotPassword')}
            >
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
