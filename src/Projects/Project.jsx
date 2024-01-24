import { data } from "../data/projects"
import { FaGithub } from "react-icons/fa";
import { InView } from 'react-intersection-observer';
import './Project.css'

export default function Project() {


    return (
        <div className="w-full max-w-[75rem] py-4 dark:bg-[#222831] dark:text-[#EEEEEE]">
            <h6 className="text-3xl font-medium mx-5 laptop:text-5xl mb-2">
                Projects
            </h6>

            <div className="flex flex-col gap-4 px-5 pb-3 laptop:flex-row w-full 
             laptop:flex-wrap">

                {
                    data.map((project, index) => {
                        return (
                            <InView triggerOnce key={index}>
                                {({ inView, ref, entry }) => (
                                    <div className={`relative  ${inView ? 'card' : ''}`} ref={ref}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="flex flex-col shadow-card rounded-lg cursor-pointer
                                laptop:w-72 w-full p-2 dark:bg-[#393E46] bg-white"
                                        >
                                            <img src={project.url} alt="project_photo" loading="lazy"
                                                className="w-full h-52 object-cover rounded-t-lg"
                                            />
                                            <div className="flex flex-col pt-6 bg-white rounded-b-lg px-3 dark:bg-[#393E46]">
                                                <h5 className="text-lg font-semibold laptop:text-xl">
                                                    {project.heading}
                                                </h5>
                                                <p className="text-sm text-gray-500 h-14 laptop:text-base">
                                                    {project.stack}
                                                </p>
                                            </div>
                                        </a>

                                        <a className="absolute top-3 left-3 text-4xl text-white"
                                            href={project.github}>
                                            <FaGithub />
                                        </a>
                                    </div>
                                )}
                            </InView>

                        )
                    })
                }
            </div>
        </div>
    )
}
