import React from 'react'
import { shallow } from 'enzyme'
import Line from '.'

const wrap = (props = {}) => shallow(<Line {...props} />)

describe('Line', () => {
  it('renders with defaults props', () => {
    let element = wrap()
    expect(element.props().palette).toEqual('black')
    expect(element.props().tone).toEqual(1)
  })
})