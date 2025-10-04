import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css'; // Re-use the same modern styles

const EmailIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        console.log('Password reset request for:', email);
        alert('If an account with that email exists, a password reset link has been sent!');
        // In a real app, you'd send a request to your backend here.
    };

    return (
        <div className="register-container">
            <div className="register-card login-card"> {/* Re-using login-card styles */}
                <h2 className="register-title slide-in-left">Reset Password</h2>
                <p className="login-subtitle fade-in-up">Enter your email to receive a reset link.</p>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="input-group zoom-in">
                        <label htmlFor="email">Email</label>
                        <div className="input-with-icon">
                            <EmailIcon />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="modern-input"
                            />
                        </div>
                    </div>
                    <button type="submit" className="signup-button pulse zoom-in delay-1">Send Reset Link</button>
                </form>
                <p className="alt-action zoom-in delay-2">
                    Remembered your password? <Link to="/login" className="modern-link">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;