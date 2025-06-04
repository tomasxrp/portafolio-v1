function TecnologiaCard({ tecnologia }) {
    return (
        <div className="w-64 h-64  flex flex-col items-center justify-center gap-5 rounded-lg bg-[#0f0f0f] shadow-lg">
            <div className="text-6xl text-center">{tecnologia.icon}</div> {/* Renderiza el ícono directamente */}
            <h3 className="text-xl font-semibold text-center">{tecnologia.nome}</h3>
        </div>
    );
}

export default TecnologiaCard;