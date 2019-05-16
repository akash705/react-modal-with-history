import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import './index.css';

import {
    Link
} from 'react-router-dom';


class Index extends Component {
    state = {}
    render() { 
        let {
            images
        } = this.props;
        return (
            <div className="container-fluid mainContainer singlePageImageContainer position-relative">
                    {
                        images && images.length && images[this.props.match.params.id] && (
                            <img src={images[this.props.match.params.id]} alt="Image Forgot"/>
                        )
                    }
                    <div className="lead pt-2">   
                        <p>URL loaded with Single Page </p>
                        <p className="text-danger"> <Link to="/">HomePage</Link></p>
                    </div>
            </div>
          );
    }
}
 
var mapsToProps = (state) => {
    return {
        images: state.images
    }
}
export default connect(mapsToProps, null)(Index);