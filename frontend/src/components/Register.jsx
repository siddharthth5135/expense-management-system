import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom'; // Changed to useNavigate for redirection

// SVG Icons (You can place these directly in your JSX or import them as React components
// For simplicity, I'm defining them as constants here.
// In a real project, you'd usually import them from a dedicated /assets/icons folder.
const UserIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

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

const GlobeIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.93-2.55c-.41-.27-.85-.49-1.3-.64L13 14v-4h3c.32 0 .63-.04.93-.11.45.89.75 1.83.92 2.82.16.99.25 2.01.25 3.09 0 .1-.01.19-.02.28zM12 4.07c3.95.49 7 3.85 7 7.93 0 .62-.08 1.21-.21 1.79L15 9V8c0-1.1-.9-2-2-2V4.07zm-6.93 2.55c.41.27.85.49 1.3.64L11 10v4H8c-.32 0-.63.04-.93.11-.45-.89-.75-1.83-.92-2.82-.16-.99-.25-2.01-.25-3.09 0-.1.01-.19.02-.28z" />
    </svg>
);

// New Icon for Company Name
const BuildingIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 10h-2V7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3H3c-1.1 0-2 .9-2 2v8h22v-8c0-1.1-.9-2-2-2zm-9 9H7v-2h3v2zm0-4H7v-2h3v2zm0-4H7V9h3v2zm4 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V9h3v2zm4 8h-3v-2h3v2zm0-4h-3v-2h3v2z" />
    </svg>
);


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState(''); // New state for company name
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loadingCountries, setLoadingCountries] = useState(true);
    const [error, setError] = useState(null);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [backendError, setBackendError] = useState(''); // State for backend errors
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                // Fetch all countries with name and currencies
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name,currencies');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const countryOptions = data
                    .map(country => {
                        // Extract the currency code for the first currency, if available
                        const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : null;
                        return {
                            value: country.name.common,
                            label: country.name.common,
                            currency: currencyCode, // Store currency code
                        };
                    })
                    .sort((a, b) => a.label.localeCompare(b.label));
                setCountries(countryOptions);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setError('Failed to load countries. Please try again later.');
            } finally {
                setLoadingCountries(false);
            }
        };

        fetchCountries();
    }, []);

    // Validation for password matching
    useEffect(() => {
        if (password && confirmPassword && password !== confirmPassword) {
            setPasswordMatchError(true);
        } else {
            setPasswordMatchError(false);
        }
    }, [password, confirmPassword]);

    const handleSignup = async (e) => {
        e.preventDefault();
        setBackendError(''); // Clear previous backend errors

        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }
        if (!email || !password || !name || !confirmPassword || !companyName) { // Added companyName to validation
            alert('Please fill in all required fields (Name, Email, Password, Confirm Password, Company Name).');
            return;
        }
        if (!selectedCountry) {
            alert('Please select a country.');
            return;
        }

        setPasswordMatchError(false); // Clear error if passwords now match

        const formData = {
            name,
            email,
            password,
            companyName, // Include company name
            country: selectedCountry.value,
            currency: selectedCountry.currency, // Include currency
        };
        const country = selectedCountry.value;
        const currency = selectedCountry.currency
        try {
            const response = await fetch('http://localhost:4000/api/user/createAdmin', { // Corrected endpoint
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ name, email, password, companyName, country, currency }) // Send all formData
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle HTTP errors
                setBackendError(data.message || 'Registration failed. Please try again.');
                return;
            }

            alert('Registration successful! Redirecting to login...');
            navigate('/login'); // Redirect to login page upon successful registration

        } catch (err) {
            console.error('Error during registration:', err);
            setBackendError('Network error or server is unreachable. Please try again.');
        }
    };

    const modernCustomStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: state.isFocused ? '#00e676' : 'rgba(255, 255, 255, 0.2)',
            boxShadow: state.isFocused ? '0 0 0 1px #00e676' : 'none',
            borderWidth: '1px',
            borderRadius: '8px',
            color: '#e0e0e0',
            fontSize: '1rem',
            padding: '8px 12px 8px 45px', // Adjusted padding for icon
            cursor: 'pointer',
            '&:hover': {
                borderColor: '#00e676',
            },
            transition: 'all 0.3s ease-in-out',
            minHeight: 'auto', // Ensures padding dictates height
            zIndex: 10, // Ensure control is above other elements when interacted
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#e0e0e0',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#a0a0a0',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'rgba(30, 30, 30, 0.98)', // Slightly less transparent for better readability
            border: '1px solid rgba(0, 230, 118, 0.5)',
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', // Stronger shadow for "lifted" effect
            overflow: 'hidden',
            zIndex: 20, // Critical: Ensure menu is above the signup button
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'rgba(0, 230, 118, 0.2)' : state.isSelected ? '#00e676' : 'transparent',
            color: state.isSelected ? '#1a1a1a' : '#e0e0e0',
            padding: '12px 15px',
            cursor: 'pointer',
            '&:active': {
                backgroundColor: '#00e676',
                color: '#1a1a1a',
            },
            transition: 'all 0.2s ease-in-out',
        }),
    };


    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="register-title slide-in-left">Admin Signup Page</h2>
                <form onSubmit={handleSignup} className="register-form">
                    <div className="input-group zoom-in">
                        <label htmlFor="name">Name</label>
                        <div className="input-with-icon">
                            <UserIcon />
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="modern-input"
                                placeholder="Your full name"
                            />
                        </div>
                    </div>
                    <div className="input-group zoom-in delay-1">
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
                    <div className="input-group zoom-in delay-2">
                        <label htmlFor="companyName">Company Name</label> {/* New Company Name field */}
                        <div className="input-with-icon">
                            <BuildingIcon />
                            <input
                                type="text"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                                className="modern-input"
                                placeholder="Your company's name"
                            />
                        </div>
                    </div>
                    <div className="input-group zoom-in delay-3">
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
                                placeholder="Minimum 8 characters"
                            />
                        </div>
                    </div>
                    <div className="input-group zoom-in delay-4">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <div className="input-with-icon">
                            <LockIcon />
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className={`modern-input ${passwordMatchError ? 'input-error' : ''}`}
                                placeholder="Confirm your password"
                            />
                        </div>
                        {passwordMatchError && (
                            <p className="error-message password-error">Passwords do not match!</p>
                        )}
                    </div>
                    <div className="input-group zoom-in delay-5" style={{ zIndex: 5 }}> {/* Ensure select dropdown has higher z-index */}
                        <label htmlFor="country">Country selection</label>
                        <div className="input-with-icon">
                            <GlobeIcon />
                            {loadingCountries ? (
                                <div className="loading-message">Loading countries...</div>
                            ) : error ? (
                                <div className="error-message">{error}</div>
                            ) : (
                                <Select
                                    id="country"
                                    options={countries}
                                    onChange={setSelectedCountry}
                                    value={selectedCountry}
                                    placeholder="Select a country..."
                                    isClearable
                                    isLoading={loadingCountries}
                                    styles={modernCustomStyles}
                                    classNamePrefix="modern-react-select"
                                />
                            )}
                        </div>
                    </div>
                    {backendError && (
                        <p className="error-message backend-error zoom-in delay-6">{backendError}</p>
                    )}
                    <button type="submit" className="signup-button pulse" style={{ zIndex: 1 }}>Signup</button>
                </form>
                <p className="alt-action zoom-in delay-7">
                    Already have an account? <Link to="/login" className="modern-link">Log in</Link>
                </p>
            </div>
        </div >
    );
};

export default Register;