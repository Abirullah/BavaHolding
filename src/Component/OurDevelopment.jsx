import AnimatedHeading from "./AnimatedHeading";
import ButtonWrapper from "./Button";
import Card from "./Card";
import Logomarquee from "./UltimateScroller";

const services = [
  {
    title: "AR/VR Development",
    description:
      "We thoroughly assess your project concept's potential and fit for development, considering factors like market demand and feasibility.",
    gradient: "bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-black",
  },
  {
    title: "MVP Development",
    description:
      "Our MVP Development approach is tailored to propel your product to market at an accelerated pace.",
    gradient: "bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-black",
  },
  {
    title: "Product Design",
    description:
      "Test and refine concepts while exploring product features through comprehensive design processes.",
    gradient: "bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-black",
  },
  {
    title: "Generative AI Development",
    description:
      "Complete end-to-end development solutions using modern AI tech stack to build scalable applications.",
    gradient: "bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-black",
  },
];
function OurFDevelopment() {
  return (
    <div className="relative overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-white flex flex-col items-center">

        {/* Heading */}
        <AnimatedHeading
          as="h1"
          className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 text-center leading-tight"
        >
          Test and refine concepts while exploring product features through
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}MVP development
          </span>
        </AnimatedHeading>

        {/* Paragraph */}
        <p className="text-lg text-center text-gray-400 leading-relaxed max-w-5xl">
          Our MVP Development approach is tailored to propel your product to market at an accelerated pace. We help businesses navigate market shifts while amplifying innovation through intelligent design and scalable technology.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-10 w-full">
          <ButtonWrapper />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 w-full">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>

      </div>
    <div className="relative max-w-7xl mx-auto px-6 py-20 text-white flex flex-col items-center">        <AnimatedHeading as="h1" className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 text-center leading-tight">
          Our
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}MVP development {" "}
          </span>
          technologies
        </AnimatedHeading>

 <p className="text-lg text-center text-gray-400 leading-relaxed max-w-4xl">     
    
        We've worked on various product in various industries that highlight our MVP development expertise using the following tech stack:
             
        </p>

      </div>
      <div className=" flex justify-center  w-full">
           <Logomarquee/>

      </div>

   
    </div>
  );
}

export default OurFDevelopment;
