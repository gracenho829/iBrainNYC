import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';
import './App.sass';

function App() {
  return (
    <div className="login-UI">
      <div className ="bg-overlay">
        <div class="video">
          <video autoplay loop class="fillWidth">
              <source src="./resources/login_video.mp4" type="video/webm" />Your browser is not supported. Please upgrade your browser to view content.
            </video>
        </div>
      </div>
      <div class="login-block">

      </div>
    </div>
  );
}

export default App;
