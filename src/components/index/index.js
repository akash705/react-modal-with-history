import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';

import Modal from 'react-modal';

import Lightbox from 'react-image-lightbox';

import './index.css';

Modal.setAppElement('#root');

class Index extends Component {
    state = {
        isTrue: false,
        photoIndex: 0,
        isOpen: false
    }
     
    render() { 
        let {
            images
        } = this.props;
        let {
            isOpen,
            photoIndex
        } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid mainContainer">
                    <p className="text-center lead pt-2">Click on Image to  View in Full Screen Mode</p>
                    <div className="container-fluid pb-5 pt-4 ">
                        <div className="row p-0 m-0">
                                {
                                    images.map((singleImage,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="col-md-4 col-sm-6 m-0 p-2"> 
                                                    <img 
                                                        src={singleImage} 
                                                        onClick={this.toggleLightBox.bind(null,index)} 
                                                        className="img-responsive lightBoxImage" /> 
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
                    onMovePrevRequest={() =>this.navigate("prev")}
                    onMoveNextRequest={()=>this.navigate()}
                    imageTitle={`Image Number : ${photoIndex} `}
                    imageCaption={images[photoIndex]}
                />
                )}
            </React.Fragment>
          );
    }

    componentDidMount(){
    }
    navigate=(where)=>{
        let {
            photoIndex
        } = this.state;
        let {
            images
        } = this.props
        if (where) photoIndex = (photoIndex + images.length - 1) % images.length;
        else photoIndex = (photoIndex + images.length + 1) % images.length;
        this.setState({
            photoIndex
        });
        window.history.replaceState(null, null, photoIndex);
    }
    toggleLightBox=(index)=>{
        let toggle = !this.state.isOpen;
        this.setState(state => {
            return {
                ...state,
                isOpen: toggle,
                photoIndex: index
            }
        })
        // checking url
        if (toggle) {
            window.history.replaceState(null, Index + " Image is opened", index);
        } else {
            window.history.replaceState(null, null, '/');
        }
    }
}
 
var mapsToProps = (state) => {
    return {
        images: state.images
    }
}
export default connect(mapsToProps, null)(Index);