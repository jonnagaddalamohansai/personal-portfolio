import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";

const projects = [
  {
    title: "Faculty Management System",
    description: "Built with Django + frontend UI for managing faculty data.",
    github: "https://github.com/yourgithub/faculty-management",
    demo: "#", // replace with demo link if hosted
  },
  {
    title: "Trading Bot",
    description: "Automated trading bot using Python & APIs with a simple dashboard.",
    github: "https://github.com/yourgithub/trading-bot",
    demo: "#",
  },
  {
    title: "Court-Data-Fetcher-Mini-Dashboard",
    description: "A simple Flask-based web app that allows users to fetch metadata and the latest order/judgment PDF for Indian court cases by entering the case type, case number, and filing year",
    github: "https://github.com/jonnagaddalamohansai/Court-Data-Fetcher-Mini-Dashboard", // add portfolio case study link if available
    demo: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <section className="p-10">
        <FadeIn>
          <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.3}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex space-x-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
