import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const EmployeeList = () => {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '123-456-7890', designation: 'Developer', gender: 'Male', course: 'Computer Science', createdDate: '2024-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '987-654-3210', designation: 'Designer', gender: 'Female', course: 'Graphic Design', createdDate: '2024-02-01' }
  ]);

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-4">Employee List</h1>
      <div className="flex justify-between mb-4">
        <span className="text-lg font-medium">Total Employees: {filteredEmployees.length}</span>
        <Link to={'/create-employee'} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" >Create Employee</Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Mobile Number</th>
            <th className="px-4 py-2 border-b">Designation</th>
            <th className="px-4 py-2 border-b">Gender</th>
            <th className="px-4 py-2 border-b">Course</th>
            <th className="px-4 py-2 border-b">Created Date</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{employee.id}</td>
              <td className="px-4 py-2">{employee.name}</td>
              <td className="px-4 py-2">{employee.email}</td>
              <td className="px-4 py-2">{employee.mobile}</td>
              <td className="px-4 py-2">{employee.designation}</td>
              <td className="px-4 py-2">{employee.gender}</td>
              <td className="px-4 py-2">{employee.course}</td>
              <td className="px-4 py-2">{employee.createdDate}</td>
              <td className="px-4 py-2 text-center">
                <button className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-2">
                    <Link to={'/employee-edit'}>Edit</Link></button>
                <button className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
