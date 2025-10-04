import React from 'react';

const SwitchToggle = ({ checked, onChange, label, colors }) => (
  <div className="flex items-center">
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: checked ? colors.green : colors.borderGray,
        "--tw-ring-color": colors.blue,
        transition: 'background-color 0.2s ease-in-out',
      }}
      role="switch"
      aria-checked={checked}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
    {label && (
      <span className="ml-3 text-sm font-medium" style={{ color: colors.gray }}>
        {label}
      </span>
    )}
  </div>
);


export default SwitchToggle;
