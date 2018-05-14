import React, {Component} from 'react';

import ArraysList from '../components/ArraysList';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
            this.state = {
                arrays:[],
                searchfield: ''
        }
    }
    
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(robots=>{
            this.setState({arrays:robots})
        })
        
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    
    render(){
         const filterRobots= this.state.arrays.filter(arrays => {
            return arrays.name.toLowerCase().includes(this.state.searchfield.toLowerCase())        
        })
         if(this.state.arrays.length === 0) {
             return <h1 className='tc bg-yellow'> Loading</h1>
         }else{
    return (
    <div className='tc'>
    <h1> RoboFriends </h1>
    <Searchbox searchChange={this.onSearchChange} />
    <Scroll>
    <ArraysList arrays={filterRobots}/>
    </Scroll>
    </div>
    )
         }
}
}

export default App;