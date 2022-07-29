import './App.css';
import Form from "./Form.js";

// App collects all components into one location, before returning the "final" page/app. In this case, only one component is imported (Form).
function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
