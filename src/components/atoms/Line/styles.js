import styled from 'styled-components'
import { palette } from 'styled-theme'
import { fromProps, toPx } from 'styled-utils'

export const Line = styled.hr`
  width: ${p => toPx(p.size) || '80px'};
  height: 4px;
  border-radius: 2px;
  background: ${p => palette(fromProps(p), p.tone)};
  display: inline-block;
  border-style: none;
  margin: 15px auto 15px auto;
`
