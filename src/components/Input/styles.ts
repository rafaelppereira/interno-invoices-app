import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;

  outline: none;
  border: 0;

  background-color: var(--gray-200);
  margin-top: 1rem;

  transition: all 0.2s ease-out;
  border-bottom: 2px solid;
  border-color: var(--gray-300);

  &:focus {
    border-color: var(--alpha-primary);
    padding: 0 1.5rem;
  }
`;
