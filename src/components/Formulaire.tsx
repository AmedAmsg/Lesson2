function Form(){
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    alert("Formulare Envoyer");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom"/>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default Form;