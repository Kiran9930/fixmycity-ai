import FeatureCard from "./FeatureCard";

import {
  FaRobot,
  FaMapMarkedAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

function Features() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Smart Features
        </h2>

        <p className="text-center text-gray-600 mt-5 mb-16">
          AI powered tools for smarter communities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            icon={<FaRobot className="text-blue-600" />}
            title="AI Detection"
            description="Automatically identifies issue category and severity."
          />

          <FeatureCard
            icon={<FaMapMarkedAlt className="text-green-600" />}
            title="Live Mapping"
            description="Pinpoint exact issue locations using interactive maps."
          />

          <FeatureCard
            icon={<FaChartLine className="text-orange-500" />}
            title="Analytics"
            description="Real-time dashboards to monitor city performance."
          />

          <FeatureCard
            icon={<FaUsers className="text-purple-600" />}
            title="Community"
            description="Citizens verify reports and improve transparency."
          />

        </div>

      </div>

    </section>
  );
}

export default Features;