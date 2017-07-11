import React from 'react'
import { shallow } from 'enzyme'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />)

describe('Heading', () => {
  it('renders with defaults props', () => {
    let element = wrap()
    expect(element.props().palette).toEqual('black')
    expect(element.props().tone).toEqual(1)
    expect(element.props().level).toEqual(1)
  })

  it('renders h1 by default', () => {
    const wrapper = wrap().dive()
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
