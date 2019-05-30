import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: 'First',
            lname: 'Last',
            email: 'Email',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submit(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        { error }
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
                <div className='login-signup-container'>
                    <form onSubmit={this.handleSubmit} className='login-signup-box'>
                        Please sign in
                        <br/>
                        {this.renderErrors()}
                        <div className='login-signup'>
                            <br/>
                            <input type='text'
                                value={this.state.email}
                                onClick={this.clearField('email')}
                                onChange={this.update('email')}
                                className='input-field'
                            />
                            <input type='password'
                                value={this.state.password}
                                onClick={this.clearField('password')}
                                onChange={this.update('password')}
                                className='input-field'
                            />
                            <br/>
                            <input className='login-signup-submit' type='submit' value='Sign In' />
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className='login-signup-container'>
                    <form onSubmit={this.handleSubmit} className='login-signup-box'>
                        Welcome to OpenRes!
                        <br/>
                        {this.renderErrors()}
                        <div className='login-signup'>
                            <br/>
                            <input type='text'
                                value={this.state.fname}
                                onChange={this.update('fname')}
                                className='input-field'
                            />
                            <input type='text'
                                value={this.state.lname}
                                onChange={this.update('lname')}
                                className='input-field'
                            />
                            <input type='text'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className='input-field'
                            />
                            <br/>
                            <input type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='input-field'
                            />
                            <br/>
                            <input className='login-signup-submit' type='submit' value='Create Account' />
                        </div>
                    </form>
                </div>
            )    
        }
    }
}

export default SessionForm;