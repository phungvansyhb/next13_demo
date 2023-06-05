"use client"
import useCheckNetworkState from '@/shared/hooks/useCheckNetworkState';
import { example } from '@/shared/utils/chatGPT';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

type Props = {}

export default function Page({ }: Props) {
    const { data } = useSession();
    useCheckNetworkState();
    // const [arrayState, setArrayState] = useState(['abc', '123', ' cho meo ga'])

    return (
        <>
            {/* <button onClick={() => handleChange()} className='bg-orange-500 p-4 rounded-md'>Change</button> */}
            <div>{JSON.stringify(data)}</div>
            {/* {arrayState.map(item => <div key={item} className='p-4 border w-max'>{item}</div>)} */}
        </>

    )
}