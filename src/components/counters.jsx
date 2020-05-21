import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() { 
        return (
            <div>
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                    >
                    RESET
                </button>

                {/* NOTE: gia' visto negli esempi della lista, ma questo mapping non e' immediato */}
                {this.props.counters.map(counter => 

                    // NOTE: Key non [ una props e viene usato internamente da react, quindi devo ridefinire id]
                    
                    // <Counter key={counter.id}  id={counter.id} value={counter.value} selected onDelete={this.handleDelete} >

                    // inoltre conviene passare tutto l'oggetto!!!
                    <Counter 
                        key={counter.id}  
                        counter={counter} 
                        onDelete={this.props.onDelete} 
                        onIncrement={this.props.onIncrement} 
                    >
                        <span >Counter #{counter.id} </span>
                    </Counter>)}
            </div>
          );
    }
}
 
export default Counters;