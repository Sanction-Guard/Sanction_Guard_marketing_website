
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Pamali Rodrigo", position: "Marketing Specialist ", image: "pamali.jpeg" },
  { name: "Harini Nandasena", position: "Frontend Developer", image: "harini.jpeg" },
  { name: "Kisara Herath", position: "Backend Developer", image: "kisara.jpg" },
  { name: "Chavishka Silva", position: "DevOps Engineer", image: "chavishka.jpg" },
  { name: "Lakindu Karunanayaka", position: "UI/UX Specialist", image: "lakindu.png" },
  { name: "Kithmi Hettiarchchi", position: "Software Architect ", image: "kithmi.png" }
];
const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 mt-18">
      {/* Section with Hover Effect */}
      <section className="w-full flex flex-col items-center text-center px-4 md:px-10">
        <div className="relative inline-flex p-[1px] rounded-lg overflow-hidden group transition duration-500 mt-20">
          {/* Hover Gradient Animation */}
          <span
            className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#fafafa_50%,#020617_100%)] 
                          opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] 
                          transition-opacity duration-500"
          ></span>
          {/* Title Content */}
          <span
            className="inline-flex h-full w-full items-center justify-center rounded-lg bg-black md:px-10 py-4 md:py-6 text-2xl md:text-4xl font-bold text-white backdrop-blur-3xl text-center relative transition-all duration-500"
          >
            Empowering Compliance,<br /> Strengthening Security
          </span>
        </div>

        {/* Centered Paragraph Below */}
        <span className="mt-6 max-w-3xl text-center text-slate-300 text-lg leading-relaxed px-4">
          At Sanction Guard, we believe that compliance should be seamless, accurate, and efficient. 
          Our mission is to provide cutting-edge sanctions screening solutions that help businesses stay 
          ahead of evolving regulatory requirements while reducing operational risks.
          <br /><br />
          With a commitment to innovation and security, we leverage AI-driven technology to deliver 
          real-time, precise, and reliable screening against global sanction lists. Whether you’re a financial 
          institution, fintech company, or enterprise, Sanction Guard ensures risk-free transactions and full 
          compliance with international regulations.
        </span>
      </section>

      <div className="mt-20 flex justify-center px-4">
  <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl p-6 bg-[#1E293B] border border-[#27344a] rounded-lg space-y-4 text-white mx-auto transition duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500 mb-20">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-5"></div>
      <div className="flex items-center gap-4 text-slate-400 hover:text-sky-400">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>

    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Our Mission</h1>
      <p className="text-slate-400 text-base sm:text-lg md:text-xl">
        Our mission is to empower organizations with real-time sanctions screening,
        reducing compliance burdens while enhancing security. We leverage AI-driven
        insights to protect businesses from regulatory risks and financial crimes.
      </p>
    </div>

    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-10">Our Vision</h1>
      <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-4">
        To be the leading global provider of sanctions compliance technology, offering businesses
        a secure, automated, and intelligent approach to regulatory risk management.
      </p>
    </div>

    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-10">Our Core Values</h1>
      <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-4 space-y-2">
        🔹 Accuracy & Reliability – Delivering precise and trustworthy screening results.<br />
        🔹 Security & Compliance – Strengthening organizations against financial crime.<br />
        🔹 Innovation & Technology – Leveraging AI and machine learning for smarter compliance.<br />
        🔹 User-Centric Approach – Creating an intuitive and accessible compliance solution.<br />
        🔹 Integrity & Transparency – Upholding ethical and responsible business practices.<br />
        🔹 Collaboration & Excellence – Partnering with businesses to ensure a safer financial ecosystem.<br />
      </p>
    </div>
  </div>
</div>

<h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed px-4 sm:px-6 md:px-10 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto my-12">
  Join Us in Redefining Compliance <br /><br />
  At Sanction Guard, we are dedicated to building a safer financial world by
  providing organizations with the most advanced, efficient, and secure
  sanctions screening solution.
  <br /><br />
  📩 Get in touch with us to learn how Sanction Guard can help protect your business!
  <br /><br />
  <span className="text-sky-400 font-medium">
    #SanctionGuard #Compliance #RiskManagement #SanctionsScreening #FinancialSecurity
  </span>
</h2>


<h1 className="mb-20 text-4xl font-bold text-white text-center sm:text-5xl md:text-6xl">Meet Our Team</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-20">

  {teamMembers.map((member,index) => (
      
        <div
          key={index}
          className="product-card w-full sm:w-[280px] md:w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
          >
            <div className="flex gap-1">
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1"
                fill="none"
                viewBox="0 0 24 24"
                className="fill-gray-300 rotate-[24deg]"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div
            className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
          ></div>
          <div className="para uppercase text-center leading-none z-40">
            <p className="text-black font-semibold text-xs font-serif">{member.name}</p>
            <p className="font-bold text-xl tracking-wider text-gray-500">{member.position}</p>
          </div>
          <div className="w-[180px] h-[180px] bg-gray-100 z-40 overflow-hidden rounded-full ">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>

        </div>
          ))}
    </div>

      </div>
  );
};

export default AboutUs;
