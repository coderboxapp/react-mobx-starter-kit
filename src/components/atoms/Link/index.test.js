import React from 'react'
import { Icon } from '@coderbox/components'
import { shallow } from 'enzyme'
import Link from '.'

const wrap = (props = {}) => shallow(<Link {...props} />)

describe('Link', () => {
  it('renders with defaults props', () => {
    let element = wrap()
    expect(element.props().palette).toEqual('black')
    expect(element.props().tone).toEqual(1)
  })

  it('renders children and icon', () => {
    let element = wrap({ children: 'Go Home', icon: 'home' }).dive()
    let icon = element.find(Icon).dive()

    expect(element.contains('Go Home')).toEqual(true)
    expect(element.find('a')).toHaveLength(1)

    expect(icon.contains('home')).toEqual(true)
    expect(icon.hasClass('material-icons')).toBeTruthy()
  })
})
