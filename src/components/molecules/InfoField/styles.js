import styled from 'styled-components'
import { palette, size } from 'styled-theme'

export const Wrapper = styled.div`
  display: flex;
  padding: 12px 5px;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${palette('grayscale', 3)};
  font-size: ${size('fontSize')};

  &:last-child {
    border-bottom: 0 solid;
  }

  label {
    font-size: 12px;
    min-width: 120px;
    text-align: left;
    color: ${palette('grayscale', 1)};
    text-transform: uppercase;
  }

  & > div:last-child {
    text-align: right;
    color: ${palette(1)};
  }
`
