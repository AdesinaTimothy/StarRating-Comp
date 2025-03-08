import StarComp from "./StarComp"


function App() {
  
  return (
    <div>
      <h2>Hello</h2>
      <p>This is going to be a resuable star comoponent</p>
      <StarComp maxRating = {5} color = "red" rateColor = "purple" fontSize={24}/>
    </div>
  )
}

export default App
