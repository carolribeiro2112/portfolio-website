import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Nav = styled.nav`
  background-color: ${shade(0.2,'#282a36')};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-bottom: ${lighten(0.1,'#282a36')} solid 2px;

  a {
    color:#fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    padding: 12px;
    
    & + a {
      margin-left: 24px;
    }

    &:hover {
      color: ${shade(0.2,'#fff')};
    }
  }
`;

