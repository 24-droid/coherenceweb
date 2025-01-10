import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide bg-highlight_background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-20 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="w-full bg-highlight_background p-8 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center w-full ">
            About Persperence Envision Pvt Ltd.
          </h1>
          <p className="text-lg text-center leading-relaxed">
            Learn more about our journey, achievements, and future aspirations.
          </p>
        </section>

        {/* Our Foundation Story Section */}
        <section className="w-full bg-primary text-white p-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center w-full">
            Our Foundation Story
          </h2>
          <p className="text-lg leading-relaxed">
            Persperence Envision Pvt Ltd. was founded in 2010 with the vision of
            empowering communities through innovative solutions. What started as
            a small team of like-minded individuals has grown into a global
            organization dedicated to solving real-world challenges. Our journey
            began with a simple mission: to make a difference, one step at a
            time.
          </p>
          <button className="bg-secondary hover:bg-Yellow hover:text-black w-40 font-bold py-2 px-6 rounded-lg hover:shadow-lg
           " onClick={()=>{navigate("/employee")}}>
            Know More
          </button>
          
        </section>

        {/* Achievements and Milestones Section */}
        <section className="w-full bg-terinary p-8 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-important_text text-center w-full">
            Achievements and Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Global Expansion",
                description:
                  "Expanded to over 15 countries with active programs impacting millions of lives.",
                icon: "🌍",
              },
              {
                title: "Innovation Award",
                description:
                  "Recognized with the Global Innovation Award in 2018 for our breakthrough projects.",
                icon: "🏆",
              },
              {
                title: "Key Partnerships",
                description:
                  "Partnered with leading organizations like the United Nations and WHO.",
                icon: "🤝",
              },
              {
                title: "Youth Empowerment",
                description:
                  "Launched the 'Youth Empowerment Program' in 2021, benefiting 50,000+ young individuals.",
                icon: "🌟",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 items-center"
              >
                <div className="text-5xl">{achievement.icon}</div>
                <h3 className="text-2xl font-semibold text-important_text">
                  {achievement.title}
                </h3>
                <p className="text-lg text-gray-700 text-center">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Programs and Future Plans Section */}
        <section className="w-full bg-white p-8 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-important_text text-center w-full">
            Current Programs and Future Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Education for All",
                description:
                  "Providing quality education to underprivileged children in rural areas.",
                imgSrc:
                  "https://via.placeholder.com/400x300?text=Education+Program",
              },
              {
                title: "Green Future Initiative",
                description:
                  "Promoting renewable energy and sustainable practices globally.",
                imgSrc: "https://via.placeholder.com/400x300?text=Green+Future",
              },
              {
                title: "Health for Everyone",
                description:
                  "Delivering affordable healthcare services to remote communities.",
                imgSrc: "https://via.placeholder.com/400x300?text=Healthcare",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-terinary shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={program.imgSrc}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-important_text">
                    {program.title}
                  </h3>
                  <p className="text-lg text-gray-700">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Looking ahead, our future plans include expanding our reach to
            underserved regions, leveraging technology to enhance our impact,
            and launching new initiatives aimed at fostering global
            collaboration for a better tomorrow.
          </p>
        </section>

        {/* Call to Action */}
        <section className="w-full bg-important_text text-white p-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold ">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-center leading-relaxed">
            Be a part of our journey and help us create a brighter future for
            everyone.
          </p>
          <button className="bg-secondary hover:bg-Yellow hover:text-black font-bold py-2 px-6 rounded-lg hover:shadow-lg
           " onClick={()=>{navigate("/contact")}}>
            Contact Us
          </button>
        </section>
      </main>
      <Footer />
    </section>
  );
}
