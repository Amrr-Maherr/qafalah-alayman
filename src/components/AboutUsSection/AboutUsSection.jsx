import AboutUsBox from "./AboutUsBox";

export default function AboutUsSection({ data, title, description,bgColor }) {
  return (
    <section className={`${bgColor || "bg-black"} py-20 px-4 text-white`}>
      <div className="container mx-auto">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-extrabold">{title}</h2>
          <p className="mt-4 text-lg">{description}</p>
        </div>

        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {data?.map((item, index) => (
            <AboutUsBox
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
