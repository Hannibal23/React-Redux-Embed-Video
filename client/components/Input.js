import React from 'react';
import { withRouter } from 'react-router';

class Input extends React.Component{
    constructor(props) {
        super(props)
        this.handleLink = this.handleLink.bind(this);
    }
    handleLink(e) {
        const link = this.input.value;
        e.preventDefault();
        if(link.charAt(12) == 'y') {
            const number = link.substring(32);
            const embed = "https://www.youtube.com/embed/" + number;
            this.props.addLink(number, embed);
        }else if(link.charAt(12) == 'o') {
            const number = link.substring(18);
            const embed = "https://player.vimeo.com/video/" + number;
            this.props.addLink(number, embed);
        }else {
            alert('enter valid link');
            return;
        }
        this.props.history.push('/popup');
    }

    render(){
        return(
            <form onSubmit={this.handleLink}>
                <div className="form-group">
                    <label htmlFor="videoInput">Enter link { this.props.video.id }</label>
                    <input id="videoInput" ref={(input) => this.input = input} type="text" className="form-control" placeholder="Text input" />
                </div>
            </form>
        );
    }
}

export default withRouter(Input);
