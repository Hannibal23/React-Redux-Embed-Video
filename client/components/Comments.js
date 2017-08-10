import React,{Component} from 'react';

export default class Comments extends Component {
    constructor(props){
    	super(props);
        this.state = {
            authorVal: '',
            commentVal: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    renderComment(comment, i) {
        return (
            <div key={i}>
                <p>
                    <strong>{comment.user} </strong>
                    {comment.text}
                </p>
            </div>
        );
    }

    handleChange(inputType, event) {
        if(inputType === 'author') {
            this.setState({authorVal: event.target.value});
        }else {
            this.setState({commentVal: event.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const author = this.state.authorVal;
        const comment = this.state.commentVal;
        this.props.addComment(author, comment);
        this.form.reset();
    }

    render() {
        return (
            <div className="comments">
                {this.props.comments.map(this.renderComment)}
                <form ref={(form) => this.form = form} className="comment-form" onSubmit={this.handleSubmit}>
                  <input type="text" value={this.state.authorVal} onChange={this.handleChange.bind(this, 'author')} placeholder="author"/>
                  <input type="text" value={this.state.commentVal} onChange={this.handleChange.bind(this, 'comment')} placeholder="comment"/>
                  <input type="submit" hidden />
                </form>
            </div>
        );
    }
}
