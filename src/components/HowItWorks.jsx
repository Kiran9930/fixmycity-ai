import {
  FaCamera,
  FaRobot,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera />,
    title: "Capture",
    desc: "Take a photo of the issue."
  },
  {
    icon: <FaRobot />,
    title: "AI Analysis",
    desc: "AI detects category & priority."
  },
  {
    icon: <FaCheckCircle />,
    title: "Verification",
    desc: "Community validates the report."
  },
  {
    icon: <FaTools />,
    title: "Resolution",
    desc: "Authorities resolve the issue."
  },
];

function HowItWorks() {
  return (
    <section className="py-24">

      <h2 className="text-5xl text-center font-bold">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mt-16 px-8">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-8 text-center"
          >
            <div className="text-5xl text-blue-600 mb-5">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {step.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;