'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

type Props = {}

export default function Button({ }: Props) {
    return (
        <button onClick={() => signIn(undefined, { callbackUrl: process.env.NEXT_PUBLIC_HOST + '/authed/blog' })} className='bg-purple-500 text-white font-bold border p-4 rounded-md'>SignIn</button>
    )
}