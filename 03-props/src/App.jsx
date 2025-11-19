import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Milan" age={20} img="https://plus.unsplash.com/premium_photo-1761947288852-933ad1a61d22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="bhavin" age={18} img="https://images.unsplash.com/photo-1738959869828-5084901ff8e0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="meet" age={11} img="https://plus.unsplash.com/premium_photo-1762560038784-6d927493a029?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  );
};

export default App;
