'use client'

import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  const session = useSession()
  console.log(session.data)
  return <div>hello</div>
}

export default Page