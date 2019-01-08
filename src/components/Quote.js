import React from 'react'

const Quote = ({quote, author}) => {
    return(
        <div>
            <p dangerouslySetInnerHTML={{__html: quote}}>
            </p>
            <p>
                <strong>{author}</strong>
            </p>
        </div>
    )
}

export default Quote