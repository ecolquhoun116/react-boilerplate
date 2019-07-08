import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.component{
    render(){
        return(
            <div>
                <h1>Dummy Component</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));