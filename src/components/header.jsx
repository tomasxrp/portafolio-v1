import { useState } from "react";

function Header() {
    const [activePage, setActivePage] = useState("Home");
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    return (
        <header className="flex items-center h-28" >
            <nav className="w-1/4 mx-auto border-[0.5px] border-gray-500 px-6 rounded-4xl">
                <ul className="flex justify-between items-center p-4 text-white">
                    <li
                        className={`cursor-pointer ${activePage === "Home" ? "text-orange-500 font-bold" : ""}`}
                        onClick={() => handlePageChange("Home")}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer ${activePage === "Resume" ? "text-orange-500 font-bold" : ""}`}
                        onClick={() => handlePageChange("Resume")}
                    >
                        Resume
                    </li>
                    <li
                        className={`cursor-pointer ${activePage === "Contact" ? "text-orange-500 font-bold" : ""}`}
                        onClick={() => handlePageChange("Contact")}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;