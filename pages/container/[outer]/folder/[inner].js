import { useRouter } from 'next/router'

import React from 'react'

export default function Inner() {
    const {query}=useRouter()
    return (
        <h1>Outer {query.outer} Inner {query.inner}</h1>
    )
}
