import React, { Component } from 'react'


class LetteCounter extends Component{

    state = {
        inputSearch : ''
    }

    onchangeHandler = (event) => {
        const {value}= event.target
        this.setState({ inputSearch:value})
    }
    render() {
        const {inputSearch}= this.state
        return (
    <div>
        <center>
            <input type="text"
            onChange={this.onchangeHandler}
            style={{backgroundColor:'black',color:'white',width:'400px',height:'50px',   borderRadius:'6px',marginTop:"30px",paddingLeft:"25px"}}        placeholder="LetterCounterInput" />
             <h1>LettersCount:     <span style={{ color: "green",fontSize: "38px"}}>{inputSearch.length}</span></h1>px"
        </center>
    </div>
    )

}
}

export default LetteCounter