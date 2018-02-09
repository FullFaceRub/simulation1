import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

    render(){
        return(
            <div>
                <Link to='/shelf/A'><div>Shelf A</div></Link>
                <Link to='/shelf/B'><div>Shelf B</div></Link>
                <Link to='/shelf/C'><div>Shelf C</div></Link>
                <Link to='/shelf/D'><div>Shelf D</div></Link>
            </div>
        )
    }
}

export default Home;