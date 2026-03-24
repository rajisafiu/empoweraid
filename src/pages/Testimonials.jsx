import TestimonialSlider from "../components/TestimonialSlider";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Success Stories</h2>
         <div className="h-2 w-24 bg-green-500 mx-auto mb-8 rounded-full"></div>
        <p className="mt-4 text-gray-600">
          These are the inspiring stories of people whose projects and lives have been transformed with our grant support.
        </p>
      </div>
      <TestimonialSlider data={testimonials} slidesPerView={3} />
    </div>
  );
}

export default Testimonials;