import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTile,
  HeaderTop,
  Icon,
  NameData,
  NameTitle,
  PhotoButton,
  PhotoContainer,
  UserAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import avatarDefault from '../../assets/avatar01.jpeg';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Form/Button';

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth();
  const navigation = useNavigation<any>();

  return (
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
            source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
          />
          <PhotoButton>
            <Icon name="camera" />
          </PhotoButton>
        </PhotoContainer>
      </Header>
      <Content>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate('UserProfileEdit');
          }}
        />
        <Button title="Change password" onPress={() => {}} />
      </Content>
    </Container>
  );
};
