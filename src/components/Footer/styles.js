import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.footerBackgroundColor};
    padding: 0 ${theme.spacing.large};
    border-radius: ${theme.borderRadius};
  `}

  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
