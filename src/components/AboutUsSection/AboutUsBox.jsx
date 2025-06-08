export default function AboutUsBox({ icon, title, text }) {
  return (
    <div className="bg-[#F2F2F2] p-8 rounded-2xl  shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full">
        <span className="text-4xl text-amber-600">{icon}</span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-800">{title}</h3>

      <p className="mt-3 text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}
