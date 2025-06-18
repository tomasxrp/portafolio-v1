import { useState } from "react";

function Header() {
    const [activePage, setActivePage] = useState("Home");
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    return (
        <header className="flex items-center pt-3" >
            <nav className="w-1/4 mx-auto px-3 rounded-4xl">
                <ul className="flex justify-between items-center p-4 text-white">
                    <li
                        className={`cursor-pointer ${activePage === "Home" ? "text-cyan-400 font-bold" : ""}`}
                        onClick={() => handlePageChange("Home")}
                    >
                        Inicio
                    </li>
                    <li
                        className={`cursor-pointer ${activePage === "Resume" ? "text-cyan-400 font-bold" : ""}`}
                        onClick={() => handlePageChange("Resume")}
                    >
                        Resume
                    </li>
                    <li
                        className={`cursor-pointer ${activePage === "Contact" ? "text-cyan-400 font-bold" : ""}`}
                        onClick={() => handlePageChange("Contact")}
                    >
                        Contacto
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;