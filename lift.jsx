

//only can pass data from the parent to the child

// so set the state at the parent's constructor function

class Trains extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "green line",
            counter1: 0,
            counter2: 0
        }
    }

    incr1(count) {
        this.setState({
            counter1: count
        })
    }

    incr2(count) {
        this.setState({
            counter2: count
        })
    }

    render() {

        return ( <div className = "trains" >train {this.state.counter1} {this.state.counter2}
            <Line train = {this.state.name} increment = {(count) => {this.incr1(count)}} count = {this.state.counter1}
            />
            <Line train = {this.state.name} increment = {(count) => {this.incr2(count)}} count = {this.state.counter2}
            />
            </div>
        );
    }
}

class Line extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            name: "outram"
        }
    }

    doSomething() {
        this.setState({
            counter: this.state.counter + 1
        })
        let newValue = this.state.counter * 2 * Math.random();
        this.props.increment(newValue);
    }

    render() {
        return ( <div className = "line" >
            <p>
                Train: {this.props.train}
            </p>
            <p> props count: {this.props.count} </p>
            <p> state count: {this.state.counter} </p>
            <button onClick = {() => {this.doSomething();}} > click me
            </button> {this.state.name}
            </div>
        );
    }
}



ReactDOM.render(
    <div>hello world!YAY WOW
    <Trains/>
    </div>, document.getElementById('root')
);