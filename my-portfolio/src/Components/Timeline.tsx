
import { Timeline } from "../Components/ui/timeline";
import illu1 from "../assets/illu1.jpg";
import illu2 from "../assets/illu2.jpg";
import illu3 from "../assets/illu3.jpg";
import illu4 from "../assets/illu4.jpg";
import ste1 from "../assets/ste1.jpg";
import ste2 from "../assets/ste2.jpg";
import ste3 from "../assets/ste3.jpg";
import ste4 from "../assets/ste4.jpg";
import sent1 from "../assets/sent1.png";
import sent2 from "../assets/sent2.png";
import sent3 from "../assets/sent3.jpg";
import sent4 from "../assets/sent4.jpg";
export function TimelineDemo() {
  const data = [
    {
      title: "🏆Illuminati Hackathon 2024 Winner",
      content: (
        <div>
          <p className="text-white dark:text-gray-100 text-lg md:text-xl font-semibold leading-relaxed mb-6 md:mb-8">
            The Illuminati Hackathon 2024 is an annual intercollegiate competition focused on innovation. This year’s theme, local governance, inspired our team to create a logistics management software for local government. Our solution featured real-time resource tracking, automated scheduling, and data analytics to improve operational efficiency and transparency, aligning perfectly with the theme.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={illu1}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={illu2}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={illu3}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={illu4}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "🏆Stellar Indiathon 2024 Winner",
      content: (
        <div>
          <p className="text-white dark:text-gray-100 text-lg md:text-xl font-semibold leading-relaxed mb-6 md:mb-8">
            The Stellar Indiathon 2024 was a blockchain-focused hackathon for builders. Our team developed a fandom virtual world, a gamified platform where users can purchase land, host events, and create interactive experiences, leveraging Stellar’s blockchain for secure and seamless transactions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ste1}
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={ste2}
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={ste3}
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={ste4}
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Frontend engineer at Sentio",
      content: (
        <div>
          <p className="text-white dark:text-gray-100 text-lg md:text-xl font-semibold leading-relaxed mb-6 md:mb-8">
            Sentio is a startup in the Arweave ecosystem, specializing in security, code auditing, and transaction monitoring on the AO hyper-parallel computer built on the Arweave network. I was introduced to Sentio's founder during a hackathon, and after connecting, I joined the team as a Frontend Engineer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={sent1}
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={sent2}
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={sent3}
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={sent4}
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
