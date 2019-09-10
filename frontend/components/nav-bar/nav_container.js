import { connect } from 'react-redux';
import NavBar from './nav';


import { logout } from '../../actions/auth';

const mapStateToProps = state => {
    return{
        currentUser: state.session.currentUser, //important
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
