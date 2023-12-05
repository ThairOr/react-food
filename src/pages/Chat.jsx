import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContesxt";


const Chat = () => {
  const chatStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const messageStyle = {
    outline: "solid black 1px",
  };

  const { user } = useContext(AuthContext);

  const [chatMessages, setChatMessages] = useState(null);
  const [textMsg, setTextMsg] = useState("");

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      messagesArray.push(doc.data());
    });
      setChatMessages(messagesArray);
      console.log('messagesArray', messagesArray )
  };

  const formatDate = (date) => {
    if (date instanceof Timestamp) {
      return new Date(date.seconds * 1000).toLocaleString();
    } else {
      return new Date(date).toLocaleString();
    }
  };

  const submitMessage = async () => {
    const newChatMsg = {
      author: user && user.email ? user.email : "",
      text: textMsg,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const getMessagesLiveUpdate = () => {
      const q = query(collection(db, "chat"));
      console.log('q', q)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      setChatMessages(messagesArray);
    });
  
  };

  useEffect(() => {
    getMessagesLiveUpdate();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
        />
        <Button onClick={submitMessage}>📤</Button>
      </div>
      <div style={chatStyle}>
        {chatMessages &&
          chatMessages.map((msg, index) => (
            <div key={index} style={messageStyle}>
              <p>{msg.author}</p>
              <p>{msg.text}</p>
              <p>{formatDate(msg.date)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Chat;
