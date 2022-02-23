import styled from '@emotion/styled';

export const List = styled.ul`
  max-width: 50rem;
`;
export const ListItem = styled.li`
  display: flex;
  align-self: center;
  justify-content: space-between;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: none;
  }
`;
export const Button = styled.button`
  display: inline-block;
  right: 0;
  padding: 0.2rem 2rem;
  border-radius: 1rem;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #1eff00;
  }

  &:active {
    transform: scale(0.9);
    color: #000000;
    border-color: #333232;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;
