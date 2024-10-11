const arr = [
  ["2024-08", "💼 Job Hunting", "ikr..."],
  ["2024-07", "🏋️ Bulking Up", "Starting to hit the gym on a daily basis since this summer. And... Protein Protein Protein Protein 🥩"],
  ["2024-05", "🤖 Hi, GPT-4o", "Wow... Thanks to Microsoft and my current job... Now I can access the GPT-4o without worrying about my token usage anymore. 🤩"],
  ["2024-04", "🧑‍💻 Back to Microsoft", "So happy that I got an opportunity to intern at Microsoft again this year. Excited to work on a project that align perfectly with my interests. "],
  ["2024-03", "🇲🇽 Hola, Cancun", "Taking a short trip to Cancun during the spring break. 😎"],
  ["2023-08", "🌊 Ocean State", "Just moved to Providence, RI, the Ocean State. Enjoying its calmness and beautiful scenery."],
  ["2000-10", "👶 Born in Shandong", "The year I was born."],
  [
    "2002-01",
    "📺 Hello Computer",
    "The first time I hit on the Computer keyboard, purportedly.",
  ],
  [
    "2012-01",

    "🐍 Life is Short",
    "Hello World. At the fifth grade in primary school and I was interested in Computer Programming. So I bought the book C++ Primer Plus as the tutorial. But at that time it was too difficult to understand… So I choose to learn Python.",
  ],
  [
    "2015-01",
    "🕸 Building Website",
    "The year I started building my personal websites. Initially it was hosted on a cheap VPS using the WordPress. Later I chose the Hexo as the engine. After a long period of time, it was moved to BlogSpot. Now it is hosted on VPS using the GoHugo as the engine. Cool!",
  ],
  [
    "2015-04",
    "🥽 A Glimpse on Virtual Reality",
    "Google released the Cardboard VR viewer this year. I bought one. Oh wait… is this the future!?",
  ],
  [
    "2016-04",
    "🎹 Intro to Electronic Music",
    "The year I started listening to many Vaporwave & Hip-hop & Rap music. Also the year when Trap music becomes popular in China. Then I started learning to produce some (experimental) music on my own using Ableton and FL Studio.",
  ],
  [
    "2018-08",
    "🥉 CASTIC in Chongqing",
    "Great experience! Meet with so many high school innovators from all over the world. But such a pity that I didn’t have a time to take a trip in Chongqing City.",
  ],
  [
    "2019-08",
    "🎉 Started at Duke Kunshan University",
    "Received the acceptance letter from DKU. Love this place so much!",
  ],
  [
    "2019-06",
    "✍️ Survived from Gaokao",
    "Survived from the most competitive exam in China. Also ended the most boring, stressed, and anxious period of time in my life :(",
  ],
  [
    "2020-05",
    "💡 Gallinula is Born",
    "Planning and building the Gallinula platform with the co-founders. Prototyping & building things in two months! Cool!",
  ],
  [
    "2020-01",
    "👨‍🎓 Zoom University at Home",
    "The year when Covid-19 pandemic starts. Attended Zoom University at home…(But, hey, this saves me more time to do other stuffs) Luckily China controls everything down before the beginning of Fall semester.",
  ],
  [
    "2020-01",
    "🚘 Driver’s License",
    "Got my driver’s license at the beginning of the year. But never drove the car out because of the COVID lockdowns.",
  ],
  [
    "2021-05",
    "🔍 Research Assistant",
    "Assisted Prof. Shixin Xu with his two research projects.",
  ],
  [
    "2021-06",
    "👨‍💻 Internship in Guangzhou",
    "Assisted building a User Content Recommendation system. Really enjoy the food there. Eat 早茶 every weekend.",
  ],
  [
    "2022-02",
    "🕹 Interdisciplinary DL Research",
    "Researching on some interdisciplinary Deep Learning projects including the Styled Font Generator.",
  ],
  [
    "2022-02",
    "🌘 Mathematical Contest in Modeling",
    "Attended this year’s MCM. McDelivery(🍔) in two successive days. All-nighter(🐼) in three successive days. And finally a successful award…",
  ],
  [
    "2022-04",
    "🧪 Locked-down in DKU campus",
    "Taken into the Closed-loop operation. Got Covid tests every single day throughout the month.",
  ],
  [
    "2022-05",
    "🥳 Congrats to DKU Class of 2022",
    "Celebrating the graduation of DKU’s inaugural class of undergrads. Congrats to them!",
  ],
  [
    "2022-06",
    "✅ Paper got accepted!",
    "My research project paper co-authored with Yufan got accepted by the ACM conference. Great!",
  ],
  [
    "2022-06",
    "🛫 Back to Guangzhou again",
    "Doing a short-term project in Guangzhou. Also got the chance to explore this city once again & re-united with DKU classmates by luck that many of them are processing the U.S. visa here this year.",
  ],
  [
    "2022-07",
    "💼 Learning at Microsoft",
    "Starting my internship at Microsoft. Learned a lot of Azure related knowledge in the first month.",
  ],
  [
    "2022-08",
    "🥷 Hacking ‘n Learning",
    "Working on a 2022 Microsoft Hackathon Project.",
  ],
  [
    "2022-08",
    "🏫 Grad School List",
    "Curating on my graduate school list, and preparing for TOEFL & GRE. Thank You, Starbucks☕️, for the Iced Caffè Americano. Btw, I appreciate those free giveaway desserts, too.",
  ],
  [
    "2022-09",
    "🗺️ Interning but kept Exploring",
    "Exploring Shanghai! The Bund, Xintiandi, West Bund, Jing’an Temple, Nanjing Road, …",
  ],
  [
    "2022-09",
    "🧑‍💻 Google Dev' Summit",
    "Attended the Google Developers' Summit 2022. Meet some people, got some swags, learned some new stuffs, and got many inspirations.",
  ],
  [
    "2022-10",
    "🖼️ Shanghai aftermath",
    "Zero-covid policy makes traveling to Shanghai difficult. But I went there anyway for an Art Gallery (before it was shut down because of stricter covid regulations)",
  ],
  ["2022-11", "⬜️📄", "“ It's my duty. “"],
  [
    "2022-12",
    "💉 Vaxxed & Boosted",
    "Finally China gave up its zero-covid policy. And I got another dose of vaccine. Ready for the reopening!",
  ],
  [
    "2023-01",
    "🎓 A new project",
    "Got a little bit bored over the holiday. So I started working on the a new project Gallinula Course.",
  ],
  [
    "2023-02",
    "📖 Writing a Book",
    "I am writing an eBook about “How to make independent apps on your own”. See this in my LinkedIn Post. Sign up here.",
  ],
  [
    "2023-03",
    "🛫 Traveling",
    "And enjoy the last 3 month of my undergraduate life.",
  ],
  [
    "2023-04",
    "🎉 Congrats & Thank You Letters",
    "Got acceptance letters from 🧢Duke, 🐕‍🦺CMU, 🟪UW, 🍁UofT, 🚩Cornell, 🐻Brown. Rejected by Harvard, Stanford, UPenn, Cambridge.",
  ],
  [
    "2023-05",
    "🎓 Graduation",
    "Today I graduated! Heading to 🐻 Brown University for my Master’s degree in Computer Science.",
  ],
];

export default arr;