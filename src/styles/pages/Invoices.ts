import styled from 'styled-components';

export const MainContent = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(106.54deg, var(--alpha-primary) -1.24%, var(--alpha-secondary) 107.1%);
`;

export const Box = styled.div`
  background-color: #F0F2F8;
  width: 100%;
  max-width: 500px;
  
  height: 100%;
  max-height: 800px;

  border-radius: 1rem;
`;

export const CreatedName = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: var(--white-100);

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  span {
    font-size: 1.1rem;
    font-weight: 300;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 13rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  img {
    width: 100%;
  }
`;

export const InfoBoxContainer = styled.div`
  padding: 3rem;

  > p {
    margin-top: 2.2rem;
    padding-left: 1.4rem;
    font-size: 1.3rem;
    color: #00A5C7;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const InfoBox = styled.div`
  background-color: var(--white-100);
  padding: 2rem;

  border-radius: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #9B9B9B;
  }

  span {
    font-size: 3rem;
    font-weight: 500;
    color: #434343;
  }

  p {
    font-size: 1.2rem;
    color: #9B9B9B;
    padding-bottom: 2rem;

    border-bottom: 1px solid #EFEFEF;
  }

  h4 {
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: 400;

    color: #9B9B9B;
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #9B9B9B;

    text-align: center;
    margin-top: 1rem;
  }

  & + div {
    margin-top: 3rem;
  }
`;

export const Pix = styled.div`
  margin-top: 2rem;
  background-color: #E5E5E5;
  height: 50px;

  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;