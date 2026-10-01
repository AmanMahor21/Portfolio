export const projectsData = [
   {
    id: 1,
    name: "Bryck Storage Console — Vue 3 Migration",
    tools: [
      "Vue 3",
      "Pinia",
      "Vite",
      "TypeScript",
      "Element Plus",
      "Vue Router 4",
      "Playwright",
    ],
    role: "Frontend Lead / Architect",
    description:
      "Leading migration of a 200+ file enterprise storage management console from Vue 2 + Vuex + Webpack to Vue 3 + Pinia + Vite + TypeScript. Cut cold dev-server startup from 15s to 200ms, reduced bundle size by 35%. Incremental migration using @vue/compat — zero feature regressions in production.",
    demo: "https://your-bryckweb-vue3-demo-link",
  },
  {
    id: 2,
    name: "Agentic Talent Platform",
    description: "Built an autonomous multi-agent hiring system with LangGraph featuring 4 specialized agents for planning, reasoning, tool calling, and delegation. Implemented hybrid search (vector embeddings + cross-encoder reranking) that expanded the candidate pool by 5×. Developed production-ready AI APIs with FastAPI and Docker, including a RAG-based chat service with retrieval, contextual generation, and state/memory management.",
    tools: ["LangGraph", "LangChain", "FastAPI", "Docker", "RAG", "Vector Search", "Python", "Reranking"],
    role: "AI/ML Engineer",
    code: "https://github.com/AmanMahor21",
    demo: "",
    image: "/projects/agentic-talent.png"
  },
  {
    id: 3,
    name: "AI Appointment Agent (Telegram Bot)",
    description: "Designed and implemented an AI-powered appointment scheduling agent using LangGraph and LLMs, enabling intelligent multi-turn conversation handling, tool calling, and automated booking workflows with memory and state management.",
    tools: ["LangGraph", "LLMs", "Python", "Telegram Bot API", "State Management"],
    role: "AI Engineer",
    code: "https://github.com/AmanMahor21",
    demo: "",
    image: "/projects/appointment-agent.png"
  },
  // {
  //   id: 4,
  //   name: "MERN Chat App",
  //   description: "Developed a real-time chat application with secure authentication, Socket.IO messaging, MongoDB persistence, online/offline status, message search, and date-wise grouping for improved user experience.",
  //   tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
  //   role: "Full Stack Developer",
  //   code: "https://github.com/AmanMahor21",
  //   demo: "",
  //   image: "/projects/mern-chat.png"
  // },
  {
    id: 5,
    name: "E-commerce App",
    description: "Built a scalable e-commerce platform using Next.js, Node.js, Express.js, MySQL, TypeORM, and Routing-Controllers with JWT/OAuth authentication, middleware, and full product/cart/order management.",
    tools: ["Next.js", "Node.js", "Express.js", "MySQL", "TypeORM", "JWT", "OAuth"],
    role: "Full Stack Developer",
    code: "https://github.com/AmanMahor21",
    demo: "",
    image: "/projects/ecommerce.png"
  }
];