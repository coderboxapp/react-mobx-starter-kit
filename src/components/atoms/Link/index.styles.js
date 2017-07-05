import styled from 'styled-components'
import { font, size, key } from 'styled-theme'

const primaryColor = p => p.disabled ? 'gray' : key(['palette', p.palette, p.tone], '#000')
const secondaryColor = p => p.disabled ? 'gray' : key(['opositePalette', p.palette, p.tone], '#000')

export const Link = styled.a`
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  text-decoration: none;
  cursor: pointer;
  opacity: ${p => p.disabled ? 0.6 : 1};
  color: ${primaryColor};

  &:hover { 
    color: ${secondaryColor};
  }


`
