import { connect } from 'react-redux';
import NavBar from './nav';


import { logout } from '../../actions/auth';

const mapStateToProps = state => {
    
    return{
    currentUser: state.login.currentUser,
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
