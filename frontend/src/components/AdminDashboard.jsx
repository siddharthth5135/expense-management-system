import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Register.css'; // Re-use for general styling
import '../styles/AdminDashboard.css'; // Specific dashboard styles

// SVG Icons (You can place these directly in your JSX or import them as React components
// For simplicity, I'm defining them as constants here.
const UserIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);


const AdminDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [users, setUsers] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Function to fetch users
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:4000/api/user/getAllUser', { // Your backend endpoint
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important for sending cookies with JWT
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch users.');
            }

            const data = await response.json();
            // Filter out users with role 'ADMIN' and update state
            const filteredUsers = data.users.filter(user => user.role !== 'ADMIN');
            setUsers(filteredUsers);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError(err.message || 'Could not fetch users. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []); // Empty dependency array means this runs once on mount

    const handleSendPassword = (userId) => {
        console.log(`Sending password reset link for user ID: ${userId}`);
        alert(`Password reset initiated for user ID: ${userId}`);
        // TODO: Implement actual API call to send password reset link
        // This would typically involve another backend endpoint like `/api/user/sendPasswordReset`
        // which would email a temporary link or password.
    };

    // You might not need handleRoleChange if roles are set during user creation
    // and you don't have an inline role editing feature.
    // Leaving it for now as a placeholder for potential future functionality.
    const handleRoleChange = (userId, newRole) => {
        // This would involve an API call to update the user's role in the backend
        console.log(`User ${userId} role changed to ${newRole}`);
        setUsers(prevUsers =>
            prevUsers.map(user => (user.id === userId ? { ...user, role: newRole } : user))
        );
        alert(`User ${userId}'s role updated to ${newRole} (frontend simulation)`);
    };

    const handleNewUser = () => {
        // Navigate to the user creation form
        navigate('/admin/create-user'); // Define this route in your App.js
    };

    // Close menu on resize for desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { // Adjust breakpoint as needed
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="admin-dashboard-layout">
            {/* Mobile Menu Toggle Button */}
            <button className="menu-toggle-button" onClick={() => setIsMenuOpen(true)}>
                {/* You might want to use an actual icon here, e.g., from lucide-react */}
                ☰ Menu
            </button>

            {/* Sidebar Navigation */}
            <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu-button" onClick={() => setIsMenuOpen(false)}>
                    {/* You might want to use an actual icon here, e.g., from lucide-react */}
                    ✕
                </button>
                <nav className="sidebar-nav">
                    <Link to="/admin/create-user" className="nav-item modern-link" onClick={() => setIsMenuOpen(false)}>
                        <UserIcon /> <span>Add User</span>
                    </Link>
                    <Link to="/admin/approval-rules" className="nav-item modern-link" onClick={() => setIsMenuOpen(false)}>
                        <UserIcon /> <span>Approval Rules</span> {/* Replace with appropriate icon */}
                    </Link>
                    <Link to="/admin/pending-requests" className="nav-item modern-link" onClick={() => setIsMenuOpen(false)}>
                        <UserIcon /> <span>Pending Requests</span> {/* Replace with appropriate icon */}
                    </Link>
                    {/* Add more admin links here */}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main-content">
                <div className="dashboard-header">
                    <h1 className="dashboard-title slide-in-left">Admin Dashboard</h1>
                    <p className="dashboard-subtitle fade-in-up">Manage your account and users.</p>
                    <button className="new-user-button signup-button pulse" onClick={handleNewUser}>
                        New User
                    </button>
                </div>

                {/* User Table Card */}
                <div className="register-card user-table-card">
                    {loading && <p className="loading-message">Loading users...</p>}
                    {error && <p className="error-message">{error}</p>}
                    {!loading && !error && users.length === 0 && (
                        <p className="info-message">No non-admin users found.</p>
                    )}
                    {!loading && !error && users.length > 0 && (
                        <div className="table-responsive">
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Role</th>
                                        <th>Manager</th>
                                        <th>Email</th>
                                        <th>Company</th> {/* Added Company column */}
                                        <th className="action-column">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td data-label="User">{user.name}</td> {/* Use user.name */}
                                            <td data-label="Role">
                                                {/* You could make this a dropdown for editing roles */}
                                                {user.role}
                                            </td>
                                            <td data-label="Manager">
                                                {user.managerId ? `ID: ${user.managerId}` : 'N/A'}
                                                {/* You might fetch manager name from managerId */}
                                            </td>
                                            <td data-label="Email">{user.email}</td>
                                            <td data-label="Company">{user.company ? user.company.name : 'N/A'}</td> {/* Display company name */}
                                            <td data-label="Action" className="action-column">
                                                <button
                                                    onClick={() => handleSendPassword(user.id)}
                                                    className="send-password-button modern-link"
                                                >
                                                    Send Password
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}
        </div>
    );
};

export default AdminDashboard;