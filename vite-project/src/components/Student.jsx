import axios from "axios";
import { useState, useEffect } from "react";

function Studentlist() {
  const BaseUrl = "https://my-project-woad-chi.vercel.app/";
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    try {
      const res = await axios.get(`${BaseUrl}students`);
      console.log("Fetched data:", res.data);

      // Check if it's an object with students array inside
      if (Array.isArray(res.data)) {
        setStudents(res.data);
      } else if (Array.isArray(res.data.students)) {
        setStudents(res.data.students);
      } else {
        console.error("Unexpected response structure:", res.data);
        setStudents([]);
      }

    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <section className="container mx-auto mt-10 px-2">
      <h1 className="text-2xl font-semibold mb-4 text-center">Student List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-6 whitespace-nowrap">Name</th>
              <th className="py-3 px-6 whitespace-nowrap">Email</th>
              <th className="py-3 px-6 whitespace-nowrap">Phone</th>
              <th className="py-3 px-6 whitespace-nowrap">StudentId</th>
              <th className="py-3 px-6 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(students) && students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="border-t border-gray-400">
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.email}</td>
                  <td className="py-3 px-6">{student.phone}</td>
                  <td className="py-3 px-6">{student.studentId}</td>
                  <td className="py-2 px-6 space-x-2">
                    <button className="bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-800">Edit</button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Studentlist;
