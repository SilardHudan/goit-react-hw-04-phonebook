import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px 40px;
  background-color: #e6f3fa;
  border-bottom: 2px solid teal;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  :focus {
    border-color: teal;
  }
`;
