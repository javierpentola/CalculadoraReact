import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';
import HistoryComponent from './components/HistoryComponent';

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
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <ResultComponent result={this.state.result} />
                <KeyPadComponent onClick={this.onClick} />
                <HistoryComponent history={this.state.history} />
            </div>
        );
    }
}

export default App;
