import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/AdminDashboard.css'; // Re-use general admin dashboard styles
import '../styles/ApprovalRules.css'; // Specific styles for this page



const ApprovalRules = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // State for the form
    const [userName, setUserName] = useState('John Doe'); // Example user, replace with dynamic data
    const [description, setDescription] = useState('');
    const [managerName, setManagerName] = useState('Jane Smith'); // Example manager, replace with dynamic data
    const [isManagerApprover, setIsManagerApprover] = useState(false);
    const [selectedApprovers, setSelectedApprovers] = useState([]); // List of selected approvers
    const [availableApprovers, setAvailableApprovers] = useState([ // Example users from DB
        { id: 1, name: 'John', role: 'Employee' },
        { id: 2, name: 'Mitchell', role: 'Manager' },
        { id: 3, name: 'Andreas', role: 'Director' },
        { id: 4, name: 'Sarah', role: 'Manager' },
        { id: 5, name: 'David', role: 'VP' },
    ]);
    const [approverSequenceEnabled, setApproverSequenceEnabled] = useState(false);
    const [minApprovalPercentage, setMinApprovalPercentage] = useState('');
    const [approverSearchTerm, setApproverSearchTerm] = useState('');


    // Close menu on resize for desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAddApprover = (approver) => {
        if (!selectedApprovers.some(a => a.id === approver.id)) {
            setSelectedApprovers([...selectedApprovers, approver]);
            setApproverSearchTerm(''); // Clear search after adding
        }
    };

    const handleRemoveApprover = (approverId) => {
        setSelectedApprovers(selectedApprovers.filter(a => a.id !== approverId));
    };

    const filteredAvailableApprovers = availableApprovers.filter(approver =>
        approver.name.toLowerCase().includes(approverSearchTerm.toLowerCase()) &&
        !selectedApprovers.some(sa => sa.id === approver.id) // Exclude already selected
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to your backend
        console.log({
            userName,
            description,
            managerName,
            isManagerApprover,
            selectedApprovers,
            approverSequenceEnabled,
            minApprovalPercentage
        });
        alert('Approval rule saved! Check console for data.');
    };

    return (
        <div className="admin-dashboard-layout">
            {/* Mobile Menu Toggle Button */}
            <button className="menu-toggle-button" onClick={() => setIsMenuOpen(true)}>
                 Menu
            </button>

            {/* Sidebar Navigation */}
            <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu-button" onClick={() => setIsMenuOpen(false)}>
                    
                </button>
                <nav className="sidebar-nav">
                    <Link
                        to="/admin/add-user"
                        className={`nav-item modern-link ${location.pathname === '/admin/add-user' ? 'highlighted-nav-item' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Add User</span>
                    </Link>
                    <Link
                        to="/admin/approve-user"
                        className={`nav-item modern-link ${location.pathname === '/admin/approve-user' ? 'highlighted-nav-item' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                         <span>Approval Rules</span>
                    </Link>
                    <Link
                        to="/admin/pending-requests"
                        className={`nav-item modern-link ${location.pathname === '/admin/pending-requests' ? 'highlighted-nav-item' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                         <span>Pending Requests</span>
                    </Link>
                    {/* Add more admin links here */}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main-content approval-rules-content">
                <div className="dashboard-header">
                    <h1 className="dashboard-title slide-in-left">Approval Rules</h1>
                    <p className="dashboard-subtitle fade-in-up">Define rules for expense approvals.</p>
                </div>

                <form className="approval-form" onSubmit={handleSubmit}>
                    <div className="form-sections-container">
                        {/* Left Section - User & Description */}
                        <div className="form-section left-section">
                            <div className="form-group">
                                <label className="form-label">User</label>
                                <p className="form-static-value">{userName}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description" className="form-label">Description about rules</label>
                                <textarea
                                    id="description"
                                    className="form-input text-area"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Approval rule for miscellaneous expenses..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Manager</label>
                                <div className="manager-display">
                                    <p className="form-static-value">{managerName}</p>
                                    {/* Dynamic dropdown to change manager - placeholder */}
                                    <span className="manager-dropdown-indicator">▼</span>
                                    <p className="description-text">Initially the manager set on user record should be set, admin can change manager for approval if required.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Approvers */}
                        <div className="form-section right-section">
                            <div className="form-group">
                                <label className="form-label">Approvers</label>
                                <div className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        id="isManagerApprover"
                                        checked={isManagerApprover}
                                        onChange={(e) => setIsManagerApprover(e.target.checked)}
                                        className="modern-checkbox"
                                    />
                                    <label htmlFor="isManagerApprover" className="checkbox-label">Is manager an approver?</label>
                                </div>
                                <p className="description-text small-text red-text">
                                    If this field is checked then by default the approve request would go to his/her manager first, before going to other approvers.
                                </p>
                            </div>

                            <div className="form-group approvers-list-container">
                                <label className="form-label">Add Approvers (Managers, Directors etc.)</label>
                                <div className="approver-search-add">
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Search and add approvers..."
                                        value={approverSearchTerm}
                                        onChange={(e) => setApproverSearchTerm(e.target.value)}
                                    />
                                    {approverSearchTerm && filteredAvailableApprovers.length > 0 && (
                                        <div className="approver-suggestions">
                                            {filteredAvailableApprovers.map(approver => (
                                                <button
                                                    key={approver.id}
                                                    type="button"
                                                    className="suggestion-item"
                                                    onClick={() => handleAddApprover(approver)}
                                                >
                                                    {approver.name} ({approver.role}) <UserPlusIcon />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="selected-approvers-list">
                                    {selectedApprovers.length === 0 ? (
                                        <p className="no-approvers-message">No approvers selected yet.</p>
                                    ) : (
                                        selectedApprovers.map((approver, index) => (
                                            <div key={approver.id} className="selected-approver-item">
                                                <span className="approver-order">{index + 1}.</span>
                                                <span className="approver-info">{approver.name} ({approver.role})</span>
                                                <button type="button" onClick={() => handleRemoveApprover(approver.id)} className="remove-approver-button">
                                                    <XIcon />
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div> {/* End form-sections-container */}

                    {/* Approver Sequence & Minimum Approval Percentage */}
                    <div className="form-section full-width-section">
                        <div className="form-group">
                            <div className="checkbox-group">
                                <input
                                    type="checkbox"
                                    id="approverSequence"
                                    checked={approverSequenceEnabled}
                                    onChange={(e) => setApproverSequenceEnabled(e.target.checked)}
                                    className="modern-checkbox"
                                />
                                <label htmlFor="approverSequence" className="checkbox-label">Approvers Sequence</label>
                            </div>
                            <p className="description-text">
                                If this field is ticked true then the above mentioned sequence of approvers matters,
                                that is first the request goes to John, If he approves/rejects then only request goes to Mitchell and so on.
                                If the required approver rejects the request, then expense request is auto-rejected.
                                If not ticked then send approver request to all approvers at the same time.
                            </p>
                        </div>

                        <div className="form-group percentage-group">
                            <label htmlFor="minApprovalPercentage" className="form-label">Minimum Approval Percentage</label>
                            <div className="input-with-symbol">
                                <input
                                    type="number"
                                    id="minApprovalPercentage"
                                    className="form-input"
                                    value={minApprovalPercentage}
                                    onChange={(e) => setMinApprovalPercentage(e.target.value)}
                                    placeholder="Enter percentage"
                                    min="0"
                                    max="100"
                                />
                                <span className="percentage-symbol">%</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="new-user-button signup-button pulse save-rules-button">Save Approval Rules</button>
                </form>
            </main>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}
        </div>
    );
};

export default ApprovalRules;