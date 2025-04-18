const ChampText = () => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    console.log("Tu as tapé : ", e.target.value);
  }
  return <input type="text" onInput={handleChange}/>
}

export default ChampText;