import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
            <h1>Contact list</h1>
            <div>
                Add contact: <button>+</button>
            </div>
            <div>
                Search contact: <input type="text"/>
            </div>
        </header>
        <main>
            <div>
                <p>
                    <span>Piotr</span><br/>
                    <span>4485691564</span>
                </p>
                <button>Edytuj</button><button>Usuń</button>
            </div>
            <div>
                <p>
                    <span>Piotr</span><br/>
                    <span>4485691564</span>
                </p>
                <button>Edytuj</button><button>Usuń</button>
            </div>
            <div>
                <p>
                    <span>Piotr</span><br/>
                    <span>4485691564</span>
                </p>
                <button>Edytuj</button><button>Usuń</button>
            </div>
        </main>
        <dialog open>
            name: <input type="text"/><br/>
            phone: <input type="tel" /><br/>
            <button>Ok</button> <button>Anuluj</button>
        </dialog>
      </div>
    );
  }
}

export default App;
