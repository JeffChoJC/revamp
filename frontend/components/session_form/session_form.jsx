import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearField = this.clearField.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors;
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submit(user).then(
            () => this.props.closeModal(),
            null
        );
    }

    demoLogin(e) {
        e.preventDefault();
        const demo = {
            email: 'guest_doe@gmail.com',
            password: 'guestdope'
        }
        this.props.demoSubmit(demo).then(
            () => this.props.closeModal(),
            null
        )
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li id="error" key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    clearField(field) {
        return e => this.setState({ [field]: "" })
    }

    render() {
        if (this.props.formType === 'login') {
            return (
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit} className='login-form-box'>
                        <p id="form-header">Please sign in</p>
                        <br/>
                        {this.renderErrors()}
                        <div className='login-form'>
                            <input type='email'
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                className='input-field'
                            />
                            <input type='password'
                                value={this.state.password}
                                placeholder="Password"
                                onClick={this.clearField('password')}
                                onChange={this.update('password')}
                                className='input-field'
                            />
                            <br/>
                            <input className='submit-form-button' type='submit' value='Sign In' />
                            <button className='submit-form-button' onClick={this.demoLogin}>Demo Sign In</button>

                        </div>
                    </form>
                    <br/>
                    <p className='link-to-signup'>New to Revamp? &nbsp;
                        <button onClick={this.props.openModal}>Create an account</button>
                    </p>
                </div>
            )
        } else {
            return (
                <div className='signup-form-container'>
                    <form onSubmit={this.handleSubmit} className='signup-form-box'>
                        <p id="form-header">Welcome to Revamp!</p>
                        {this.renderErrors()}
                        <div className='signup-form'>
                            <input type='text'
                                value={this.state.fname}
                                placeholder="First Name *"
                                onChange={this.update('fname')}
                                className='input-field'
                            />
                            <input type='text'
                                value={this.state.lname}
                                placeholder="Last Name *"
                                onChange={this.update('lname')}
                                className='input-field'
                            />
                            <input type='email'
                                value={this.state.email}
                                placeholder="Enter email *"
                                onChange={this.update('email')}
                                className='input-field'
                            />
                            <input type='password'
                                value={this.state.password}
                                placeholder="Enter password *"
                                onClick={this.clearField('password')}
                                onChange={this.update('password')}
                                className='input-field'
                            />
                            <input className='submit-form-button' type='submit' value='Create Account' />
                            <button className='submit-form-button' onClick={this.demoLogin}>Demo Sign In</button>
                        </div>
                    </form>
                </div>
            )    
        }
    }
}

export default SessionForm;