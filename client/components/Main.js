import React from 'react';
const containerStyle = { marginLeft: 10, paddingTop: 10 };
const Main = React.createClass({
    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <div style={containerStyle} className="col-md-6">
                        {React.cloneElement({...this.props}.children, {...this.props})}
                    </div>
                </div>
            </div>
        );
    }
})

export default Main;
