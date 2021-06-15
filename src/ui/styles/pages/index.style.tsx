import { experimentalStyled as styled } from '@material-ui/core';
import { Paper } from '@material-ui/core';

export const FormElementsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto ${({ theme }) => theme.spacing(7)};

  max-width: 650px;
`;

export const ProfessionalsPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('md')}{
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }   
  }
`;

export const ProfessionalsContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up('md')}{
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down('md')}{
    margin: 0 ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;