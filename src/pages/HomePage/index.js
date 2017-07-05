import React from 'react'
import { SimpleTemplate } from 'templates'
import { Dialog, Link, Heading } from 'components'

const HomePage = ({ params, location }) => {
  return (
    <SimpleTemplate>
      <Dialog header={<div>Atomic Design</div>}>
        <Heading level='4'>Read More about:</Heading>
        <Link href='http://bradfrost.com/blog/post/atomic-web-design/' palette='danger'>Atomic Design</Link>
      </Dialog>
    </SimpleTemplate>
  )
}

export default HomePage
