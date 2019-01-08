import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faShareAlt)

const Quote = ({ author, text }) => {
    return(
        <div>
            <p id="quote"></p>
            <p>
                <strong>{author}</strong>
            </p>
            <a href={`whatsapp://send?text=${text}\n\n%2D%20%2A${author}%2A`} 
            onClick={console.log(text)}>
                <FontAwesomeIcon icon='share-alt' color='#fff'/>
                &nbsp;whatsapp 
            </a>
        </div>
    )
}

export default Quote