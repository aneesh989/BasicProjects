import React from "react";

const HomePage = () => {
  return (
    <div className="max-h-max bg-gray-50 flex-col items-center">
      <section
        className="bg-cover bg-center py-32 w-full opacity-90"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="container mx-auto flex content-center justify-center text-white">
          <div>
            <h1 className="backdrop-blur-lg w-max  flex content-center justify-center text-5xl font-bold mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl mb-12  backdrop-blur-lg text-white">
              I've created this portfolio website to showcase my React projects and demonstrate my skills and experience.
            </p>
            <a
              href="#"
            >
              <button
                className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
              >
                Explore!
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                ></span>
                <span
                  className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >Explore!</span
                >
              </button>

            </a>
          </div>
        </div>
      </section>
      <div className="py-16  bg-white">
      <div className="container m-auto  px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nuxt Development"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React Developer | Web Developer |
            </h2>
            <p className="mt-6 text-gray-600">
              I made this website for learning purpose and I add all basic react
              project in this website, and show my work experience and skills.
            </p>
            <p className="mt-4 text-gray-600">
            I am a passionate developer with a strong foundation in web development. Over the past two years, I have acquired extensive knowledge in HTML, CSS, JavaScript, advanced JavaScript, and React through various personal and academic projects. While I am new to the industry and do not yet have professional experience, I am eager to apply my skills and continue learning in a real-world environment.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
