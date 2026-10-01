import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>

          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            I&#39;m a Full Stack & AI Engineer with 1+ year of production experience building
            web applications end-to-end and shipping AI systems that actually work.
            I&#39;ve led development on e-commerce platforms, built secure auth and payment
            flows, designed REST APIs, and — in parallel — engineered multi-agent
            LangGraph systems, RAG pipelines, and AI services with FastAPI.
          </p>

          <p className="mt-4 text-gray-300 text-sm lg:text-base leading-relaxed">
            I care about both sides equally: clean, responsive UIs on the front, reliable
            APIs and data on the back, and LLM-powered features that add real product value
            instead of hype.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#16f2b3] font-semibold whitespace-nowrap w-[110px]">
                🎨 Frontend:
              </span>
              <span className="text-gray-300 text-sm">
                React.js, Next.js, Vue.js, JavaScript, Tailwind CSS, HTML/CSS — responsive UIs,
                component architecture, Playwright testing
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#16f2b3] font-semibold whitespace-nowrap w-[110px]">
                ⚙️ Backend:
              </span>
              <span className="text-gray-300 text-sm">
                Python, FastAPI, Node.js, Express.js, REST APIs, MongoDB, MySQL,
                PostgreSQL, JWT/OAuth, RBAC, backend architecture
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#16f2b3] font-semibold whitespace-nowrap w-[110px]">
                🤖 AI/ML:
              </span>
              <span className="text-gray-300 text-sm">
                LangGraph, LangChain, RAG pipelines (embeddings, vector search, reranking),
                multi-agent workflows, tool/function calling, prompt engineering, semantic search
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#16f2b3] font-semibold whitespace-nowrap w-[110px]">
                🛡️ AI Quality:
              </span>
              <span className="text-gray-300 text-sm">
                LLM/RAG evaluation, structured outputs, AI guardrails, hallucination
                awareness, responsible AI practices
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#16f2b3] font-semibold whitespace-nowrap w-[110px]">
                🚀 Infra:
              </span>
              <span className="text-gray-300 text-sm">
                Docker, Nginx/SSL, REST microservices, Git, CI/CD, deployment pipelines
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Aman Mahor"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;