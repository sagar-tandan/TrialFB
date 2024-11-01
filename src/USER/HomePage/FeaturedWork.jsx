import React from "react";
import { ArrowRight } from "lucide-react";

const FeaturedWork = () => {
  // Sample data - replace with your actual data
  const projectData = {
    title: "Smart Home Automation",
    description: "A comprehensive IoT solution for modern homes",
    mainImage: "/api/placeholder/600/400",
    challenges: {
      description:
        "Integrating multiple IoT protocols while maintaining system reliability and user privacy was our biggest challenge. We needed to ensure seamless communication between different smart devices while keeping the system secure.",
      image: "https://images.ctfassets.net/oibwaxx12z4v/5TUBu0g07u5IV9ZYheExxv/8a7b0efe5135410ac6d64b5201fdc657/cad_model_development.png",
    },
    outcomes: {
      description:
        "Successfully developed a unified platform that connects various smart devices, with military-grade encryption and 99.9% uptime. The solution is now used in over 1000 homes.",
      image: "https://images.ctfassets.net/oibwaxx12z4v/1oo3LcBbscjOc02NLAYqQB/0e42dfdef2faaf8729cc713e18055cd6/Untitled100__1_.png",
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 bg-gray-50">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {projectData.title}
          </h1>
          <p className="text-lg text-gray-600">{projectData.description}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={projectData.mainImage}
            alt="Project Overview"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </span>
              Challenges
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {projectData.challenges.description}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={projectData.challenges.image}
              alt="Project Challenges"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={projectData.outcomes.image}
                alt="Project Outcomes"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </span>
              Outcomes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {projectData.outcomes.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
