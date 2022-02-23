import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
`;
export const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.8rem;
`;
export const Input = styled.input`
  font-size: 1.8rem;
  width: 25rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
`;
export const Button = styled.button`
  display: block;
  font-size: 1.8rem;
  margin: 0 auto;
  max-width: 20rem;
  padding: 1rem 5rem;
  border-radius: 1rem;
  background-color: #ffffff;

  &:active {
    cursor: pointer;
    background-color: #1eff00;
    transform: scale(0.9);
    color: #000000;
    border-color: #333232;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;
