// import Navbar from "../components/navbar/navbar";
// import Footer from "../components/navbar/footer";

// export default function Employee() {
//   const leadershipTeam = [
//     {
//       name: "John Doe",
//       designation: "Chief Executive Officer (CEO)",
//       description:
//         "John is an accomplished leader with over 20 years of experience in managing global organizations.",
//       image: "https://via.placeholder.com/400x200?text=John+Doe",
//     },
//     {
//       name: "Jane Smith",
//       designation: "Chief Technology Officer (CTO)",
//       description:
//         "Jane oversees all technical aspects of the company, driving innovation and digital transformation.",
//       image: "https://via.placeholder.com/400x200?text=Jane+Smith",
//     },
//   ];

//   const contentTeam = [
//     {
//       name: "Sarah Johnson",
//       designation: "Content Manager",
//       description:
//         "Sarah creates engaging content strategies to build a strong global presence.",
//       image: "https://via.placeholder.com/200x200?text=Sarah+Johnson",
//     },
//     {
//       name: "Emily Brown",
//       designation: "Content Specialist",
//       description:
//         "Emily ensures high-quality, impactful content tailored to our audience.",
//       image: "https://via.placeholder.com/200x200?text=Emily+Brown",
//     },
//   ];

//   const technicalTeam = [
//     {
//       name: "Michael Green",
//       designation: "Lead Developer",
//       description:
//         "Michael spearheads our development projects with cutting-edge technologies.",
//       image: "https://via.placeholder.com/200x200?text=Michael+Green",
//     },
//     {
//       name: "Anna White",
//       designation: "Software Engineer",
//       description:
//         "Anna specializes in delivering robust software solutions for our clients.",
//       image: "https://via.placeholder.com/200x200?text=Anna+White",
//     },
//   ];

//   return (
//     <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide bg-highlight_background">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="w-full mt-20 flex flex-col items-center gap-6">
//         {/* Page Header */}
//         <section className="w-full bg-important_text text-white p-8 flex flex-col items-center gap-4">
//           <h1 className="text-4xl font-bold">Our Team</h1>
//           <p className="text-lg text-center leading-relaxed">
//             Meet the passionate individuals driving our mission forward.
//           </p>
//         </section>

//         {/* Leadership Team Section */}
//         <section className="w-full bg-primary p-8 flex flex-col gap-6 text-white">
//           <h2 className="text-3xl font-bold w-full text-center">
//             Leadership Team
//           </h2>
//           {leadershipTeam.map((leader, index) => (
//             <div
//               key={index}
//               className="w-full bg-highlight_background shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6"
//             >
//               <img
//                 src={leader.image}
//                 alt={leader.name}
//                 className="w-full md:w-1/3 h-56 rounded-lg object-cover shadow-lg"
//               />
//               <div className="flex flex-col items-start gap-4">
//                 <h3 className="text-2xl font-semibold text-important_text">
//                   {leader.name}
//                 </h3>
//                 <p className="text-lg font-semibold text-secondary">
//                   {leader.designation}
//                 </p>
//                 <p className="text-sm text-gray-800">{leader.description}</p>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* Content Team Section */}
//         <section className="w-full bg-white p-8 flex flex-col gap-6">
//           <h2 className="text-3xl font-bold text-important_text w-full text-center">
//             Content Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {contentTeam.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-highlight_background shadow-md rounded-lg p-6 flex flex-col items-center gap-4"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full object-cover shadow-lg"
//                 />
//                 <h3 className="text-2xl font-semibold text-important_text">
//                   {member.name}
//                 </h3>
//                 <p className="text-lg font-semibold text-secondary">
//                   {member.designation}
//                 </p>
//                 <p className="text-sm text-gray-700 text-center">
//                   {member.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Technical Team Section */}
//         <section className="w-full bg-terinary p-8 flex flex-col gap-6">
//           <h2 className="text-3xl font-bold text-important_text w-full text-center">
//             Technical Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {technicalTeam.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full object-cover shadow-lg"
//                 />
//                 <h3 className="text-2xl font-semibold text-important_text">
//                   {member.name}
//                 </h3>
//                 <p className="text-lg font-semibold text-secondary">
//                   {member.designation}
//                 </p>
//                 <p className="text-sm text-gray-700 text-center">
//                   {member.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

export default function Employee() {
  const leadershipTeam = [
    {
      name: "John Doe",
      designation: "Chief Executive Officer (CEO)",
      description:
        "John is an accomplished leader with over 20 years of experience in managing global organizations.",
      image: "https://via.placeholder.com/400x200?text=John+Doe",
    },
    {
      name: "Jane Smith",
      designation: "Chief Technology Officer (CTO)",
      description:
        "Jane oversees all technical aspects of the company, driving innovation and digital transformation.",
      image: "https://via.placeholder.com/400x200?text=Jane+Smith",
    },
  ];

  const contentTeam = [
    {
      name: "Sarah Johnson",
      designation: "Content Manager",
      description:
        "Sarah creates engaging content strategies to build a strong global presence.",
      image: "https://via.placeholder.com/200x200?text=Sarah+Johnson",
    },
    {
      name: "Emily Brown",
      designation: "Content Specialist",
      description:
        "Emily ensures high-quality, impactful content tailored to our audience.",
      image: "https://via.placeholder.com/200x200?text=Emily+Brown",
    },
  ];

  const technicalTeam = [
    {
      name: "Michael Green",
      designation: "Lead Developer",
      description:
        "Michael spearheads our development projects with cutting-edge technologies.",
      image: "https://via.placeholder.com/200x200?text=Michael+Green",
    },
    {
      name: "Anna White",
      designation: "Software Engineer",
      description:
        "Anna specializes in delivering robust software solutions for our clients.",
      image: "https://via.placeholder.com/200x200?text=Anna+White",
    },
  ];

  const renderTeamSection = (title, team) => (
    <section className="w-full p-8 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-important_text w-full text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-important_text">
              {member.name}
            </h3>
            <p className="text-lg font-semibold text-secondary">
              {member.designation}
            </p>
            <p className="text-sm text-gray-700 text-center">
              {member.description}
            </p>
            <Link to={`/employee/${encodeURIComponent(member.name)}`}>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 overflow-x-hidden bg-highlight_background">
      <Navbar />
      <main className="w-full mt-20 flex flex-col items-center gap-6">
        <section className="w-full bg-important_text text-white p-8 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="text-lg text-center leading-relaxed">
            Meet the passionate individuals driving our mission forward.
          </p>
        </section>
        {renderTeamSection("Leadership Team", leadershipTeam)}
        {renderTeamSection("Content Team", contentTeam)}
        {renderTeamSection("Technical Team", technicalTeam)}
      </main>
      <Footer />
    </section>
  );
}

