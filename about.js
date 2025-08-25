import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <section className="p-10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p>
          I am a frontend developer passionate about building user-friendly applications.
          I have experience in React, Next.js, Django, and UI/UX design. 
          During my academics, I worked on a Faculty Management System and also built
          a Trading Bot as a personal project.
        </p>
      </section>
    </main>
  );
}
