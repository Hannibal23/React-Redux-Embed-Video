import React from 'react';

const Input = React.createClass({
    handleLink(e) {
        const link = this.refs.link.value;
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
        }
        console.log(this.props);
    },

    render(){
        return(
            <form onSubmit={this.handleLink}>
                <div className="form-group">
                    <label htmlFor="videoInput">Enter link {this.props.video}</label>
                    <input id="videoInput" ref="link" type="text" className="form-control" placeholder="Text input" />
                </div>
            </form>
        );
    }
})

export default Input;
