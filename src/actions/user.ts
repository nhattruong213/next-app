"use server"

import { revalidateTag } from "next/cache"

export const handleCreate = async (data: any) => {
    const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    revalidateTag("users")
    return await res.json()
}