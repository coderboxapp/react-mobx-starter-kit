import styled from 'styled-components'
import { palette, size } from 'styled-theme'

export const Dialog = styled.div`
  max-width: ${p => p.width || '400px'};
  margin: 20px auto;
  background-color: white;
  border: 1px solid ${palette('grayscale', 1)};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: ${size('radius')};
  text-align: center;
`

export const Header = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 200;
  padding: 15px 0px;
  border-radius: ${size('radius')} ${size('radius')} 0 0;
  background-color: ${palette(1)};
`

export const Content = styled.div`
  padding: 20px;
  min-height: 80px;
  position: relative;
`

export const Footer = styled.div`
  font-size: 16px;
  padding: 20px 15px;
  border-top: 1px solid ${palette('grayscale', 1)};
  background-color: ${palette('grayscale', 3)};
  border-radius: 0 0 ${size('radius')} ${size('radius')};
`
