import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quotes: [],
            click: 0
        }
        this.fetchQuote = this.fetchQuote.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    fetchQuote() {
        fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        })
        .then(response => response.json())
        .then(quote => {
            this.setState({quotes: quote})
        })
    }

    componentDidMount(){
        this.fetchQuote()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.click !== this.state.click){
            this.fetchQuote()
        }
    }

    handleClick(){
        this.setState((prev) => ({
            click: prev.click+1
        }))
    }

    render(){
        const { quotes } = this.state
        return(
            <div>
                <Navbar click={this.handleClick.bind(this)}/>
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