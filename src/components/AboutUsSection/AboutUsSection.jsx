import AboutUsBox from "./AboutUsBox";

export default function AboutUsSection({ data, title, description,bgColor }) {
  return (
    <section className={`${bgColor || "bg-white"} py-20 px-4`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
