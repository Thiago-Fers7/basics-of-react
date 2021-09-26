import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.large};
  border-radius: ${props => props.theme.borderRadius};
  justify-content: space-between;

  button {
    font-size: ${props => props.theme.spacing.medium};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
