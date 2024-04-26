// Assessment.js

import React from 'react';

class Assessment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: null,
            userAnswers: [],
            answers: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
        };
    }

    calculateScore = (e) => {
        e.preventDefault();
        let score = 0;
        let userAnswers = [];

        const questions = document.querySelectorAll('.question');
        for (let i = 0; i < questions.length; i++) {
            const radios = questions[i].querySelectorAll('input[type=radio]:checked');
            if (radios.length > 0) {
                userAnswers.push(radios[0].value);
                if (radios[0].value === this.state.answers[i]) {
                    score++;
                }
            } else {
                userAnswers.push(null);
            }
        }

        this.setState({ score, userAnswers });
    }

    render() {
        return (
            <div className="container">
                <form id="quizForm" onSubmit={this.calculateScore}>
                    {/* Your questions and options go here */}
                    {/* For example: */}
                    <div className="question">
                        <h3>Question 1:</h3>
                        <p>Who won the FIFA World Cup in 2018?</p>
                        <label><input type="radio" name="q1" value="a" />France</label>
                        <label><input type="radio" name="q1" value="b" />Brazil</label>
                        <label><input type="radio" name="q1" value="c" />Germany</label>
                        <label><input type="radio" name="q1" value="d" />Argentina</label>
                    </div>
                    {/* Add more questions here */}
                    <input type="submit" value="Submit" />
                </form>
                <div id="score">
                    {this.state.score !== null && (
                        <div>
                            Your Score: {this.state.score}/{this.state.answers.length}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Assessment;
