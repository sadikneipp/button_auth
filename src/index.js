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
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg" />;
        </div>
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
