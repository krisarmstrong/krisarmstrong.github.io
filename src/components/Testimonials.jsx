const testimonials = [
  {
    name: "Jordan Smith, CTO",
    quote: "Kris brings a unique blend of network mastery and creative storytelling. Always delivers.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ava Lee, Wireless Engineer",
    quote: "His network insights and animation skills are unmatched in the field.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-900 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center mb-4">
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
            <span className="font-semibold">{t.name}</span>
          </div>
          <blockquote className="text-lg italic text-violet-400">“{t.quote}”</blockquote>
        </div>
      ))}
    </div>
  );
}