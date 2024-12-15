import React from "react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "BMI Calculator",
    path: "/Health-Metrics-Hub/bmi",
    description:
      "Calculate your Body Mass Index (BMI) - a simple measure using your height and weight to work out if your weight is healthy.",
    image:
      "https://img.freepik.com/free-vector/flat-woman-diet-control-normal-weight-with-bmi-scale_88138-933.jpg",
  },
  {
    title: "Age Calculator",
    path: "/Health-Metrics-Hub/age",
    description:
      "Calculate your exact age in years, months, and days. A simple tool to know your precise age from your date of birth.",
    image:
      "https://img.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg",
  },
  {
    title: "Water Intake Calculator",
    path: "/Health-Metrics-Hub/water",
    description:
      "Calculate your daily water intake needs based on your weight, activity level, and climate conditions.",
    image:
      "https://img.freepik.com/free-vector/drink-water-concept-illustration_114360-8921.jpg",
  },
  {
    title: "Sleep Calculator",
    path: "/Health-Metrics-Hub/sleep",
    description:
      "Calculate the ideal bedtime based on your desired wake-up time and sleep cycles.",
    image:
      "https://img.freepik.com/free-vector/sleep-analysis-concept-illustration_114360-4429.jpg",
  },
  {
    title: "Ideal Weight Calculator",
    path: "/Health-Metrics-Hub/ideal-weight",
    description:
      "Calculate your ideal weight range based on height, gender, and body frame size.",
    image:
      "https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-1525.jpg",
  },
];

const ToolCard = ({ title, description, image, path }) => {
  return (
    <div className="card card-compact bg-base-300 w-full sm:w-[15em] md:w-[25em] hover:shadow-xl transition-all duration-400 hover:scale-100">
      <figure className="h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-base-content/70 text-lg">{description}</p>
        <div className="card-actions justify-end mt-4">
          <Link to={path}>
            <button className="btn btn-primary btn-lg hover:btn-neutral transition-colors">
              {title === "BMI Calculator" && "Measure Your BMI"}
              {title === "Age Calculator" && "Calculate Your Age"}
              {title === "Water Intake Calculator" && "See Your Water Needs"}
              {title === "Sleep Calculator" && "Find Your Ideal Sleep Time"}
              {title === "Ideal Weight Calculator" &&
                "Discover Your Ideal Weight"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-base-100 py-20 md:py-28">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-5xl font-bold text-base-content mb-6 leading-tight">
          Take Control of Your Health with Precision Tools
        </h1>
        <p className="text-xl text-base-content/80 mb-10 leading-relaxed">
          Our suite of health calculators provides you with the insights you
          need to make informed decisions about your well-being. From BMI to
          sleep, we have you covered.
        </p>

        <a
          href="#calculators"
          className="btn btn-primary btn-lg hover:btn-secondary transition-colors"
        >
          Explore Tools
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-2802.jpg"
          alt="Health Tools Illustration"
          className="rounded-lg shadow-xl max-w-full h-auto hover:opacity-90 transition-opacity"
          style={{ maxWidth: "500px" }}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-base-300 py-8 text-center text-base-content/70">
    <div className="container mx-auto px-6">
      <p className="mb-6 text-base italic max-w-3xl mx-auto">
        <strong className="text-primary">Disclaimer:</strong> The information
        provided by these tools is intended for general informational purposes
        only and should not be considered as medical advice. Please consult a
        healthcare professional for personalized recommendations.
      </p>
      <div className="divider max-w-xl mx-auto"></div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-base font-medium">Created with ❤️ by Dhairya</p>
        <p className="text-sm opacity-75">
          Empowering your health journey, one calculation at a time
        </p>
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-100 pt-16">
      <HeroSection />
      <div className="container mx-auto px-6 py-10" id="calculators">
        <div className="grid grid-cols-1 z-0 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
