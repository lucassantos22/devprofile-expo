import React from 'react';

import avatarDefault from '../../assets/avatar01.jpeg';
import {
  Container,
  EmailData,
  EmailTitle,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetail,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { IUser } from '../../model/User';

interface UserProps {
  data: IUser;
  onPress: () => void;
}

export const User: React.FunctionComponent<UserProps> = ({
  data,
  onPress,
}: UserProps) => {
  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{data.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{data.email}</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar
        source={data.avatar_url ? { uri: data.avatar_url } : avatarDefault}
      />
    </Container>
  );
};
