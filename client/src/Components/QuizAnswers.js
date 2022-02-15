function QuizAnswers( {question}){

  let questionAnswers = question.answers.filter((question1) =>{
    if(question1.isCorrect === true){
      return true
    }})  

    console.log('qa',questionAnswers[0].answerText)

console.log(question)

  return(
    <div className="quizAnswers">
      <h3 className="answerQuestion">{question.question}</h3>
      <p className="answerText">{questionAnswers[0].answerText}</p>
    </div>
  )
}

export default QuizAnswers;