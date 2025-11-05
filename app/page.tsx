import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";
import QuizSection from "./components/QuizSection";
import FreebiesSection from "./components/FreebiesSection";
import PodcastSection from "./components/PodcastSection";
import BlogSection from "./components/BlogSection";
import CourseLibrary from "./components/CourseLibrary";
import PinterestPromoSection from "./components/PinterestPromoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueSection />
      <QuizSection />
      <FreebiesSection />
      <PodcastSection />
      <BlogSection />
      <CourseLibrary />
      <PinterestPromoSection />
      <Footer />
    </main>
  );
}
