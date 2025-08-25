import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <section className="text-center py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-4">Hi, I’m [Jonnagaddala Mohan Sai]</h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg">Frontend Developer | React & Next.js Enthusiast</p>
        </FadeIn>
      </section>
    </main>
  );
}
