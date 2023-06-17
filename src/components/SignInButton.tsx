"use client";

import { signIn } from "next-auth/react";

export default function SignInButton(props: {className?: string}) {
    return (
        <button onClick={() => signIn()} className={`rounded bg-purple-400 p-2 ${props.className}`}>
            Sign In
        </button> 
    )
}