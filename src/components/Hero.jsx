import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaRobot, FaShieldAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            🚀 AI Powered Civic Platform
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">

            Report.

            <br />

            Track.

            <br />

            Improve Your City.

          </h1>

          <p className="text-gray-600 text-lg mt-6">

            Empower your community with AI-powered issue reporting,
            smart verification, and real-time tracking.

          </p>

          <div className="flex gap-5 mt-8">

            <button className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition">

              Report Issue

            </button>

            <button className="border border-blue-600 px-7 py-3 rounded-xl hover:bg-blue-50">

              Explore

            </button>

          </div>

          <div className="flex gap-8 mt-10">

            <div className="flex items-center gap-2">

              <FaRobot className="text-blue-600" />

              AI Detection

            </div>

            <div className="flex items-center gap-2">

              <FaMapMarkedAlt className="text-green-600" />

              Live Mapping

            </div>

            <div className="flex items-center gap-2">

              <FaShieldAlt className="text-orange-500" />

              Verified Reports

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="bg-white shadow-2xl rounded-3xl p-8 w-[380px]">

            <h2 className="text-2xl font-bold mb-6">

              AI Issue Analysis

            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">

                <span>Issue</span>

                <span className="font-semibold">

                  Pothole

                </span>

              </div>

              <div className="flex justify-between">

                <span>Priority</span>

                <span className="text-red-600 font-semibold">

                  High

                </span>

              </div>

              <div className="flex justify-between">

                <span>Department</span>

                <span>

                  PWD

                </span>

              </div>

              <div className="flex justify-between">

                <span>Status</span>

                <span className="text-green-600">

                  Under Review

                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;