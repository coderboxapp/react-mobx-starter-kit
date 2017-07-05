import styled from 'styled-components'
import { font, size } from 'styled-theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  box-sizing: border-box;
  font-family: ${font('primary')};
  font-size: ${size('font')};
`
export const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
`
