import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
  background:${({primary}) => (primary ? '#268ACB' : '#4c6c')};
  white-space:nowrap;
  outline:none;
  border:none;
  min-width:100px;
  max-width:200px;
  cursor:pointer;
  text-decoration:none;
  transition:0.3s;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:25px;
  padding:${({big}) => (big ? '60px 40px' : '14px 24px')};
  color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({big}) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px) ;
  }
`
