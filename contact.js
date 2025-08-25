import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <section className="p-10 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p>Email: <a href="jonnagaddalamohansai@gmail.com" className="underline">jonnagaddalamohansai@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jonnagaddala-mohan-sai-1218842a8/" target="_blank" className="underline">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/jonnagaddalamohansai" target="_blank" className="underline">github.com/yourgithub</a></p>
      </section>
    </main>
  );
}
