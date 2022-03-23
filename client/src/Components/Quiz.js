import {useState, useEffect} from "react";
import QuizAnswers from "./QuizAnswers";

function Quiz({currenUser}){
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showCorrectAnswer, setshowCorrectAnswer] = useState(false)
  const [complete, setComplete] = useState(false)
  const [payout, setPayout] = useState(0)
  const [cash, setCash] = useState(0)



  useEffect(() => {
    fetch(`me`)
      .then((r) => r.json())
      .then((cash) => {
        
        setCash(cash.cash);
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
}
  ]
  function handleAnswer(isCorrect){
    setCurrentQuestion(currentQuestion + 1)
    let nextQuestion = currentQuestion +1
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    
      if(isCorrect.isCorrect){
      console.log(payout)
    

      if(isCorrect.difficulty === "hard"){
        setPayout(payout + 1000)
        console.log('payout now', payout)
      }
      if(isCorrect.difficulty === "medium"){
        setPayout(payout + 750)
        console.log('payout now', payout)
      }
      if(isCorrect.difficulty === "easy"){
        setPayout(payout + 500)
        console.log('payout now', payout)
      }
  
      console.log("ending", payout)
      

    } 
    // setPayout(payout)
 
    } else {
      setComplete(true)
      console.log("total payout",payout)
      // setPayout(payout)


      let newCash = cash + payout + 500
      let configObj1 = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cash: newCash  }),
      };

      fetch(`/users/1}`, configObj1)
        .then((r) => r.json())
        .then((data) => {
          console.log("patching",data);
        });
        setCash(newCash)
        setPayout(payout + 500)
    }


    }
    let list = questions.answers

  // let configureCash = cash.toFixed(2)
  // console.log(currentUser)

  return(
    <section className="quizSection" >
      <h3 className="dailyQuiz">Daily Quiz  </h3>
      <p class="quizIntro"> Take a quiz and earn cash for correct answers! Your current cash at this time is ${cash.toFixed(2)}</p>
     {complete ? (<section> <div className="score"> <h3>Thank you for completing today's quiz!</h3> 
     <h3> You gained ${payout}!</h3> 
     </div>

     <h4 class="correctionH4"> Correct Answers</h4>
     {questions.map((question) =>(
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