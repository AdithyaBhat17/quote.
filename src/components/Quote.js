import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faShareAlt)

const Quote = ({quote, author, text}) => {
    // console.log(document.getElementById('quote').textContent)
    return(
        <div>
            {<p
             id="quote"
             dangerouslySetInnerHTML={{__html: quote}}>
            </p>}
            <p>
                <strong>{author}</strong>
            </p>
            <a href={`whatsapp://send?text=${text}\n\n%2D%20%2A${author}`}>
                <FontAwesomeIcon icon='share-alt' color='#fff'/>
                &nbsp;whatsapp 
            </a>
        </div>
    )
}

export default Quote