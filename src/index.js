import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


function Button(props) {
  return (
    <button className="button" onClick={() => 
      axios.post('http://35.197.194.231:5000/ping/', {'ping':'pong'})
        .then(function (response) {console.log(response);}
      )}
   >
      {"Authenticate!"}
    </button>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
          <Button />
      </div>
    );
  }
}
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
