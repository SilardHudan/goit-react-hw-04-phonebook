import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: teal;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ isOpen }) => (isOpen ? '#fff' : '#242323')};
  font-size: 30px;
  border: none;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ isOpen }) => (isOpen ? '#fff' : '#242323')};

  background-color: transparent;

  transition: all 100ms linear;
  cursor: pointer;
  :not(:last-child) {
    margin-left: auto;
    margin-right: 10px;
  }

  :hover {
    color: #fff;
    border-color: #fff;
  }
`;
