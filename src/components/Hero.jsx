import avatar from "../assets/avatarPortafolio.png";

function Hero() {
    return (
        <div className="h-full flex items-center justify-between px-10 max-w-6xl mx-auto">
            {/* Sección izquierda */}
            <div className="flex flex-col max-w-lg gap-6">
                <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent text-7xl bg-clip-text">
                    Tomas Rivera
                </h1>
                <p className="text-gray-300 text-lg mt-4">
                    Esta es una breve descripción sobre el contenido de tu página o proyecto. Aquí puedes destacar algo importante.
                </p>
                <div className="flex mt-6 space-x-4">
                    <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-700 to-purple-600 text-white">Descargar CV</button>
                </div>
            </div>

            {/* Sección derecha */}
            <div className="flex-shrink-0">
                <img
                    src={avatar}
                    alt="Descripción de la imagen"
                    className="w-96 h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
}

export default Hero;