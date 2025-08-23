"use client"

import { useSession } from "next-auth/react"

export default function UserInfo() {
    const session = useSession()
    console.log("Client session:", session)
    return (
        <div></div>
    )
}
