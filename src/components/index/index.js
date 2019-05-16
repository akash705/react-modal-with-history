import React, {Component } from 'react'
import {connect} from 'react-redux';

import Modal from 'react-modal';

import Lightbox from 'react-image-lightbox';



import './index.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

class Index extends Component {
    state = { 
        isTrue:false,
        photoIndex:0,
        isOpen:false
     }
     
    render() { 
        let {images }  = this.props;
        let { isOpen , photoIndex } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid mainContainer">
                    <p className="text-center lead pt-2">Click to View in Full Screen Mode</p>
                    <div className="container-fluid pb-5 pt-4 ">
                        <div className="row p-0 m-0">
                                {
                                    images.map((singleImage,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="col-md-4 col-sm-6 m-0 p-2"> 
                                                    <img src={singleImage} onClick={this.toggleLightBox.bind(null,index)} className="img-responsive lightBoxImage" /> 
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                        </div>
                </div>
                </div>
               
                
                {isOpen && images && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={this.toggleLightBox}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                    }
                />
                )}
            </React.Fragment>
          );
    }

    componentDidMount(){
    }
    toggleLightBox=(index)=>{
        this.setState(state=>{
            return {
                ...state,
                isOpen:!state.isOpen,
                photoIndex:index
            }
        })
    }
}
 
var mapsToProps=(state)=>{
    return {
        images:state.images
    }
}
export default connect(mapsToProps,null)(Index);