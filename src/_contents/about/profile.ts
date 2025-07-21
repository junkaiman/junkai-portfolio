const arr = [
  {
    id: 0,
    title: "Experience",
    type: "title-time-desc",
    content: [
      {
        logo: "/images/profile/google-logo.png",
        title: "Google",
        startTime: 2025,
        time: "July 2025 - Present",
        desc: "Software Engineer",
        desc2: "-> Meridian",
        desc2Url:
          "https://developers.google.com/meridian",
        longDesc:
          `Working on google/meridian project`
      },
      {
        logo: "/images/profile/microsoft-logo-512.png",
        title: "Microsoft",
        startTime: 2024,
        time: "April 2024 - Aug 2024",
        desc: "Software Engineer Intern",
        desc2: "-> Forms Copilot",
        desc2Url:
          "https://support.microsoft.com/en-us/office/welcome-to-copilot-in-forms-6a21bfbd-21b3-4e48-946c-7603b129521c",
        longDesc:
          // "Improved quiz creation experience in Microsoft Forms by integrating and fine-tuning the LLM workflow. Enhanced frontend fluency of Copilot features by optimizing React + Redux components and reducing API calls.",
          // `Integrating 🤖 Copilot features into Microsoft Forms using React + Redux. Enhancing backend LLM workflows 🌊 in TypeScript.`,
          `Copilot in Microsoft Forms. Worked on LLM workflows and frontend components`,
      },
      {
        logo: "/images/profile/microsoft-logo-512.png",
        title: "Microsoft",
        startTime: 2022,
        time: "July 2022 - Oct 2022",
        desc: "Support Engineer Intern",
        desc2: "-> Azure Monitor",
        desc2Url: "https://azure.microsoft.com/en-us/products/monitor",
        longDesc:
          // "Support Azure Monitor services by troubleshooting customer issues and analyzing logs. Built an internal tool that enables mangers to assess team performance and workload distribution.",
          // "Troubleshoot customer issues with Azure Monitor 📈. Developed an internal tool for managers to assess team performance 📊 and workload distribution.",
          "Support for Azure Monitor services",
      },
      {
        logo: "/images/profile/brown-logo.jpeg",
        title: "Brown University Library",
        startTime: 2023,
        time: "Sept 2023 - April 2024",
        desc: "Software Engineer Intern",
        desc2: "-> BruKnow Search",
        desc2Url: "https://library.brown.edu/",
        longDesc:
          // "Revamped the frontend components of BruKnow Search 🔍 using Angular. Mitigated security vulnerabilities 🚨 in deprecated PHPv5 codebase and migrated to PHPv7.",
          "Library discovery system",
      },
    ],
  },
  {
    id: 1,
    title: "Education",
    type: "title-time-desc",
    content: [
      {
        title: "Brown University",
        time: "2023 - 2025",
        desc: "Sc.M. in Computer Science",
      },
      {
        title: "Duke University",
        time: "2019 - 2023",
        desc: "B.S. in Interdisciplinary Studies - Data Science",
      },
      {
        title: "Duke Kunshan University",
        time: "2019 - 2023",
        desc: "B.S. in Data Science",
      },
    ],
  },
  {
    id: 2,
    title: "Tools & Technologies",
    type: "list",
    content: [
      "Javascript, Typescript",
      "HTML, CSS, SASS",
      "React.ts, Next.js, Vue.js",
      "C++, Python, Java, Go, PHP",
      "pandas, numpy, matplotlib",
      "SQL, MongoDB, Redis",
      "Docker, Kubernetes, ArgoCD",
      "Hadoop, Spark, Kafka",
      // "Git, Linux, Bash, Nginx",
      // "LaTeX, Markdown, Jupyter",
      "IoT, Raspberry Pi, Arduino",
    ],
  },
  {
    id: 3,
    title: "Skills",
    type: "list",
    content: [
      "Full-stack Web Development",
      "LLM & RAG system design",
      "Prompt Engineering",
      "Data Analysis & Visualization",
      "Machine Learning & AI",
      "DevOps & Cloud Computing",
      "Creative Coding",
    ],
  },
];

export default arr;
