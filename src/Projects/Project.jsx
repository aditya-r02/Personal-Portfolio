import {data} from "../data/projects" 

export default function Project(){
    return (
        <div className="w-full max-w-[75rem] my-4">
            <h6 className="text-2xl font-medium mx-5 laptop:text-5xl">
                Projects
            </h6>

            <div className="flex flex-col gap-4 px-5 py-3 laptop:flex-row w-full 
             laptop:flex-wrap">
                {
                    data.map((project)=>{
                        return (
                            <a href={project.link} 
                            className="flex flex-col shadow-card rounded-lg cursor-pointer
                            laptop:w-72 w-full"
                            >
                                <img src={project.url} alt="project_photo" loading="lazy"
                                    className="w-full h-52 object-cover rounded-t-lg"
                                />
                                <div className="flex flex-col pt-6 bg-white rounded-b-lg px-3">
                                    <h5 className="text-lg font-semibold laptop:text-xl">
                                        {project.heading}
                                    </h5>
                                    <p className="text-sm text-gray-500 h-14 laptop:text-base">
                                        {project.stack}
                                    </p>
                                </div>
                            </a>
                        ) 
                    })
                }
            </div>
        </div>
    )
}