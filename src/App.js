import { useState } from 'react';
import CenterContent from './components/CenterContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [videoFile] = useState("https://github.com/whidyl/quote-butcher-frontend/raw/master/public/videos/" + Math.ceil(Math.random()*10).toString() + ".mp4")

  return (
    <div className="App">
      <video autoPlay muted loop style={{
                objectFit: "cover",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0"}}> 
            <source src={videoFile} type="video/mp4"/>
            Your browser does not support HTML5 video.
      </video>
      <CenterContent/>
    </div>
  );
}

export default App;
