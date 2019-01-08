import React from 'react'

const Navbar = ({click}) => {
    return(
        <header>
            <h1 className="logo">
                quote.
            </h1>
            <button onClick={click}>
                New &gt;
            </button>
        </header>
    )
}

export default Navbar