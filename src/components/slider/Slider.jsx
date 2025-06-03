import React from 'react';

const Slider = () => {
    return (
        <div className='bg-gradient-to-br from-[#acb8e4] to-[#9bb6f1] my-20'>
            <div className="carousel min-h-[400px] py-10 sm:py-16 w-full">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full flex flex-col lg:flex-row items-center h-auto min-h-[400px]">
                    <img
                        src="https://i.ibb.co/TxRF0PXX/img1.jpg"
                        className="w-full lg:w-1/2 object-cover h-64 sm:h-80 lg:h-full"
                    />
                    <div className="w-full lg:w-1/2 bg-[#000118]/80 text-white px-4 py-8 sm:px-8 sm:py-10 lg:p-16 text-center lg:text-left h-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#52faca]">TechXpo 2025</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                            Explore the future of AI, Robotics, and IoT with top innovators and tech giants at TechXpo 2025.
                        </p>
                        <button className="mt-6 px-4 sm:px-6 py-2 bg-[#52faca] text-black rounded-full hover:bg-[#3cdab0] transition-all duration-300">
                            Explore More
                        </button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 hidden sm:flex justify-between">
                        <a href="#slide4" className="btn btn-primary btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-primary btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full flex flex-col lg:flex-row items-center h-auto min-h-[400px]">
                    <img
                        src="https://i.ibb.co/Fq0scmYv/img2.jpg"
                        className="w-full lg:w-1/2 object-cover h-64 sm:h-80 lg:h-full"
                    />
                    <div className="w-full lg:w-1/2 bg-[#000118]/80 text-white px-4 py-8 sm:px-8 sm:py-10 lg:p-16 text-center lg:text-left h-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#52faca]">Foodie Fiesta</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                            A vibrant celebration of flavors — street food, gourmet dishes, and cooking workshops from top chefs!
                        </p>
                        <button className="mt-6 px-4 sm:px-6 py-2 bg-[#52faca] text-black rounded-full hover:bg-[#3cdab0] transition-all duration-300">
                            Explore More
                        </button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 hidden sm:flex justify-between">
                        <a href="#slide1" className="btn btn-primary btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-primary btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full flex flex-col lg:flex-row items-center h-auto min-h-[400px]">
                    <img
                        src="https://i.ibb.co/Pskswp3t/img3.jpg"
                        className="w-full lg:w-1/2 object-cover h-64 sm:h-80 lg:h-full"
                    />
                    <div className="w-full lg:w-1/2 bg-[#000118]/80 text-white px-4 py-8 sm:px-8 sm:py-10 lg:p-16 text-center lg:text-left h-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#52faca]">Creative Minds Art Fair</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                            Experience an explosion of creativity with local artists, live mural painting, and hands-on art sessions.
                        </p>
                        <button className="mt-6 px-4 sm:px-6 py-2 bg-[#52faca] text-black rounded-full hover:bg-[#3cdab0] transition-all duration-300">
                            Explore More
                        </button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 hidden sm:flex justify-between">
                        <a href="#slide2" className="btn btn-primary btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-primary btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full flex flex-col lg:flex-row items-center h-auto min-h-[400px]">
                    <img
                        src="https://i.ibb.co/qF0xnKXZ/img5.jpg"
                        className="w-full lg:w-1/2 object-cover h-64 sm:h-80 lg:h-full"
                    />
                    <div className="w-full lg:w-1/2 bg-[#000118]/80 text-white px-4 py-8 sm:px-8 sm:py-10 lg:p-16 text-center lg:text-left h-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#52faca]">Sunset Music Bash</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                            Dance to live DJ sets on the beach, with fireworks, neon lights, and the ocean breeze as your backdrop.
                        </p>
                        <button className="mt-6 px-4 sm:px-6 py-2 bg-[#52faca] text-black rounded-full hover:bg-[#3cdab0] transition-all duration-300">
                            Explore More
                        </button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 hidden sm:flex justify-between">
                        <a href="#slide3" className="btn btn-primary btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-primary btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
