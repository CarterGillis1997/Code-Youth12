import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);

        console.log(props)
        this.addition()
    }

    render(){
        this.addition()
        return(
            <footer>
                <p>{this.props.text} {this.addition()}</p>
            </footer>
        )
    }

    addition(){
        console.log(5 + 10)
        return 5 + 10;
    }
}

export default Footer;