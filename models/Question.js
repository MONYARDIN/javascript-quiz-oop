export class Question{
    /**
     * 
     * @param {*string} text this is text of the question
     * @param {*string[]} choices this are the choices of the question 
     * @param {*string} answer this is the answer of the question
     */
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choice some text to guess 
     * @returns {boolean} returns true if the answer is correct
     */
    correctAnswer(choice){
        return choice === this.answer
    }
}


// new Question('cual es un lenguaje de programación', ['html', 'c'], 'c')


// const question = new Question()
// const question2 = new Question()


// console.log(question.correctAnswer())
// console.log(question.correctAnswer)
