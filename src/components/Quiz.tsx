import { useState } from "react";

function Quiz(){
  type Questions ={
    question: String,
    réponse: Boolean
  }

  const quizs: Questions[] = [
    {question: "React est un framework ?" , réponse: false},
    {question: "useState permet de gérer l'état ?" , réponse: true},
    {question: "JSX est une extension CSS ?" , réponse: false},
    {question: "Le Virtual DOM est plus rapide ?" , réponse: true}
  ]

  const [compte, setCompte] = useState(0);
  const [finished , setFinished] = useState(false);
  const [score, setScore] = useState(0);

  function roll(){
    document.getElementById('res')!.innerText = "";
    document.getElementsByClassName('response')[0]?.removeAttribute('disabled');
    document.getElementsByClassName('response')[1]?.removeAttribute('disabled');
    if (compte === 3)
        setFinished(true);
    setCompte(compte + 1);
  }

  function verification(reponse : boolean){
    document.getElementsByClassName('response')[0]?.setAttribute('disabled', 'true');
    document.getElementsByClassName('response')[1]?.setAttribute('disabled', 'true');
    if (reponse === quizs[compte].réponse)
    {
      setScore(score + 1);
      document.getElementById('res')!.innerText = "Correct !";
    }
    else
      {
        document.getElementById('res')!.innerText = "Incorrect !";
      }
  }

  function reset(){
    setCompte(0);
    setFinished(false);
    setScore(0);
  }
  
  return(
    <div>
      {finished?(
        <div>
            <h1>Score: {score}/4</h1>
            <button onClick={reset}>recommencer</button>
        </div>
        
      ):(
        <div>
            <output style={{margin: 10}}>{quizs[compte].question}</output><br />
            <button onClick={() => {verification(true)}} className="response">Vrai ✅</button>
            <button style={{margin: 10}} onClick={() => {verification(false)}} className="response">Faux ❌</button><br />
            <output style={{margin: 10}} id="res"></output><br />
            <button style={{margin: 10}} onClick={roll}>Question suivante</button>
        </div>
      )}
      
    </div>
  )
}

export default Quiz