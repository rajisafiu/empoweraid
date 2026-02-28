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
        <Hero/>
        <HelpingSection/>
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
                Our Grant Programs
            </h2>
        <div className="grid md:grid-cols-3 gap-6 p-10">
            {programs.map((program, index) =>(
                <ProgramCard key={index} {...program}/>
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