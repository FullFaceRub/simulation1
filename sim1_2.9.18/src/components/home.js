import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

    render(){
        return(
            <div className="shelfContainer">
                <Link to='/shelf/A' className="shelf" id="a"><div>Shelf A</div></Link>
                <Link to='/shelf/B' className="shelf" id="b"><div>Shelf B</div></Link>
                <Link to='/shelf/C' className="shelf" id="c"><div>Shelf C</div></Link>
                <Link to='/shelf/D' className="shelf" id="d"><div>Shelf D</div></Link>
            </div>
        )
    }
}

export default Home;