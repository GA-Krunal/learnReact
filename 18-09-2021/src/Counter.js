import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            seed:0,
            initializing:true
        }
        console.log("constructor")
    }
    increament = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decreament = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return{
                seed: props.seed,
                counter:props.seed,
            }
        }
        return null
    }
    componentDidMount(){
        console.log("componentDidMount")
        setTimeout(()=>{
            this.setState({initializing:false})
        },1500)
        console.log("------------------")
    }
    // componentWillMount() {
    //     console.log("*********************")
    // }
    
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate")
    //     console.log("------------------")
    // }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update")
        console.log(prevProps)
        console.log(prevState)
        console.log("------------------")
    }
    componentWillUnmount() {
        console.log("component will unmount")
        console.log("------------------")
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignore && 
            this.props.ignore !== nextProps.ignore){
                console.log("should component update - DO NOT RENDER");
                console.log("------------------")
                return false
            }
            console.log(" should componentupdate - RENDER");
            return true
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        return null
    }
  
    render() {
        console.log("render")
        if (this.state.initializing) {
            return <div>initializing....</div>
        }
        return (
           
            <>
           
                <div className="counter">
                   <h2> counter:{this.state.counter}</h2>
                   <h2> seed : {this.state.seed}</h2>
                   <h2> ignore : {this.props.ignore}</h2>
                </div>
                <button onClick={this.increament}>count++</button>
                <button onClick={this.decreament}>count--</button>
               
            </>
        )
    }
}

// componentWillMount	unsafe	
// componentDidMount	done
// componentWillReceiveProps unsafe	
// shouldComponentUpdate done
// componentWillUpdate		unsafe
// componentDidUpdate	done	
// componentWillUnmount done