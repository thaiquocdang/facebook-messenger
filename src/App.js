import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './components/Message';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { userName: 'Jack', text: 'Hey Gao Gao' },
    { userName: 'Miranda', text: 'Hi Papa'}, 
    { userName: 'Jess', text: 'Hi Miranda'}
  ]);
  const [userName, setUserName] = useState('Thai');


  useEffect(() => {
    // setUserName(prompt('Please enter your name'));
  }, []) 


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {userName: userName, text: input}]);
    setInput('')
  }


  return (
    <div className="App">
      <h1>Facebook Messenger - Jack Dang</h1>
      <h2>Welcome {userName}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
          <Button 
            disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messages themselves */}
      {
        messages.map(message => (
          <Message userName = {userName} message={message} />
        ))
      }
    </div>
  );
}

export default App;