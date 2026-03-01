import Hero from "../components/Hero";
import ProgramCard from "../components/ProgramCard";
import TestimonialCard from "../components/TestimonialCard";
import MissionSection from "../components/MissionSection";
import AboutSection from "../components/AboutSection";
import {programs} from "../data/programs";
import {testimonials} from "../data/testimonials";
import HelpingSection from "../components/HelpingSection";

const Home = ()=>{
    return(
        <>
        <Hero 
        backgroundImage="https://as1.ftcdn.net/jpg/01/88/78/52/1000_F_188785279_87HuSHPDwkyi6vDgBVle7Jo51tQ6u7st.jpg"
        />
        <HelpingSection/>
<section className="py-20 px-6 md:px-16 bg-white">
  
  {/* Section Header */}
  <div className="text-center mb-14">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Our Grant Programs
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Explore our structured financial assistance programs designed to
      support businesses, individuals, and youth across the nation.
    </p>
  </div>

  {/* Program Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {programs.map((program, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center border border-gray-100"
      >
        <h3 className="text-xl font-bold mb-3">
          {program.title}
        </h3>

        <p className="text-green-600 text-lg font-semibold mb-4">
          {program.amount}
        </p>

        <p className="text-gray-600 mb-6">
          {program.description}
        </p>

        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition">
          Learn More
        </button>
      </div>
    ))}

  </div>
</section>

         <section>
            <h2 className="text-3xl font-bold text-center mb-10">
                Success Stories
            </h2>

        <div className="grid md; grid-cols-3 gap-6 p-10 bg-gray-50">
            {testimonials.map((testimonial, index) =>(
                <TestimonialCard key={index} {...testimonial}/>
            ) ) }
        </div>
        </section>
       

        <MissionSection/>
        <AboutSection/>

        </>
    );
};
export default Home;