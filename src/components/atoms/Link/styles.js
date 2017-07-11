import styled from 'styled-components'
import { font, size, palette } from 'styled-theme'
import { fromProps } from 'styled-utils'

const color = p => p.disabled ? 'gray' : palette(fromProps(p), p.tone)
// const secondaryColor = p => p.disabled ? 'gray' : key(['opositePalette', p.palette, p.tone], '#000')

export const Link = styled.a`
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  opacity: ${p => p.disabled ? 0.6 : 1};
  color: ${color};
  i { color: ${color}; }
`
