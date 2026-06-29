import { motion } from "framer-motion";

function StatsCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-2 text-gray-600">
        {label}
      </p>
    </motion.div>
  );
}

export default StatsCard;