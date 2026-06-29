import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
    >
      <div className="text-5xl mb-5">{icon}</div>

      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;