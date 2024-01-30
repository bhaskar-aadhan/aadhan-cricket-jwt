import React from 'react';
import jwt from 'jsonwebtoken';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

const secretKey = 'aadhanKey'

export const loader:LoaderFunction = () => {
    const payload = {
        url: 'wss://wsclientworker.aadhan.workers.dev/',
    }
    try{
        const token = jwt.sign(payload, secretKey, { algorithm : 'HS256' });
        return json({token})
    }catch(error){
        console.log(`jwt loader error: ${error}`)
        return json({error : 'better luck next time!', status: 500})
    }
}

const JwtIndex = () => {
    const { token } = useLoaderData()
  return (
    <>
        {token}
    </>
  )
}

export default JwtIndex