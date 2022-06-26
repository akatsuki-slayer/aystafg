import React from 'react';
import AnswerButton from './AnswerButton';

export default class Answer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answerList: [['1 year', '1 day', '1 month'], 
        ['deoxyribonucleic acid', 'dinitronic acid', 'deuterionucleic acid'], ['L', 'C', 'X']],
        };
    }

    render(){
        const answers = this.state.answerList[this.props.questionNumber].map((answer, index) => 
            {
                return (
                    <AnswerButton 
                    className={this.state.buttonClass}
                    answerNumber={index}
                    answer = {answer}
                    questionNumber = {this.props.questionNumber}
                    setGameState = {p => {this.props.setState(p)}}
                    score = {this.props.score}
                    questionsAnswered = {this.props.questionsAnswered}
                    hasAnswered = {this.props.hasAnswered}
                    />
                ) 
            }
        );

        return(
            <div className = 'answerContainer'>
                {answers}
            </div>
        );
    }
}