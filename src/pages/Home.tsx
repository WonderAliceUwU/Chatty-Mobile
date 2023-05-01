import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from "react";

const Home: React.FC = () => {
  return (
          <body className="login-body">
          <div className="user-form">
              <img className="logo" src="./assets/Images/ChattyLogo.png" alt="ChattyLogo"/>
              <h1 className="welcome-text">💖 Welcome!</h1>
              <input className="custom-input" type="text" id="UserInput" name="UserInput" placeholder="Username"/>
              <input className="custom-input" type="text" id="PassInput" name="PassInput" placeholder="Password"/>
              <button className="custom-button login-button" role="button" id="login-button">Login</button>
          </div>
          </body>
  );
};

export default Home;
