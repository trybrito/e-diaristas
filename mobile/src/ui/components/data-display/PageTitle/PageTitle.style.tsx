import styled from '@emotion/native';

export const PageTitleContainer = styled.View`
  margin: ${({ theme }) => theme.spacing(5)} 0;
`;

export const PageTitleStyled = styled.Text`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const PageSubtitleStyled = styled.Text`
  margin: ${({ theme }) => theme.spacing(1.5)} auto;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  max-width: 275px;
`;
