import styled from 'styled-components';

const MainContainer = styled.div`
  width: 600px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
