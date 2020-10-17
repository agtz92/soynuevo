import React from "react"
import bCont from "../components/blocksContainer"

import Heading from "../components/heading"
import NavBar from "../components/navbar"

export default function Home() {
    return (

        <React.Fragment>
            <NavBar />
            <Heading color="gold">About</Heading>
            <bCont/>
        </React.Fragment>
    )

}
