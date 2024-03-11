import React from "react";

class ButtonThing extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value:"▢"
        }

        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return(
            <div>
                <Buttons handleClick={this.handleClick} />

                <p id="symbol">{this.state.value}</p>

            </div>
        )
    }  
      
    handleClick(props){
        const text = props.target.innerText
        this.setState({
            value:text
        })
    }  
}

class Buttons extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="buttons">
                    <button onClick={this.props.handleClick} >▢</button>
                    <button onClick={this.props.handleClick} >◁</button>
                    <button onClick={this.props.handleClick} >◇</button>
                    <button onClick={this.props.handleClick} >○</button>
                </div>
        )
    }
}

export default ButtonThing;