import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
    return{
        video: state.video,
        comments: state.comments,
        popup: state.popup
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;