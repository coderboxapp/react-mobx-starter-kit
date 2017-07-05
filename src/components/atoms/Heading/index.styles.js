import { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const fontSize = ({ level }) => `${20 + Math.round(10 * (1 / Number(level)))}px`

export default css`
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  color: ${p => palette(p.tone)};
  margin: ${p => p.margin || 0};
`
