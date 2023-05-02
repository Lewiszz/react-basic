import React from "react";
import "./App.css";
import Title from "./components/Title";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Trying" />
        <Button>Submit</Button>
      </main>
    </div>
  );
}

export default App;
