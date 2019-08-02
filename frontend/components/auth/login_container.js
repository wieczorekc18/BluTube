import { connect } from 'react-redux';
import { login, checkEmail, clearErrors } from '../../actions/auth';
import Login from './login';

const mapStateToProps = state => ({
    errors: state.errors,
})

const mapDispatchToProps = dispatch => {
    return{
        login: user => dispatch(login(user)),
        checkEmail: email => dispatch(checkEmail(email)),
        clearErrors: () => dispatch(clearErrors()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
