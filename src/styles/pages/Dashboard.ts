import styled from 'styled-components';

export const Header = styled.div`
  background: linear-gradient(106.54deg, var(--alpha-primary) -1.24%, var(--alpha-secondary) 107.1%);

  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2rem;

  button {
    height: 3.4rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

export const ContentHeader = styled.div`
  width: 90%;
  margin: 3.2rem auto 5rem auto;
  position: relative;

  h2 {
    font: 600 3rem Poppins;
    color: var(--white-100);
    line-height: 4.2rem;
  }

  p {
    max-width: 35rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.5rem;
    color: var(--white-100);
    margin-top: 2.4rem;
    opacity: 0.8;
  }

  @media (min-width: 700px) {
    max-width: 800px;
    margin: 3.2rem auto 10rem auto;

  }
`;

export const FormControl = styled.form`
  background-color: var(--white-100);
  border-radius: 1rem;
  
  width: 100%;
  max-width: 800px;

  margin: -3.2rem auto 3.2rem auto;
  padding-top: 6.4rem;

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
  margin-top: 6.4rem; 

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