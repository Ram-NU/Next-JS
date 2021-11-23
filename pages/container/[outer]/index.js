import { useRouter } from 'next/router'

import React from 'react'

export default function Outer() {
    const {query}=useRouter()
    return (
        <h1>Outer {query.outer}</h1>
    )
}
