function Navbar() {
    const style = {
        fontFamily: '"Poppins", sans-serif',
    };

    return (
        <>
           <header style={style} className="flex flex-row sm:flex-row justify-between bg-sky-600 p-5 text-white">
    <div>
        <h1 className="text-lg sm:text-sm">Student Management</h1>
    </div>
    <ul className="flex justify-evenly list-none gap-3 sm:gap-5 text-sm sm:text-base lg:text-sm">
        <li className="hover:underline cursor-pointer">Add Student</li>
        <li className="hover:underline cursor-pointer">Student List</li>
    </ul>
</header>

        </>
    );
}

export default Navbar;
