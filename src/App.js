import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './components/Message';
import { db } from './firebase';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // { userName: 'Jack', message: 'Hey Gao Gao' },
    // { userName: 'Miranda', message: 'Hi Papa'}, 
    // { userName: 'Jess', message: 'Hi Miranda'}
  ]);
  const [username, setUsername] = useState('Thai');

  //Database listener
  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  useEffect(() => {
    // setUserName(prompt('Please enter your name'));
  }, []) 


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, message: input}]);
    setInput('')
  }


  return (
    <div className="App">
      <h1>Facebook Messenger - Jack Dang</h1>
      <h2>Welcome {username}</h2>
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
          <Message username = {username} message={message} />
        ))
      }
    </div>
  );
}

export default App;