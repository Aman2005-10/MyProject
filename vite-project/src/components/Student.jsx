import axios from "axios";
import { useState, useEffect } from "react";

function StudentList() {
  const BASE_URL = "https://my-project-woad-chi.vercel.app/";
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}students`);
        const data = response.data;
        if (Array.isArray(data)) {
          setStudents(data);
        } else if (Array.isArray(data.students)) {
          setStudents(data.students);
        } else {
          setStudents([]);
        }
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
  
    try {
      await axios.delete(`${BASE_URL}students/${id}`);
      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student. Try again.");
    }
  };


  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">📋 Student List</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Student ID</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.phone}</td>
                  <td className="px-6 py-4">{student.studentId}</td>
                  <td className="px-6 py-4 space-x-2">
                    {/* set this edit feature tommorw */}
                    {/* <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Edit</button> */}
                    <button
  onClick={() => handleDelete(student._id)}
  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
>
  Delete
</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-5 text-gray-500">
                  No students found 😞
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
