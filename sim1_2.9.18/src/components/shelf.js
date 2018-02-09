import React, {Component} from 'react';
import axios from 'axios';

class Shelf extends Component {

    componentDidMount(props){
        // console.log(this.props);
        let id = this.props.match.params.id
        // axios.get('/api/bins/'+id).then(resp=>{
        //     return resp.data
        // })
    }
    render(){
        return(
        <div>
            Hello
        </div>
        )
    }
}

export default Shelf;