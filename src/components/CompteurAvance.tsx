import { useState } from "react";

function CompteurAvancé(){
  const [nbr, setCompte] = useState(0);

  let interval :any;

  function Increment(){
        setCompte((nbr) => nbr + 1)
  }

  function Renisialiser(){
    setCompte(0);
  }

  return(
    <div>
      <p>Valeur actuelle : {nbr}</p>
      <button onMouseEnter={Increment} onMouseLeave={stop}>Incrémenter</button>
      <button onClick={Renisialiser}>Renisialiser</button>
    </div>
  );
}

export default CompteurAvancé;