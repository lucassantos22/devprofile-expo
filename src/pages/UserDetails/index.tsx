import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  ContentTitle,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTile,
  Icon,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetailAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { IUser } from '../../model/User';
import { api } from '../../services/api';
import avatarDefault from '../../assets/avatar01.jpeg';
import { useAuth } from '../../context/AuthContext';
interface RouteParams {
  userId: string;
}

export const UserDetails: React.FunctionComponent = () => {
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser);
  const route = useRoute();
  const { userId } = route.params as RouteParams;
  const { user } = useAuth();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    };
    loadUser();
  }, [userId]);

  return (
    <Container>
      <Header>
        <GoBackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" />
        </GoBackButton>
        <HeaderTile>Users</HeaderTile>
        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
      </Header>
      <Content>
        <ContentTitle>User details</ContentTitle>
        <UserDetailAvatar
          source={
            userDetails.avatar_url
              ? { uri: userDetails.avatar_url }
              : avatarDefault
          }
        />

        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{userDetails.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{userDetails.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  );
};
