import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Training from "@/components/sections/Training";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Advantages from "@/components/sections/Advantages";
import FAQ from "@/components/sections/FAQ";
import Teachers from "@/components/sections/Teachers";
import PopularCourses from "@/components/sections/PopularCourses";
import FreeTrial from "@/components/sections/FreeTrial";

import siteData from "@/content/site.json";
import testimonialsData from "@/content/testimonials.json";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TopBar />

      <section id="hero">
        <Hero data={siteData} />
      </section>

      <section id="about">
        <About data={siteData} />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="why">
        <WhyChooseUs />
      </section>

      <Advantages />
      <PopularCourses />

      <section id="training">
        <Training />
      </section>

      <Teachers />

      <section id="faq">
        <FAQ />
      </section>

      <FreeTrial />

      <section id="testimonials">
        <Testimonials data={testimonialsData} />
      </section>

      <section id="contact">
        <Contact data={siteData} />
      </section>

      <ChatWidget />
      <Footer />
    </main>
  );
}