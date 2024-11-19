
import { TimelineDemo } from "../Components/Timeline";
import Navbar from "../Components/Navbar";

const Achievement = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My Achievements
          </h2>
          <TimelineDemo />
        </div>
      </div>
    </>
  );
};

export default Achievement;
