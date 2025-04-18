const MonBouton = () => {
  function Greeting(){
    alert("Bienvenu !");
  }
  return <button onClick={Greeting}> Clique-moi </button>
}

export default MonBouton;