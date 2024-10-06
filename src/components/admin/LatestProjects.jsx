import React from 'react';

const LatestProjects = () => {
    const projects = [
        { name: "Project Apollo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Vanessa Tucker" },
        { name: "Project Fireball", startDate: "01/01/2023", endDate: "31/06/2023", status: "Cancelled", assignee: "William Harris" },
        { name: "Project Hades", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Sharon Lessman" },
        { name: "Project Nitro", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", assignee: "Vanessa Tucker" },
        { name: "Project Phoenix", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "William Harris" },
        { name: "Project X", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Sharon Lessman" },
        { name: "Project Romeo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Christina Mason" },
        { name: "Project Wombat", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", assignee: "William Harris" }
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">Latest Projects</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Start Date
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                End Date
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Assignee
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {project.name}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {project.startDate}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {project.endDate}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ${project.status === "Done" ? "text-green-900 bg-green-200" : project.status === "In progress" ? "text-orange-900 bg-orange-200" : "text-red-900 bg-red-200"}`}>
                                        <span aria-hidden="true" className="absolute inset-0 opacity-50 rounded-full"></span>
                                        <span className="relative">{project.status}</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {project.assignee}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LatestProjects;
