import StatsCard from "./StatsCard";

function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          Trusted by Communities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <StatsCard
            number="5000+"
            label="Issues Reported"
          />

          <StatsCard
            number="120+"
            label="Communities"
          />

          <StatsCard
            number="96%"
            label="AI Accuracy"
          />

          <StatsCard
            number="24/7"
            label="AI Monitoring"
          />

        </div>

      </div>
    </section>
  );
}

export default StatsSection;