import { useState } from "react";

function CompteurSimple(){
  const [nbr, setCompte] = useState(0);

  function Increment(){
    setCompte(nbr + 1);
  }

  return(
    <div>
      <p>Valeur actuelle : {nbr}</p>
      <button onMouseEnter={Increment}>Incrémenter</button>
    </div>
  );
}

export default CompteurSimple;