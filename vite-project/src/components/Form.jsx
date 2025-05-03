function Form() {
    return (
        <>
            <h1 className="text-2xl font-semibold  text-center mt-5">Add New Student</h1>
            <div className="lg:w-[500px] h-[500px]   mx-auto mt-10">
                <form className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg">

                    <div>
                        <label className="block mb-1 font-medium"> Name </label>
                        <input type="text" className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Name" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> Email </label>
                        <input type="text" className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Email" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> Phone </label>
                        <input type="text" className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Phone" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> StudentId </label>
                        <input type="text" className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400 " placeholder="Enter The StudentId" />
                    </div>

                    <button type="submit" className="bg-blue-600  text-white px-6 py-2 rounded-md hover:bg-blue-700 block mx-auto">Add Student</button>

                </form>
            </div>

        </>
    )
}

export default Form;