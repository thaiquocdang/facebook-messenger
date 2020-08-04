import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi', 'whatssup']);
  console.log(input);
  console.log(messages);
  const sendMessage = (event) => {
    // all the logic to send a message goes here
    setMessages([...messages, input]);
    setInput('')

  }
  return (
    <div className="App">
      <h1>Facebook Messenger</h1>

      {/* input field*/}
      <input value={input} onChange={e =>setInput(e.target.value)}/>
      <button onClick={() => sendMessage()}>Send Message</button>
      {/* button */}
      {/* messages themselves */}
    </div>
  );
}

export default App;
