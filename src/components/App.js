import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quotes: []
        }
    }

    _fetchQuote() {
        fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(response => response.json())
        .then(quote => {
            this.setState({quotes: quote})
        })
    }

    componentWillMount(){
        this._fetchQuote()
    }

    render(){
        const { quotes } = this.state
        return(
            <div>
                <Navbar click={() => this._fetchQuote()}/>
                {quotes && quotes.map(quote => (
                    <Quote 
                     key={quote.ID}
                     quote={quote.content}
                     author={quote.title}   
                    />
                ))}
            </div>
        )
    }
}

export default App