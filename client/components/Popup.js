import React,{ Component } from 'react';
import Comments from './Comments'

export default class Popup extends Component {
    constructor(props){
    	super(props);
    }

    render(){
        const { videoId } = this.props.params;

        const postComments = this.props.comments[videoId] || [];
        console.log(this.props.comments);

        return(
            <div>
                <div>Oy shit {this.props.video.id}</div>
                <div className="myIframe">
                    <iframe id="iframe" src={this.props.video.link} frameBorder="0"></iframe>
                </div>
                <Comments postComments={postComments} {...this.props}/>
            </div>
        );
    }
}
