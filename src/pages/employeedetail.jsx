import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

const employees = {
  "John Doe": {
    name: "John Doe",
    designation: "Chief Executive Officer (CEO)",
    description:
      "John is an accomplished leader with over 20 years of experience in managing global organizations.",
    image: "https://via.placeholder.com/400x200?text=John+Doe",
    bio: "John has spearheaded multiple successful ventures across various industries and believes in fostering innovation and growth.",
  },
  "Jane Smith": {
    name: "Jane Smith",
    designation: "Chief Technology Officer (CTO)",
    description:
      "Jane oversees all technical aspects of the company, driving innovation and digital transformation.",
    image: "https://via.placeholder.com/400x200?text=Jane+Smith",
    bio: "Jane is passionate about leveraging technology to solve complex problems, with expertise in AI, cloud computing, and blockchain.",
  },
  "Sarah Johnson":{
    name: "Sarah Johnson",
    designation: "Content Manager",
    description:
      "Sarah creates engaging content strategies to build a strong global presence.",
    image: "https://via.placeholder.com/200x200?text=Sarah+Johnson",
  },
  "Emily Brown":{
    name: "Emily Brown",
    designation: "Content Specialist",
    description:
      "Emily ensures high-quality, impactful content tailored to our audience.",
    image: "https://via.placeholder.com/200x200?text=Emily+Brown",
  },
  "Michael Green":{
    name: "Michael Green",
    designation: "Lead Developer",
    description:
      "Michael spearheads our development projects with cutting-edge technologies.",
    image: "https://via.placeholder.com/200x200?text=Michael+Green",
  },
  "Anna White":{
    name: "Anna White",
    designation: "Software Engineer",
    description:
      "Anna specializes in delivering robust software solutions for our clients.",
    image: "https://via.placeholder.com/200x200?text=Anna+White",
  },
};

export default function EmployeeDetail() {
  const { name } = useParams();
  const employee = employees[name];

  if (!employee) {
    return <h1 className="text-center mt-20">Employee not found</h1>;
  }

  return (
    <>
    <section className="w-full h-full flex flex-col items-center gap-8 bg-highlight_background">
      <Navbar />
      <main className="w-full mt-20 flex flex-col items-center gap-6 px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-64 h-64 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-important_text">
              {employee.name}
            </h1>
            <p className="text-xl font-semibold text-secondary">
              {employee.designation}
            </p>
            <p className="text-gray-700">{employee.description}</p>
            <p className="text-gray-600">{employee.bio}</p>
          </div>
        </div>
      </main>
    </section>
    <Footer />
    </>
  );
}
