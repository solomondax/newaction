import React, { Component } from 'react'
import './RandomNumbers.css'

class RandomNumbers extends Component{

    state = { Number: 0 }
    
        randomNumber = () => {
            const generated = Math.ceil(Math.random() * 100)
            this.setState({Number:generated})
        }
            
        
            render() {
                const {Number} = this.state
                return (
                    <div className='main-container'>
                        <div className ="sub-container">
                            <h1>Random Numbers</h1>
                            <p>generate a random numbers in the range of 0 to 100.</p>
                            <button onClick={this.randomNumber}>generate</button>
                            <p className='number'>{ Number}</p>
                        </div>
                        
                    </div>
                )
            }
        }
        export default RandomNumbers
    
          


               
        
 

        