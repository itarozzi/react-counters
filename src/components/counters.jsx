import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }


    handleIncrement = counter => {
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
            <div>

                <button 
                className="btn btn-primary btn-sm m-2"
                onClick={this.handleReset}>RESET</button>

                {/* NOTE: gia' visto negli esempi della lista, ma questo mapping non e' immediato */}
                {this.state.counters.map(counter => 

                    // NOTE: Key non [ una props e viene usato internamente da react, quindi devo ridefinire id]
                    
                    // <Counter key={counter.id}  id={counter.id} value={counter.value} selected onDelete={this.handleDelete} >

                    // inoltre conviene passare tutto l'oggetto!!!
                    <Counter key={counter.id}  counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} >
                        <span >Counter #{counter.id} </span>
                    </Counter>)}
            </div>
          );
    }
}
 
export default Counters;