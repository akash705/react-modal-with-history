import React, {Component } from 'react'
import {connect} from 'react-redux';


class Index extends Component {
    state = {  }
    render() { 
        return (
            <div>
                Hi There im Second Component
            </div>
          );
    }
}
 
var mapsToProps=(state)=>{
    return {
        images:state.images
    }
}
export default connect(mapsToProps,null)(Index);