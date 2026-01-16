const data = [
  {
    school: "School of Infocomm",
    institution: "Republic Polytechnic",
    diplomas: [
      {
        id: "dit",
        name: "Diploma in Information Technology",
        description:
          "Focuses on software development, web technologies, and IT fundamentals.",
        modules: [
          {
            id: "c346",
            code: "C346",
            name: "Web Development",
            description:
              "Learn frontend and backend web development using modern technologies."
          },
          {
            id: "c227",
            code: "C227",
            name: "Operating Systems & Networking",
            description:
              "Covers OS concepts, networking fundamentals, and system administration."
          },
          {
            id: "c219",
            code: "C219",
            name: "User Experience Design",
            description:
              "Focuses on UX research, wireframing, prototyping, and usability testing."
          }
        ]
      },
      {
        id: "dipcsf",
        name: "Diploma in Cybersecurity & Digital Forensics",
        description:
          "Specialises in cybersecurity, ethical hacking, and digital investigations.",
        modules: [
          {
            id: "c369",
            code: "C369",
            name: "Cyber Threat Intelligence",
            description: "Learn how to analyse cyber threats and vulnerabilities."
          },
          {
            id: "c372",
            code: "C372",
            name: "Digital Forensics",
            description:
              "Covers evidence collection, investigation techniques, and forensic tools."
          },
          {
            id: "c371",
            code: "C371",
            name: "Ethical Hacking",
            description:
              "Hands-on penetration testing and security assessment techniques."
          }
        ]
      },
      {
        id: "dai",
        name: "Diploma in Artificial Intelligence",
        description: "Focuses on AI, machine learning, and data-driven applications.",
        modules: [
          {
            id: "c348",
            code: "C348",
            name: "AI & Machine Learning",
            description:
              "Introduction to AI concepts, ML algorithms, and model training."
          },
          {
            id: "c349",
            code: "C349",
            name: "Data Analytics",
            description: "Learn how to analyse, visualise, and interpret data."
          },
          {
            id: "c350",
            code: "C350",
            name: "Applied AI Solutions",
            description: "Build real-world AI applications using industry tools."
          }
        ]
      }
    ]
  }
];

export default data;

export const getAllDiplomas = () => data[0].diplomas;

export const getAllDiplomaIdAndNames = () =>
  data[0].diplomas.map((d) => ({ id: d.id, name: d.name, description: d.description }));

export const getDiplomaById = (diplomaId) =>
  data[0].diplomas.find((d) => d.id === diplomaId) || null;

export const getModuleById = (diplomaId, moduleId) => {
  const diploma = getDiplomaById(diplomaId);
  if (!diploma) return null;
  return diploma.modules.find((m) => m.id === moduleId) || null;
};

export const getAllModules = () =>
  data[0].diplomas.flatMap((d) =>
    d.modules.map((m) => ({
      ...m,
      diplomaId: d.id,
      diplomaName: d.name
    }))
  );
