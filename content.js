/* =====================================================================
   content.js — the ONLY file you edit to update the site.
   Edit on github.com (pencil icon) → Commit → live in about a minute.

   - Photo: put your headshot at images/headshot.jpg (square, ~600px).
     Until then the site shows your initials.
   - Empty arrays ([]) hide their section.
   ===================================================================== */

window.SITE = {
  name: "Abhishek Bhaduri",
  initials: "AB",
  photo: "images/headshot.jpg",
  headline: "I build AI agents that enterprises trust to act on their own.",
  role: "Consultant: AI Product Strategy & Operations, Dell Technologies",
  // Set to "" to hide. Shown under the buttons in the hero.
  openTo: "Open to conversations about Principal and Group PM roles in agentic and on-device AI.",
  location: "Austin, TX",
  email: "abhishekuncmba@gmail.com",
  resumeUrl: "", // e.g. "slides/Abhishek-Bhaduri-Resume.pdf". Empty = link to LinkedIn.
  linkedin: "https://www.linkedin.com/in/abhishekbhaduri/",
  substack: "https://abhishekec6.substack.com",

  // The 10-second recruiter scan
  glance: [
    { k: "Now", v: "Consultant: AI Product Strategy & Operations at Dell, working on agentic AI for on-device self-healing" },
    { k: "Focus", v: "Agentic systems, human-in-the-loop governance, on-device AI, enterprise fleet management" },
    { k: "Previously", v: "Swiggy CTO office, Chief of Staff at Belong.co, Mercer consulting, VC fellow at Primordial" },
    { k: "Founder", v: "Apps2eaze mobile studio and Bunk Wisely campus super-app, Manipal. Published research indexed in IEEE Xplore" },
    { k: "Education", v: "MBA, UNC Kenan-Flagler (2024) with an ISB exchange; engineering at Manipal Institute of Technology" },
    { k: "Based in", v: "Austin, TX. Roots in Bengaluru and Kolkata" }
  ],

  // The chip in the hero: one block per chapter. size: l, m, s, w
  chapters: [
    { org: "Dell Technologies", title: "Consultant: AI Product Strategy & Operations", years: "", size: "l", active: true,
      body: "Agentic AI for on-device self-healing, and on-device AI work with Intel, AMD and Qualcomm." },
    { org: "Swiggy", title: "CTO office", years: "", size: "m",
      body: "Applied AI inside one of India's largest consumer platforms: voice AI, computer vision and chatbots." },
    { org: "UNC Kenan-Flagler", title: "MBA, 2024", years: "2022 – 2024", size: "m",
      body: "Full-time MBA with an exchange at ISB Hyderabad and Mohali." },
    { org: "Belong.co", title: "Chief of Staff", years: "", size: "s",
      body: "Ran the operating cadence of a fast-growing startup alongside the founders." },
    { org: "Primordial", title: "VC fellow", years: "", size: "s", caseId: "venture",
      body: "Pre-seed fund in Durham, NC. Sourcing and diligence on early software startups." },
    { org: "Mercer", title: "Consulting", years: "", size: "s",
      body: "Structured problem solving for large clients. Where I learned to write the one-page answer." },
    { org: "Apps2eaze + Bunk Wisely", title: "Founder, Manipal", years: "", size: "w", caseId: "founder",
      body: "Where it started: a mobile app studio and a campus super-app for Manipal students." }
  ],

  /* Case studies. The first one is featured with a diagram. */
  cases: [
    {
      id: "aqua",
      org: "Side project, open source",
      title: "Project Aqua",
      oneLine: "A local-first agent that watches chats and websites and phones you when something time-sensitive opens up.",
      tags: ["Agents", "Local LLM", "Ollama", "Alerting"],
      role: "Solo builder.",
      problem: "Scarce slots and appointments open and close within minutes. Refreshing pages all day is not a plan.",
      approach: [
        "Monitors Telegram chats and websites; keyword filters run first, then a small local model (qwen2.5:3b on Ollama) decides what matters. Chosen for speed over raw capability.",
        "Tiered alerts: email for routine hits, a phone call through Twilio or Plivo for urgent ones.",
        "Built to run unattended: auto-restart and an external heartbeat so it tells you when it is down."
      ],
      outcome: ["Open-sourced on GitHub, with a write-up on Substack for PM and exec readers."],
      learned: "A small model that answers in a second beats a large one that answers in ten when the job is triage."
    },
    {
      id: "silicon",
      org: "Dell Technologies",
      title: "On-device AI with silicon partners",
      oneLine: "Deciding which AI work belongs on the laptop's NPU, and building it with Intel, AMD and Qualcomm.",
      tags: ["On-device AI", "Small language models", "Partnerships"],
      role: "Product lead for AI PC and partner engagements.",
      problem: "Every chipmaker ships an NPU, but enterprises won't pay for AI that only demos well. The question is which jobs actually get better, cheaper or more private when they run locally.",
      approach: [
        "Picked workloads where local inference wins on latency, cost or data residency.",
        "Evaluated small language models against cloud models on the trade-offs that matter for a fleet: footprint, battery, accuracy, update path.",
        "Ran joint roadmaps with silicon partners so features land with the hardware that can run them."
      ],
      learned: "On-device AI sells when it removes a cost or a risk, not when it adds a feature. I wrote about this in my piece on small language models."
    },
    {
      id: "pm-agents",
      org: "Personal workflow",
      title: "Running product management on agents",
      oneLine: "My own PM stack: agents that summarize, file and sync the work so I can spend time with customers.",
      tags: ["Agents", "MCP", "Developer tools"],
      role: "Builder and daily user.",
      problem: "A platform PM spends hours each week moving information between meetings, specs and the tracker.",
      approach: [
        "A tracker agent posts a daily summary, turns meeting notes into ticket updates, and keeps the spec and the backlog in sync.",
        "A learnings agent condenses product behaviour into an executive summary with drill-downs.",
        "Built on connectors (MCP) to the tools the team already uses, so nothing needs a new login."
      ],
      learned: "The fastest way to build judgment about agents is to depend on one every day."
    },
    {
      id: "founder",
      org: "Founder, Manipal",
      title: "Apps2eaze, Bunk Wisely and early research",
      oneLine: "A mobile app studio, a campus super-app, and a published paper, all before graduating.",
      tags: ["Mobile", "Zero to one", "Founder", "Research"],
      role: "Founder of Apps2eaze and co-author of a conference paper indexed in IEEE Xplore.",
      problem: "Campus life ran on scattered notices, spreadsheets and group chats, and public notice boards everywhere still needed someone to walk up and pin paper.",
      approach: [
        "Built Bunk Wisely as one app for the student day, through my studio Apps2eaze.",
        "Co-authored \"Smart Notice Board\" (2013): a low-cost board that updates over SMS, so stations, colleges and banks can change notices remotely.",
        "The student app work was covered by Bangalore Mirror."
      ],
      outcome: [
        "Paper presented at CRT 2013 and published through the IET Digital Library and IEEE Xplore.",
        "Press coverage in Bangalore Mirror."
      ],
      learned: "Shipping something people use daily teaches more than any framework.",
      links: [
        { label: "Read the paper", url: "https://ieeexplore.ieee.org/document/6851559/" },
        { label: "Bangalore Mirror article", url: "https://bangaloremirror.indiatimes.com/news/state/appy-world-for-these-student-entrepreneurs/articleshow/21217643.cms" }
      ]
    }
  ],

  venture: {
    firm: "Primordial",
    url: "https://primordial.io",
    blurb: "Primordial is a Durham, North Carolina fund founded in 2023 by Joe Colopy and Jenn Summe. It backs pre-seed and seed software startups in the Research Triangle.",
    role: "Venture fellow",
    did: [
      "Sourced and screened early-stage software startups from the Research Triangle.",
      "Diligence on market, team and product for pre-seed and seed deals."
    ],
    // Your investment lens, drawn from your own writing
    lens: [
      { t: "Follow the compute", d: "For any AI company, ask who funded the compute and who pays for the output. Chipmakers increasingly fund their own customers." },
      { t: "Open weights are distribution", d: "Open releases win developers. The money comes from hosting, licensing and compute sold to enterprise and sovereign buyers." },
      { t: "Pipes reprice faster than models", d: "Marketplaces and routers are model-neutral, see usage across every model, and own the developer, so they earn the premium." },
      { t: "Small models pay the bills", d: "Small language models at the edge cut inference cost and latency, which is where enterprise ROI shows up first." },
      { t: "Buy agents that ship", d: "Enterprises pay for agents that can be deployed, governed and scaled, not for demos." }
    ]
  },

  writing: [
    {
      title: "Follow the Compute: The Real Winners of the World Model Labs Race",
      date: "Oct 22, 2026",
      url: "https://abhishekec6.substack.com/p/follow-the-compute-the-real-winners",
      featured: true,
      summary: "A venture map of 41 world-model, open and closed-weight, and AI marketplace startups across funding, regions, acquisitions and use cases. The argument: the winners are whoever owns the compute underneath and the distribution around it.",
      takeaways: [
        "The 41 startups mapped have raised $11.7B in disclosed equity, with the top five holding about 60% of it.",
        "Nvidia sits on 9 of the 41 cap tables and AMD on 5: suppliers fund the workloads that become their reference designs.",
        "Open weights work as a distribution strategy; revenue comes from hosting, licensing and compute.",
        "Marketplaces like model routers are priced far above model publishers because they are neutral and own the developer.",
        "Next 12 to 24 months: more supplier-led deals, consolidation of the distribution layer, and agents pulling decision models into the back office."
      ]
    },
    {
      title: "SLMs and why they matter for business",
      date: "Jan 16, 2026",
      url: "https://abhishekec6.substack.com/p/slms-and-why-they-matter-for-business",
      summary: "Why small language models, not frontier models, are where most companies will find AI ROI: lower inference cost, faster deployment and AI that runs at the edge, across IT, customer service, HR, legal and more."
    },
    {
      title: "MBA Learnings: ISB vs UNC",
      date: "May 20, 2024",
      url: "https://abhishekec6.substack.com/p/mba-learnings-isb-vs-unc",
      summary: "Comparing two terms at ISB Hyderabad and Mohali with the UNC Chapel Hill full-time MBA, from classes in supply chain, finance and leadership to how each campus pushes you."
    }
  ],

  research: [
    {
      title: "Smart Notice Board",
      authors: "K. Shruthi, H. Chawla, A. Bhaduri",
      venue: "National Conference on Challenges in Research & Technology in the Coming Decades (CRT 2013), Ujire, India. Published by the IET, indexed in IEEE Xplore",
      year: "2013",
      url: "https://ieeexplore.ieee.org/document/6851559/",
      summary: "A smart notice board that takes its updates by SMS. A GSM module receives the message and a microcontroller drives the display, so notices in railway stations, bus stations, colleges and banks can change without anyone touching the board. The design has since been cited by later work on GSM and IoT-based notice boards."
    }
  ],

  press: [
    {
      outlet: "Bangalore Mirror",
      title: "Appy world for these student entrepreneurs",
      url: "https://bangaloremirror.indiatimes.com/news/state/appy-world-for-these-student-entrepreneurs/articleshow/21217643.cms",
      blurb: "Coverage of our student app-building work at Manipal."
    }
  ],

  /* Booking. Paste your Calendly link (e.g. "https://calendly.com/your-name/30min").
     Free Calendly plans include one event type, which is all this needs.
     Empty = the section offers email instead. */
  calendly: "",
  booking: {
    title: "Book time with me",
    blurb: "Pick a slot that suits you for a 30-minute video call. Good for recruiters, founders, and anyone building with agents or on-device AI.",
    points: ["30 minutes on video", "Your time zone is detected automatically", "Confirmation and calendar invite sent instantly"]
  },

  // Suggested questions for the Ask panel
  askSuggestions: [
    "What does he work on at Dell?",
    "Why hire him as an AI product leader?",
    "What did he do in venture capital?",
    "What does he write about?",
    "Has he published research?"
  ],

  offClock: [
    { title: "Bachata", text: "Most weeks you'll find me on a dance floor." },
    { title: "Cooking", text: "Kolkata flavours, Austin ingredients." },
    { title: "Cricket", text: "Every match, whatever the time zone." },
    { title: "Bollywood", text: "Strong opinions, freely shared." }
  ]
};
