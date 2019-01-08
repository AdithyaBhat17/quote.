import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'

import Moon from '../assets/Moon.png'
import Rocket from '../assets/rocket.png'
import Blood from '../assets/Blood.png'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quotes: [],
            click: 0,
            loading: true
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
            quote[0].content.length > 300
             ? this.setState(prev => ({click: prev.click + 1}))
             : this.setState({quotes: quote,loading: false})
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

    text(){
        return document.getElementById('quote').textContent
    }

    render(){
        const { quotes, click, loading } = this.state
        if(loading)
            return <div> loading </div>
        const body = document.getElementById('body')
        // console.log(document.getElementById('quote').textContent)
        if(window.innerWidth <= 768){
            click % 2 === 0
            ? body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${Moon}) `
            : click % 3 === 0
            ? body.style.backgroundImage = ` linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${Rocket})`
            : body.style.backgroundImage = ` linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${Blood})`
        }
        
        return(
            <div>
                <Navbar click={this.handleClick}/>
                {quotes && quotes.map(quote => (
                    <Quote 
                     key={quote.ID}
                     quote={quote.content}
                     author={quote.title}  
                     text={this.text.bind(this)} 
                    />
                ))}
            </div>
        )
    }
}

export default App