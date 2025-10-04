import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'; // Re-use the same modern styles

// Re-using the same SVG Icons for consistency
const EmailIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const LockIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
    </svg>
);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(''); // State to handle login errors from backend
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError(''); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setLoginError('Please enter both email and password.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:4000/api/user/loginUser', { // Corrected endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important for sending/receiving cookies (JWT)
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                // Handle errors returned from the backend (e.g., "Invalid credentials")
                setLoginError(data.message || 'Login failed. Please try again.');
                return;
            }

            // If login is successful
            console.log('Login successful!', data);
            alert('Login successful! Redirecting to dashboard...');
            // You might want to store user data (e.g., role, user ID) in context or local storage
            // before redirecting. For this example, we'll just redirect.
            navigate('/admin'); // Navigate to your dashboard or home page
        } catch (err) {
            console.error('Error during login:', err);
            setLoginError('Network error or server is unreachable. Please try again.');
        }
    };

    return (
        <div className="register-container"> {/* Re-using container for consistent centering */}
            <div className="register-card login-card"> {/* Added login-card for specific styles */}
                <h2 className="register-title slide-in-left">Welcome Back!</h2>
                <p className="login-subtitle fade-in-up">Login to your account</p>
                <form onSubmit={handleLogin} className="register-form">
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
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>
                    <div className="input-group zoom-in delay-1">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <LockIcon />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="modern-input"
                                placeholder="Your password"
                            />
                        </div>
                    </div>

                    {loginError && (
                        <p className="error-message login-error zoom-in delay-2">{loginError}</p>
                    )}

                    <div className="forgot-password-link zoom-in delay-2">
                        <Link to="/forgot-password" className="modern-link">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="signup-button pulse zoom-in delay-3">LOGIN</button>
                </form>

                <p className="alt-action zoom-in delay-4">
                    Don't have an account? <Link to="/register" className="modern-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;