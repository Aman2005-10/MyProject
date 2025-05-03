import axios from "axios";
import { useState , useEffect } from "react";

function Form() {

    const [formdata , setformdata] = useState({
        name:'',
        email:'',
        phone:'',
        studentId:''
    });
    const [error , seterror] = useState('');
    const [add , setadd] = useState('');


    useEffect(() => {
        if(add || error ) {
            const timer = setTimeout(() => {
                setadd('');
                seterror('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    } , [add , error])

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value,
        })
    };

    const BaseUrl = "https://my-project-woad-chi.vercel.app/";
    const handlesubmit = async (e) => {
        e.preventDefault();
    
        // Check if any field is empty
        if (!formdata.name || !formdata.email || !formdata.phone || !formdata.studentId) {
            alert("Please fill in all fields!");
            return;
        }
    
        try {
            const res = await axios.post(`${BaseUrl}students`, formdata);
            console.log('Server Response:', res.data);
            setadd("Student added successfully!");
            seterror('');
            setformdata({ name: '', email: '', phone: '', studentId: '' }); // reset form
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
            seterror("Something went wrong!");
            setadd('');
        }
    }
    

    return (
        <>
            <h1 className="text-2xl font-semibold  text-center mt-5">Add New Student</h1>
            <div className="lg:w-[500px] h-[500px]   mx-auto mt-10">
                <form className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg" onSubmit={handlesubmit}>

                    <div>
                        <label className="block mb-1 font-medium"> Name </label>
                        <input type="text" name="name" value={formdata.name} onChange={handlechange} className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Name" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> Email </label>
                        <input type="text"  name="email" value={formdata.email} onChange={handlechange} className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Email" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> Phone </label>
                        <input type="text" name="phone" value={formdata.phone} onChange={handlechange} className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400" placeholder="Enter The Phone" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium"> StudentId </label>
                        <input type="text" name="studentId" value={formdata.studentId} onChange={handlechange} className="w-full border px-4 py-2 rounded-md border-gray-400 placeholder:text-gray-400 " placeholder="Enter The StudentId" />
                    </div>

                    <button  className="bg-blue-600  text-white px-6 py-2 rounded-md hover:bg-blue-700 block mx-auto">Add Student</button>

                    {error && <h1 className="text-red-500 text-xl text-center" >{error}</h1>}
                    {add && <p className="text-green-500 text-lg text-center">{add}</p>}
                </form>
            </div>

        </>
    )
}

export default Form;