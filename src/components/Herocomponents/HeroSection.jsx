export default function HeroSection({BackGroundImage,title,description,buttonText}) {
    return (
      <>
        <section
          className="min-h-screen relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${BackGroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-normal mb-10 text-white max-w-3xl">
              {description}
            </p>
            <button className="bg-[#B38124] text-sm sm:text-base md:text-lg font-semibold text-white px-8 py-3 rounded-full w-fit">
              {buttonText}
            </button>
          </div>
        </section>
      </>
    );
}