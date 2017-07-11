import { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { fromProps } from 'styled-utils'

const fontSize = ({ level }) => `${22 + Math.round(18 * (1 / Number(level)))}px`

export default css`
  display: ${p => p.inline ? 'inline-block' : 'block'};
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  color: ${p => palette(fromProps(p), p.tone)};
  margin: ${p => p.margin || 0};
`
