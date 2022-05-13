import {useState, useEffect} from "react";
import QuizAnswers from "./QuizAnswers";

function Quiz({currentUser}){
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [complete, setComplete] = useState(false)
  const [payout, setPayout] = useState(0)
  const [cash, setCash] = useState(0);
  const [showFinal, setShowFinal] = useState(false)
  const [quizStatus, setQuizStatus] = useState(false)

  // useEffect( () => {
  //   // checkAnswers();
  // }, [patchCash])

 



  useEffect(() => {
    fetch(`me`)
      .then((r) => r.json())
      .then((cash) => {
        setCash(cash.cash);
      });
  }, []);

  useEffect(() => {
    fetch(`me`)
      .then((r) => r.json())
      .then((currentUser) => {
        setQuizStatus(currentUser.quiz_taken);
        console.log(currentUser.quiz_taken)
      });
  }, []);

  const questions = [
    {
      question: "Back in 2000, the stock of global debt was 83 Trillion. What was that amount as of the end of 2021?",
    answers: [
      {answerText: "150 Trillion", isCorrect: false, difficulty: "hard"},
      {answerText: "193 Trillion", isCorrect: false, difficulty: "hard"},
      {answerText: "245 Trillion", isCorrect: false, difficulty: "hard"},
      {answerText: "295 Trillion", isCorrect: true, difficulty: "hard"},

    ],

  },{
    question: "On February 2nd, the stocks of this big tech company went crashing down 26% and was the 'biggest one-day dollar drop in market history', which company was this?",
    difficulty: "easy",
    answers: [
     {answerText: "Twitter", isCorrect: false, difficulty: "medium"},
      {answerText: "Instagram", isCorrect: false, difficulty: "medium"},
      {answerText: "Meta", isCorrect: true, difficulty: "medium"},
      {answerText: "Facebook", isCorrect: false, difficulty: "medium"}
    ]
  },{
  question: "Which of the following investments tends to be the most secure?",

  answers: [
    {answerText: "Bonds", isCorrect: true, difficulty: "easy"},
    {answerText: "ETFs", isCorrect: false, difficulty: "easy"},
    {answerText: "Large-cap stocks", isCorrect: false, difficulty: "easy"},
    {answerText: "Gold", isCorrect: false, difficulty: "easy"},
    {  difficulty: "easy"}
  ]
},
{
  question: "Great Work! You have completed the quiz. See your answer by clicking below.",
  answers: [
    {answerText: "See Results", isCorrect: true, difficulty: ''}
  ]
}
  ]



  function checkAnswers(isCorrect){
    if(isCorrect.isCorrect){
      console.log(payout)
    

      if(isCorrect.difficulty === "hard"){
        setPayout((payout) =>{ return payout + 1000});
        console.log('payout now 1', payout)
      }
      if(isCorrect.difficulty === "medium"){
        setPayout(payout + 750)
        console.log('payout now 2', payout)
      }
      if(isCorrect.difficulty === "easy"){
        setPayout(payout + 500)
        console.log('payout now 3', payout)
      }
      if(isCorrect.difficult === ''){
        return payout
      }
    } 

  }
  function handleAnswer(isCorrect){
    setCurrentQuestion(currentQuestion + 1)
    let nextQuestion = currentQuestion +1
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
      checkAnswers(isCorrect);
      console.log('firing x')
    } else {
      setComplete(true);
      if(quizStatus === false){
      patchCash();
      }else{
        alert('You have already taken the quiz today and cannot receive further cash until tomorrow!')
      }
    }
  }


  function patchCash(){
      let newCash = cash + payout;
      console.log('paying out', payout)

      let configObj1 = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cash: newCash  }),
      };

      fetch(`/users/${currentUser.id}}`, configObj1)
        .then((r) => r.json())
        .then((data) => {
          console.log("patching",data);
        });
        setPayout(payout);
        setCash(newCash);

        let configObj2 = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({quiz_taken: true}),
        };
  
        fetch(`/users/${currentUser.id}}`, configObj2)
          .then((r) => r.json())
          .then((data) => {
            console.log("patching",data);
          });
    }


    let results = questions.filter((question) =>{
      if(question.answers.length > 1){
        return true
      }})  


  
      return(
        

    <section className="quizSection" >
      <h3 className="dailyQuiz">Daily Quiz  </h3>
      {quizStatus ? <h3 className="quizAlert"> You have already taken the quiz today!</h3> : null}
      <p class="quizIntro"> Take a quiz and earn cash for correct answers! Your current cash at this time is ${cash.toFixed(2)}</p>
     {complete ? (<section> <div className="score"> <h3>Thank you for completing today's quiz!</h3> 
     <h3> You gained ${payout}!</h3> 
     </div>

     <h4 class="correctionH4"> Correct Answers</h4>
     {results.map((question) =>(
       <QuizAnswers question={question} />
     ))}
     </section>) : (
        <div className="quiz">
      <h2 className='question'>{questions[currentQuestion].question }</h2>
	<div className='answers'>
						{questions[currentQuestion].answers.map((answerOption) => (
							<h3 className="answer" onClick={() => handleAnswer(answerOption)}>{answerOption.answerText} </h3>
						))}
            
            </div>
            </div>
     )}
    </section>
  )
}

export default Quiz;