import styled from 'styled-components';

export const FormControl = styled.div`
  margin-bottom: 4rem;

  fieldset {
    border: none;
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;

  background-color: #fafafc;
  border-top: 1px solid #e6e6f0;

  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--alpha-primary);
    color: var(--white-100);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 500 1.6rem Poppins;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    transition: 0.2s;
    margin-top: 3.2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 700px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;