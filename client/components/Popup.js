import React,{ Component } from 'react';
import Comments from './Comments'

export default class Popup extends Component {
    constructor(props){
    	super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <div>Oy shit {this.props.video.id}</div>
                <div className="myIframe">
                    <iframe id="iframe" src={this.props.video.link} frameBorder="0"></iframe>
                </div>
                <Comments postComments={this.postComments} {...this.props}/>
            </div>
        );
    }
}
