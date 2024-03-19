import React from "react";
import "./tictac.css"

class Game extends React.Component{
    constructor(props){
        super(props)

        const nextTurn = Math.floor(Math.random()*2) == "0" ? "X" : "O"
        console.log(nextTurn)
        this.state = {
            boardDOM:[
                ["","",""],
                ["","",""],
                ["","",""]
            ],
            turn:nextTurn,
            historyDOM:[],
            history:[],
            turnNumber:1,
            endScreen:"none",
            winner:""
        }

        this.handleClick = this.handleClick.bind(this)
        this.newGame = this.newGame.bind(this)
    }
/*                */
    handleClick(event){
        const coords = [parseInt(event.currentTarget.id.replaceAll("col","")), parseInt(event.currentTarget.parentElement.id.replaceAll("row",""))]

        if(this.state.boardDOM[coords[1]][coords[0]] == ""){
        this.setState(state=>{
            const update = state.boardDOM;
            update[coords[1]][coords[0]] = state.turn;

            const updateHistory = state.historyDOM;
            updateHistory.push(<li onClick={this.rewind.bind(this, state.turnNumber - 1)} className="historyDiv"><p>{state.turnNumber} </p><SmallSquare coords={coords} /><p>:{state.turn}</p></li>)

            this.writeHistory(update);

            // If state.turn = "X", nextTurn = "O", otherwise nextTurn = "X"
            const nextTurn = state.turn === "X" ? "O" : "X";

            // Check to see if anyone has one
            this.check();
            return {
                boardDOM: update,
                turn: nextTurn,
                turnNumber: state.turnNumber + 1
            }
        })
        }else{
            return null;
        }
    }

    rewind(index, event){
        // Resets board state back to state from history
        let globalIndex = 0;
        const thisTurn = this.state.history[index]
        const newBoard = [["","",""],["","",""],["","",""]]
        for(let i = 0; i < 3; i ++){
            for(let k = 0; k < 3; k++){
                if(thisTurn[globalIndex] !== " "){
                    newBoard[i][k] = thisTurn[globalIndex]
                }
                globalIndex++
            }
        }

        const back = index + 2;
        let newHistoryDom = this.state.historyDOM.slice(0, index + 1)
        let newHistory = this.state.history.slice(0, index + 1)

        let nextTurn = event.currentTarget.children[2].innerText.replaceAll(":","") == "X" ? "O" : "X";

        this.setState(state=>({
            boardDOM:newBoard,
            turnNumber:back,
            historyDOM:newHistoryDom,
            history:newHistory,
            turn:nextTurn
        }))
    }

    // Checks to see if anyone has won
    check(){
        
        for (let i = 0; i < 3; i++) {
            if (this.state.boardDOM[i][0] !== "" && this.state.boardDOM[i][0] === this.state.boardDOM[i][1] && this.state.boardDOM[i][0] === this.state.boardDOM[i][2]) {
                this.victory(this.state.turn)
                return;
            }
        }
    
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (this.state.boardDOM[0][i] !== "" && this.state.boardDOM[0][i] === this.state.boardDOM[1][i] && this.state.boardDOM[0][i] === this.state.boardDOM[2][i]) {
                this.victory(this.state.turn)
                return;
            }
        }
    
        // Check diagonals
        if (this.state.boardDOM[0][0] !== "" && this.state.boardDOM[0][0] === this.state.boardDOM[1][1] && this.state.boardDOM[0][0] === this.state.boardDOM[2][2]) {
            this.victory(this.state.turn)
            return;
        }
        if (this.state.boardDOM[0][2] !== "" && this.state.boardDOM[0][2] === this.state.boardDOM[1][1] && this.state.boardDOM[0][2] === this.state.boardDOM[2][0]) {
            this.victory(this.state.turn)
            return;
        }
    

        if(this.state.historyDOM.length == 9){
            return null
        }

        // If no winner found, return null
        return null;
    }

    victory = (winner) =>{
        this.setState({
            endScreen:"flex",
            winner:winner
        })
    }

    writeHistory = (newHistory) =>{
        const rows = []
        for(let i = 0; i < 3; i++){
            const converted = newHistory[i].map((element)=>{
                return element == "" ? " " : element;
            })
            rows.push(converted.join(""));
        }
        const updateRows = rows.join("")

        this.setState((state)=>{
            const old = state.history;
            old.push(updateRows);
            console.log(old)
            return {
                history: old
            }
        },()=>{
            console.log(this.state)
        })
    }

    
    newGame(){
        const newTurn = Math.floor(Math.random()*2) == 0 ? "X" : "O"
        this.setState({
            boardDOM:[["","",""],
            ["","",""],
            ["","",""]],
            turnNumber:0,
            history:[],
            historyDOM:[],
            turn: newTurn,
            endScreen:"none"
        })
    }

    render(){
        return(
            <div className="container">
                <div className="overlay" style={{display:this.state.endScreen}}>
                    <p>{this.state.winner} WINS!!</p>
                    <button onClick={this.newGame}>New Game</button>
                </div>
                <div className="flex">
            <div className="grid">
            <div id="row0" className="row">
                <div id="col0" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[0][0]}</p>
                </div>
                <div id="col1" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[0][1]}</p>
                </div>
                <div id="col2" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[0][2]}</p>
                </div>
            </div>
            <div id="row1" className="row">
                <div id="col0" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[1][0]}</p>
                </div>
                <div id="col1" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[1][1]}</p>
                </div>
                <div id="col2" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[1][2]}</p>
                </div>
            </div>
            <div id="row2" className="row">
                <div id="col0" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[2][0]}</p>
                </div>
                <div id="col1" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[2][1]}</p>
                </div>
                <div id="col2" className="cell" onClick={this.handleClick} >
                    <p className="symbol">{this.state.boardDOM[2][2]}</p>
                </div>
            </div>
        </div>
        <p id="turnIndicator">{this.state.turn}'s Turn</p>
        </div>
        <div className="history">
            <h2><u>History</u></h2>
            <ol>
                {this.state.historyDOM}
            </ol>
        </div>
        </div>
        )
    }
}

function SmallSquare(props){
// const parent = []
//     for(let i = 0; i < 3; i++){
//         const row = []
//         for(let k = 0; k < 3; k++){
//             if(i == props.coords[1] && k == props.coords[0]){
//                 row.push(<div className="smallCell" style={{backgroundColor:"black"}}></div>)
//             }else{
//                 row.push(<div className="smallCell"></div>)
//             }
//         }
//         parent.push(<div className="smallRow">{row}</div>)
//     }
//     return(
//         <div className="smallGrid">
//             {parent}
//         </div>
//     )
    const positions = {
        0:"flex-start",
        1:"center",
        2:"flex-end"
    }

    return(
        <div className="smallGrid" style={{display:"flex", justifyContent:positions[props.coords[0]], alignItems:positions[props.coords[1]]}}>
            <div className="smallCell" style={{backgroundColor:"white"}}></div>
        </div>
    )
}

export default Game;
