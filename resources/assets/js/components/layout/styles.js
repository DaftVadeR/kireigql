import styled from 'styled-components';

export const App = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Header = styled.div`
  background: #DDD;
  border-bottom: 1px solid #CCC;
`;

export const Footer = styled.div`
  padding: 15px;
  background: #DDD;
  border-top: 1px solid #CCC;
`;

export const Body = styled.div`
  padding: 15px;
  min-height: 100px;
`;

export const SplitContainer = styled.div`
  display: flex;
`;

export const Logo = styled.h1`
  width: 100px;
  background: #333;
  color: #FFF;
  padding: 15px;
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const UserLinks = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0; padding: 0;
  flex: 1;
  text-align: right;
`;

export const LinkItem = styled.li`
  display: inline-block;
  
  & > a {
    display: inline-block;
    padding: 5px;
  } 
`;
