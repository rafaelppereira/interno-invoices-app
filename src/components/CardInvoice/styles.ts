import styled from 'styled-components';

export const CardInvoiceContainer = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;

  border-radius: 0.5rem;

  position: relative;
  transition: border 0.2s;

  &:hover {
    border: 1px solid var(--alpha-primary);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  flex-shrink: 0;

  h2 {
    font-size: 1.9rem;
    font-weight:500;
    color: #4a4a4a;
  }

  p {
    color: var(--alpha-primary);
    font-size: 1.3rem;
    margin-top: 0.2rem;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.4rem;
    }
  }
`;

export const Avatar = styled.div`
  font-size: 2.9rem;
  background-color: var(--alpha-primary);
  color: var(--white-100);

  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  gap: 10px;

  p {
    font-size: 1.3rem;
  }

  span {
    color: var(--alpha-primary);
    font-size: 1.8rem;
  }

  button {
    background-color: var(--alpha-primary);
    color: var(--white-100);
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;

    margin-top: 1rem;
    border-radius: 0.5rem;
    transition: filter 0.2s;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Redirect = styled.div`
  a {
    position: absolute;
    right: -12px;
    top: -12px;

    width: 35px;
    height: 35px;

    background-color: var(--alpha-primary);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 2px solid #ccc;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
  svg {
    font-size: 1.6rem;
    color: var(--white-100);
  }
`;

export const Remove = styled.div`
  button {
    position: absolute;
    right: -12px;
    bottom: -12px;

    width: 35px;
    height: 35px;

    border-radius: 50%;
    border: 2px solid #ccc;
    
    background-color: var(--notification-error);
    color: var(--white-100);
    font-size: 1.6rem;
    transition: filter 0.2s;

    svg {
      position: relative;
      top: 1px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;