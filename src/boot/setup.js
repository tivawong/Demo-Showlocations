import React from "react";
import App from "../App";
import firebase from "firebase/app";
import "firebase/auth";
import "@firebase/firestore";
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const firebaseConfig = {
  apiKey: "AIzaSyCruAmn3hB5_4yPp9_VuCdU1zlVnCD2a-s",
  authDomain: "testlocations-78e79.firebaseapp.com",
  databaseURL: "https://testlocations-78e79.firebaseio.com",
  projectId: "testlocations-78e79",
  storageBucket: "testlocations-78e79.appspot.com",
  messagingSenderId: "795392918021",
  appId: "1:795392918021:web:c3c1b1d76d7b2f5b09126c",
  measurementId: "G-EYTPBVSHHH"
};

if (!firebase.apps.length) {
  console.disableYellowBox = true;
  firebase.initializeApp(firebaseConfig);
}


class BootSetup extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <App />;
  }
}

export default BootSetup;
