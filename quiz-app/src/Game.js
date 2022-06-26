import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';
import Previous from './Previous';
import Next from './Next';
export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            score: 0,
            scoreDenominator: 0
        };
        this.changeQuestion = this.changeQuestion.bind(this);
    }

    changeQuestion(increment) {
        // let newQ = this.state.questionNumber + increment;
        this.setState((state) => ({
            questionNumber: state.questionNumber + increment
        }));
    }

    render() {
        return(
            <div className = 'panel'>
                <Score scoreDenominator = {this.state.scoreDenominator} 
                score={this.state.score} />
                <h3>
                    <Question questionNumber = {this.state.questionNumber} />
                </h3>
                <Answer questionNumber = {this.state.questionNumber}
                setState = {p => {this.setState(p)}}
                score = {this.state.score}
                scoreDenominator = {this.state.scoreDenominator} />
                
                <div className = 'navButtons'>
                    <Previous onClick={this.changeQuestion} />
                    <Next onClick={this.changeQuestion} />
                </div>
            </div>
        );
    }
}