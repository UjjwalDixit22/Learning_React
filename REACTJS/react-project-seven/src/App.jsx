
import './App.css'

function App() {

  function handleClick(){
    // console.log("Button clicked!");
    alert("Button clicked!");
  }
  function handlemouseover(){
    // console.log("Mouse over the text!");
    alert("Mouse over the text!");
  }
  function handleInputChange(event){
    console.log("Input changed till now : "+event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    // Prevent the default form submission behavior reloading and other things
    // You can handle form submission logic here
    console.log("Form submitted!");
  }
  return (
    <div>
      <button onClick={()=>alert("Button was clicked")}>Click MEE</button>

      <h1>React Project Seven</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form>
      <p onMouseOver={handlemouseover} style={{border:"2px solid black"}}>
        Hey Para!!
      </p>
      <button onClick ={handleClick}>
        Click me
        </button>
    </div>
  )

}

export default App