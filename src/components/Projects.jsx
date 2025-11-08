const projects = [
  {
    title: "Wi-Fi Vigilante",
    desc: "Case-driven network investigation platform.",
    link: "https://wifivigilante.com"
  },
  {
    title: "LinkRunner Recovery",
    desc: "Open-source tool for NetAlly device management.",
    link: "https://github.com/krisarmstrong/linkrunner-recovery"
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      {projects.map((p, i) => (
        <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:bg-violet-900 transition block">
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-300">{p.desc}</p>
        </a>
      ))}
    </div>
  );
}