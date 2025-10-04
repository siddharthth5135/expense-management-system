import React, { useState } from 'react';
import Badge from '../Components/Badge.jsx';
import SwitchToggle from '../Components/SwitchToggle.jsx';
import SearchableSelect from '../Components/SearchableSelect.jsx';
import '../index.css';


const ODOO_COLORS = {
    purple: '#6D28D9', // A bit darker purple for modern look
    lightPurple: '#F3E8FF',
    gray: '#6B7280', // Tailwind's gray-500
    lightGray: '#F9FAFB', // Tailwind's gray-50
    green: '#10B981', // Tailwind's emerald-500
    lightGreen: '#ECFDF5',
    blue: '#3B82F6', // Tailwind's blue-500
    lightBlue: '#EFF6FF',
    darkGray: '#1F2937', // Tailwind's gray-800
    borderGray: '#E5E7EB', // Tailwind's gray-200
    offWhite: '#FFFFFF',
    red: '#EF4444', // Tailwind's red-500
    gradientStart: '#8B5CF6', // Tailwind's violet-500
    gradientEnd: '#EC4899', // Tailwind's pink-500
};

const ApprovalRulesTable = () => {
    const [rules, setRules] = useState([
        {
            id: 1,
            user: 'Marc', // Capitalized for better display
            description: 'Approval rule for miscellaneous expenses.',
            manager: 'Sarah', // Capitalized
            approvers: {
                john: { required: true, active: true },
                mitchell: { required: false, active: false },
                andreas: { required: false, active: true },
            },
            sequence: false,
            minApprovalPercentage: 75,
        },
        {
            id: 2,
            user: 'Lena',
            description: 'Approval rule for travel expenses.',
            manager: 'Tom',
            approvers: {
                alice: { required: true, active: true },
                bob: { required: false, active: true },
                charlie: { required: false, active: false },
            },
            sequence: true,
            minApprovalPercentage: 80,
        },
        {
            id: 3,
            user: 'Raj',
            description: 'Approval rule for office supplies.',
            manager: 'Nina',
            approvers: {
                david: { required: true, active: true },
                emily: { required: true, active: false },
                frank: { required: false, active: true },
            },
            sequence: false,
            minApprovalPercentage: 70,
        }

    ]);

    const managerOptions = ['Sarah', 'Peter', 'Alex', 'Maria', 'David']; // Capitalized

    const handleRuleChange = (id, field, value) => {
        setRules(prevRules =>
            prevRules.map(rule => (rule.id === id ? { ...rule, [field]: value } : rule))
        );
    };

    const handleApproverChange = (ruleId, approverName, field, value) => {
        setRules(prevRules =>
            prevRules.map(rule =>
                rule.id === ruleId
                    ? {
                        ...rule,
                        approvers: {
                            ...rule.approvers,
                            [approverName]: { ...rule.approvers[approverName], [field]: value },
                        },
                    }
                    : rule
            )
        );
    };

    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-indigo-50 font-sans">
            <h1
                className="text-5xl font-extrabold text-center mb-12 tracking-tight"
                style={{
                    background: `linear-gradient(to right, ${ODOO_COLORS.gradientStart}, ${ODOO_COLORS.gradientEnd})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Admin View <span className="font-light text-gray-500 text-4xl">(Approval Rules)</span>
            </h1>

            <div className="space-y-10 px-8">
                {rules.map(rule => (
                    <div
                        key={rule.id}
                        className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
                            <div className="flex-grow">
                                <h2 className="text-3xl font-bold text-gray-800 mb-1">{rule.user}</h2>
                                <p className="text-gray-500 text-lg">{rule.description}</p>
                            </div>

                            <div className="w-full md:w-60 flex-shrink-0">
                                <SearchableSelect
                                    label="Manager"
                                    options={managerOptions}
                                    selected={rule.manager}
                                    onSelect={val => handleRuleChange(rule.id, 'manager', val)}
                                    colors={ODOO_COLORS}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
                            {/* Approvers Section */}
                            <div className="col-span-1 md:col-span-2">
                                <h3 className="font-bold mb-4 text-gray-700 uppercase tracking-wide text-sm">
                                    Approvers
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(rule.approvers).map(([name, approver]) => (
                                        <div
                                            key={name}
                                            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <span className="capitalize font-medium text-gray-800 flex items-center gap-3">
                                                {name}
                                                <Badge
                                                    color={approver.active ? ODOO_COLORS.green : ODOO_COLORS.gray}
                                                    bgColor={approver.active ? ODOO_COLORS.lightGreen : ODOO_COLORS.lightGray}
                                                >
                                                    {approver.active ? 'Active' : 'Optional'}
                                                </Badge>
                                            </span>
                                            <label className="flex items-center gap-2 text-base text-gray-600 cursor-pointer">
                                                Required
                                                <input
                                                    type="checkbox"
                                                    checked={approver.required}
                                                    onChange={e =>
                                                        handleApproverChange(rule.id, name, 'required', e.target.checked)
                                                    }
                                                    className="h-5 w-5 rounded-md text-blue-600 focus:ring-blue-500 border-gray-300 transition-all duration-200"
                                                    style={{ accentColor: ODOO_COLORS.blue }} // Custom accent color
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sequence */}
                            <div className="col-span-1 flex flex-col items-start gap-4">
                                <h3 className="font-bold mb-2 text-gray-700 uppercase tracking-wide text-sm">
                                    Approval Flow
                                </h3>
                                <SwitchToggle
                                    checked={rule.sequence}
                                    onChange={val => handleRuleChange(rule.id, 'sequence', val)}
                                    label={rule.sequence ? 'Sequential' : 'Parallel'}
                                    colors={ODOO_COLORS}
                                />
                            </div>

                            {/* Min Approval % */}
                            <div className="col-span-1 flex flex-col items-start gap-2">
                                <h3 className="font-bold mb-2 text-gray-700 uppercase tracking-wide text-sm">
                                    Min Approval %
                                </h3>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={rule.minApprovalPercentage}
                                    onChange={e =>
                                        handleRuleChange(rule.id, 'minApprovalPercentage', parseInt(e.target.value) || 0)
                                    }
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-32 text-center text-lg font-semibold text-gray-700
                             focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none transition-all duration-200 shadow-sm
                             hover:border-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApprovalRulesTable;