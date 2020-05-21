import React, { Component } from 'react';
 

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3'],
    //     imageUrl: "https://picsum.photos/200",   // random image 200x200px
    //     product: {id:100, name:"car"},
    //     address: {
    //         street:''
    //     }
    // }

    styles = {
        fontSize : 15,
        fontWeight: "bold"
    };

    
    renderTags() {
    
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}    </ul> 
    }

    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement() {
        // NOTE: sconventiente
        // Qui non ho accesso a this !!!!
        // devo usare il contructor!   oppure uso la arrow funcion come sotto
        console.log("Increment clicked", this)
        this.state.count++;

    }
    */


    // handleIncrement = () => {

    //     //NOTE : sintassi davvero astrusa!

    //     // Qui non ho accesso a this !!!!
    //     console.log("Increment clicked", this)

    //     // NOTE: non posso incrementare direttamente, devo usare setState :(
    //     // this.state.count++;  

    //     this.setState( { value: this.state.value+1});  

    // }


    /* ora incremento nel contenitore */
    // handler con parametro, che pero' deve essere usato in maniera particolare nel render
    // handleIncrementWithParam = product => {
    //     console.log("Increment clicked", product)
    //     this.setState( { value: this.state.value+1});  
    // }


    render() { 

        // Tutti parametri passati dal chiamante (counters) vengono passati come props
        console.log("props", this.props)

        // restituire sempre un elemento altrimenti babel non sa quale generare
        return ( 
        <div>

            

            {/* NOTE: anche qui non proprio immediata - passo il titolo come children dell'oggetto*/}
            {this.props.children}

            {/* <span>{this.state.count} </span> */}

            {/* <img src={this.state.imageUrl} alt="" /> */}

            
            {/* <span style={this.styles} className="badge badge-warning m-2">{this.formatCount()}</span> */}

            <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>

            {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment</button> */}

             {/* NOTE: altra sintassi davvero strana per poter chiamare funzioni con parametri  */}

             {/* NOTE: non incremento il counter direttamente qui, perche' non verrebbe aggiornato, ma lo faccio nel contenitore */}
            <button onClick={() => this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btn-sm"> 
                Increment
            </button>

            {/* NOTE: questa rimane la sintassi piu' difficile da ricordare, assieme alla definizione di handler con parametri */}
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

            
            {/* { this.state.tags.length === 0 && <p>Pleas add a new tag</p> }
            { this.renderTags() } */}

        </div>
        );
    }



    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        // oppure:

        
        const {value: count} = this.props.counter;
        
        // Posso anche usare html dentro al js:
        //return count === 0 ? <h2>Zero</h2> : count;

        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;