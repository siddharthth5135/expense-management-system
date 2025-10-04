import React from "react";

const Table = ({ columns, data, actions }) => {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="py-3 px-6 text-left border-b border-gray-300"
                            >
                                {column.displayName}
                            </th>
                        ))}
                        {actions && (
                            <th className="py-3 px-6 text-left border-b border-gray-300">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${
                                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100 transition-colors`}
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="py-3 px-6 text-gray-800 border-b border-gray-300"
                                >
                                    {column.renderCell
                                        ? column.renderCell(row)
                                        : row[column.key]}
                                </td>
                            ))}
                            {actions && (
                                <td className="py-3 px-6 text-gray-800 border-b border-gray-300">
                                    {actions(row)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
