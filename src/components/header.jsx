import { useState } from "react";

function Header() {
    const [activePage, setActivePage] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handlePageChange = (page) => {
        setActivePage(page);
        setMenuOpen(false); // Cierra el menú al seleccionar
    };

    return (
        <header className="flex items-center pt-3 w-full">
            <nav className="w-full max-w-2xl mx-auto px-3 rounded-4xl">
                {/* Botón hamburguesa para móviles */}
                <div className="flex justify-end md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
                {/* Menú de navegación */}
                <ul className={`
                    flex-col md:flex-row md:flex
                    ${menuOpen ? "flex" : "hidden"}
                    md:items-center md:justify-between items-center p-4 text-white bg-gray-900 md:bg-transparent rounded-lg md:rounded-none absolute md:static top-16 left-0 w-full md:w-auto z-50 transition-all
                `}>
                    <li
                        className={`cursor-pointer py-2 md:py-0 ${activePage === "Home" ? "text-cyan-400 font-bold" : ""}`}
                        onClick={() => handlePageChange("Home")}
                    >
                        Inicio
                    </li>
                    <li
                        className={`cursor-pointer py-2 md:py-0 ${activePage === "Resume" ? "text-cyan-400 font-bold" : ""}`}
                        onClick={() => handlePageChange("Resume")}
                    >
                        Resume
                    </li>
                    <li
                        className={`cursor-pointer py-2 md:py-0 ${activePage === "Contact" ? "text-cyan-400 font-bold" : ""}`}
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