import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import AboutSection from "../components/AboutSection";
import { programs } from "../data/programs";
import HelpingSection from "../components/HelpingSection";
import Testimonials from "./Testimonials";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero backgroundImage="https://st.depositphotos.com/1743476/1276/i/450/depositphotos_12760601-stock-photo-loving-senior-couple.jpg" />

      <HelpingSection />
      <section className="py-20 px-6 md:px-16 bg-white">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Our Grant Programs
          </h2>
           <div className="h-2 w-24 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our structured financial assistance programs designed to
            support businesses, individuals, and youth across the nation.
          </p>
        </div>

        {/* Program Cards */}
        
      </section>
      <section id="programs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>

              <p className="text-green-600 text-lg font-semibold mb-4">
                {program.amount}
              </p>

              <p className="text-gray-600 mb-6">{program.description}</p>

              <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <MissionSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};
export default Home;
