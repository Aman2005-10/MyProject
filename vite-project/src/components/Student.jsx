function Studentlist() {
    return (
        <>
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
        <tr className="border-t border-gray-400">
          <td className="py-3 px-6">Aman</td>
          <td className="py-3 px-6">abc@gmail.com</td>
          <td className="py-3 px-6">1234567890</td>
          <td className="py-3 px-6">101</td>
          <td className="py-2 px-6 space-x-2">
            <button className="bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-800">Edit</button>
            <button className="bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-800">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

        </>
    )
}

export default Studentlist;