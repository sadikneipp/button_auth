import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


function Button(props) {
  return (
    <button className="button" onClick={() => 
      axios.get('http://localhost:5000',{})
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
  