import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value: 2},
            {id: 2, value: 0},
            {id: 3, value: 1},
            {id: 4, value: 0},
        ]
    }

    handleDelete = (counterId) => {
        console.log("Event delete called", counterId)

        const newcounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState( {counters : newcounters});
    }

    render() { 
        return (
            <div>
                {/* NOTE: gia' visto negli esempi della lista, ma questo mapping non e' immediato */}
                {this.state.counters.map(counter => 

                    // NOTE: Key non [ una props e viene usato internamente da react, quindi devo ridefinire id]
                    
                    // <Counter key={counter.id}  id={counter.id} value={counter.value} selected onDelete={this.handleDelete} >

                    // inoltre conviene passare tutto l'oggetto!!!
                    <Counter key={counter.id}  counter={counter} onDelete={this.handleDelete} >
                        <span >Counter #{counter.id} </span>
                    </Counter>)}
            </div>
          );
    }
}
 
export default Counters;