import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';
import HistoryComponent from './components/HistoryComponent';
import "xp.css/dist/XP.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: "",
            history: []
        };
    }

    onClick = button => {
        if (button === "=") {
            this.calculate();
        } else if (button === "C") {
            this.reset();
        } else if (button === "CE") {
            this.backspace();
        } else {
            this.setState({
                result: this.state.result + button
            });
        }
    };

    calculate = () => {
        let checkResult = this.state.result;
        if (checkResult.includes('--')) {
            checkResult = checkResult.replace('--', '+');
        }

        try {
            const evalResult = eval(checkResult) || "";
            this.setState(prevState => ({
                result: evalResult + "",
                history: [...prevState.history, `${checkResult} = ${evalResult}`]
            }));
        } catch (e) {
            this.setState({
                result: "error"
            });
        }
    };

    reset = () => {
        this.setState({
            result: ""
        });
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        });
    };

    render() {
        return (
            <div className="window calculator-body">
                <div className="title-bar">
                    <div className="title-bar-text">Simple Calculator</div>
                </div>
                <div className="window-body">
                    <ResultComponent result={this.state.result} />
                    <KeyPadComponent onClick={this.onClick} />
                    <HistoryComponent history={this.state.history} />
                </div>
            </div>
        );
    }
}

export default App;
