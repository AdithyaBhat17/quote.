import React from 'react'

const Navbar = (props) => {
    return(
        <header>
            <h1 className="logo">
                quote.
            </h1>
            <button onClick={props.click}>
                New &gt;
            </button>
        </header>
    )
}

export default Navbar