import { useRouter } from "next/router";

import React from 'react'

export default function Catch() {
    const router=useRouter()
    const {param=[]}=router.query
    return (
        <h1>Catch Param1: {param[0]} param2: {param[1]}</h1>
    )
}
