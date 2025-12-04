import Router from "./routes"
import Provider from "./providers/index"

function App() {
  return (
    <Provider>
      <Router/> 
    </Provider>
  )
}

export default App