import { useRouter } from 'next/router'

import React from 'react'

export default function Sub() {

    const {query}=useRouter()

    return (
        <h1>Sub {query.sub}</h1>
    )
}
