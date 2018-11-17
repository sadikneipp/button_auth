import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

function Button(props) {
  return (
    <button className="button" onClick={() =>
      axios.get('http://localhost:5000', {})
        .then(function (response) { console.log(response); }
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
