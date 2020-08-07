import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './components/Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from './image/messenger-logo.png'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // { userName: 'Jack', message: 'Hey Gao Gao' },
    // { userName: 'Miranda', message: 'Hi Papa'}, 
    // { userName: 'Jess', message: 'Hi Miranda'}
  ]);
  const [username, setUsername] = useState('');

  //Database listener
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();

    //send data to database
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, {username: username, message: input}]);
    setInput('')
  }


  return (
    <div className="App">
      <img className="messenger-logo" src={logo} />
      <h1>Facebook Messenger - Jack Dang</h1>
      <h2>Welcome {`${username|| 'Unknown User'}`}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter a message" />

          {/*Send button */}
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;

// <Button
//   disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}
// >
//   Send Message
//           </Button>