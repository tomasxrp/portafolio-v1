function TecnologiaCard({ tecnologia }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 rounded-lg bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <div className="text-5xl sm:text-6xl text-center">{tecnologia.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-center">{tecnologia.nome}</h3>
        </div>
    );
}

export default TecnologiaCard;