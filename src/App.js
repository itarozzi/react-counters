import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar   from './components/navbar';
import Counters from './components/counters';
import './App.css';


// Devo tornare ad usare la classe App e non la funzione
class App extends Component {
  state = {  
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  }

  handleIncrement = (counter) => {
    console.log("incremement: ", counter)

    // NOTE: anche qui devo fare una copia dell'array perche' non posso modificare lo state!!! che barba
    //  e devo andanrmi a prendere l'elemento e copiarlo per cambiargli valore
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleReset = () => {
    // NOTE: questa cosa di non poter modificare direttamente non e' il massimo
    // non posso modificare direttamente state quindi devo creare una copia dell'array
    const newcounters =this.state.counters.map (c => {
        c.value = 0;
        return c;
    })
    this.setState({newcounters})
  };


  handleDelete = (counterId) => {
    console.log("Event delete called", counterId)

    const newcounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState( {counters : newcounters});
  }

  render() {
  return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}

        />

      </main>
      </React.Fragment>
    );
  }
}

export default App;
