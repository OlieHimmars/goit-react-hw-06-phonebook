import styled from 'styled-components';

export const List = styled.ul`
  border-radius: 5px;
  padding: 20px;
  background-color: grey;
 
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;