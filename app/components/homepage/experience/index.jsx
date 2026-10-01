import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col gap-8">
          {experiences.map((experience, ind) => (
            <div key={ind} className="relative p-3">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex justify-center">
                <p className="text-xs sm:text-sm text-[#16f2b3]">
                  {experience.duration}
                </p>
              </div>
              <div className="flex items-start gap-x-8 px-3 py-5">
                <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                  <BsPersonWorkspace size={36} />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                    {experience.title}
                  </p>
                  <p className="text-sm sm:text-base text-[#16f2b3] mb-3">
                    {experience.company}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;