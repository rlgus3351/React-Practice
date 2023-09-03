import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        // state의 초기값 설정
        this.state = {
            number:0
        };
    }
    render(){
        // state를 조회할 때는 this.state로 조회.
        const {number} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <button 
                    onClick={() => {
                        this.setState({ number : number + 1 });
                    }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;