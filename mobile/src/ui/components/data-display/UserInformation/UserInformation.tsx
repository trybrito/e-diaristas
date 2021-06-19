import React from 'react';
import { Avatar } from 'react-native-paper';
import {
  UserInformationContainer,
  InformationContainer,
  UserName,
  RatingStyled,
  UserDescription
} from './UserInformation.style';

export interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
  darker?: boolean;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
  darker
}) => {
  return (
    <UserInformationContainer darker={Boolean(darker)}>
      <Avatar.Image source={{ uri: picture }} />
      <InformationContainer>
        <UserName>
          {name}
        </UserName>

        <RatingStyled defaultRating={rating} />

        <UserDescription>
          {description}
        </UserDescription>
      </InformationContainer>
    </UserInformationContainer>
  );
};

export default UserInformation;