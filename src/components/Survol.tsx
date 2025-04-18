const Survol = () => {
  function afficheMessage(){
    console.log("Tu survoles la zone");
  }
  return <div onMouseOver={afficheMessage}> Passe ta sourie ici </div>
}

export default Survol;