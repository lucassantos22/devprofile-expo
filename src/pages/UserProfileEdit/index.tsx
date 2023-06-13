import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { api } from '../../services/api';
import { Button } from '../../components/Form/Button';
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTile,
  HeaderTop,
  Logo,
  PhotoContainer,
  Title,
  UserAvatar,
} from './styles';
import logo from '../../assets/logo.png';
import { Icon } from '../SignIn/styles';
import { InputControl } from '../../components/Form/InputControl';
import { useAuth } from '../../context/AuthContext';
import avatarDefault from '../../assets/avatar01.jpeg';

interface IFormInput {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Name cannot be empty.'),
  email: yup
    .string()
    .email('Invalid e-mail.')
    .required('E-mail cannot be empty.'),
});

export const UserProfileEdit: React.FunctionComponent = () => {
  const { user } = useAuth();
  const navigation = useNavigation<any>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

  async function handleProfileEdit({ name, email }: IFormInput) {
    const data = {
      name,
      email,
    };
    try {
      await api.put('profile', data);
      Alert.alert('Profile updated!', 'Your profile has been updated');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Error updating your profile :(');
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
          <Header>
            <HeaderTop>
              <GoBackButton onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" />
              </GoBackButton>
              <HeaderTile>Your Profile</HeaderTile>
            </HeaderTop>
            <PhotoContainer>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </PhotoContainer>
          </Header>
          <Content>
            <Logo source={logo} />
            <Title>Edit your profile</Title>
            <InputControl
              control={control}
              autoCorrect={false}
              name="name"
              placeholder="Name"
              error={errors.name && errors.name.message}
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <Button title="Create" onPress={handleSubmit(handleProfileEdit)} />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
