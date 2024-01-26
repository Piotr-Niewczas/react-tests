import { useState } from "react";
import MyButton from "../components/MyButton";

const Home = () => {
  let [text, setText] = useState("");
  function HandleButtonClick() {
    text === "" ? setText("Pressed") : setText("");
  }
  return (
    <div>
      <h1>Hello world!</h1>
      <div>
        <p>Button</p>
        <MyButton onClick={HandleButtonClick}> text in button</MyButton>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Home;
