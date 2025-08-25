import Navbar from "../components/Navbar";

export default function Skills() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <section className="p-10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <ul className="grid grid-cols-2 gap-3 text-lg">
          <li>Python & Django</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>UI/UX Design (Figma)</li>
        </ul>
      </section>
    </main>
  );
}
