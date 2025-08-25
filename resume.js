import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";

export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <section className="p-10 text-center">
        <FadeIn>
          <h3 className="text-3xl font-semibold mb-6">My Resume</h3>
          <p className="mb-6">
            You can view or download my resume below:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1U9wyRgQ2y8SQ4S8dXNvDyXof3BrLtlPr/view?usp=sharing"
              target="_blank"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              📄 View Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1U9wyRgQ2y8SQ4S8dXNvDyXof3BrLtlPr/view?usp=sharing"
              download
              className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              ⬇️ Download CV
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
