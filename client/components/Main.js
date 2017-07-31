import React from 'react';

const Main = React.createClass({
    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <div className="col-md-6">
                        {React.cloneElement({...this.props}.children, {...this.props})}
                    </div>
                </div>
            </div>
        );
    }
})

export default Main;
