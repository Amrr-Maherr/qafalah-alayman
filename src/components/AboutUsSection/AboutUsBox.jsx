export default function AboutUsBox({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm shadow-lg">
        <span className="text-4xl text-gray-600">{icon}</span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-800">{title}</h3>

      <p className="mt-3 text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}
