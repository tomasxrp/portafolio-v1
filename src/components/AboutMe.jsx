function AboutMe() {
    return (
        <div className="flex items-center justify-center h-210">
            <div className="flex flex-col w-3/4 gap-15 p-6 rounded-lg">
                <h1 className="text-5xl font-bold text-orange-600">About me</h1>

                <div className="flex gap-6 items-center">
                    <img 
                        src="https://videos.openai.com/vg-assets/assets%2Ftask_01jwxqzwgyes3thztx2a3ap7f9%2F1749050030_img_0.webp?st=2025-06-04T14%3A09%3A39Z&se=2025-06-10T15%3A09%3A39Z&sks=b&skt=2025-06-04T14%3A09%3A39Z&ske=2025-06-10T15%3A09%3A39Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=o0eof9FPz5n%2FfX%2FbCzVCfDk4vmngxquJAeVj593wWOY%3D&az=oaivgprodscus" 
                        alt="About Me" 
                        className="max-w-[400px] max-h-[800px] rounded-lg object-cover"
                    />
                    <p className="text-white p-20 text-xl">
                        Hello! I'm a passionate and curious developer with a strong interest in building meaningful and user-friendly digital experiences. I enjoy learning new technologies and turning ideas into functional and visually appealing projects.

                        With a background in [insert relevant field, e.g., software development, web design, etc.], I focus on writing clean, efficient code and continuously improving my skills. Whether it's working on front-end interfaces or exploring back-end logic, I'm always excited to take on new challenges and grow as a professional.

                        When I'm not coding, I enjoy [insert personal interests, e.g., reading, gaming, exploring tech trends, etc.]. I'm always open to collaboration and new opportunities — feel free to reach out!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;