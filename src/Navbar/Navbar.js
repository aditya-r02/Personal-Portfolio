import './Navbar.css'

export default function Navbar({projectRef, skillRef, contactRef}){
    const scrollTo = (element) =>{
        //console.log(contactRef)
        //console.log(element.current.getBoundingClientRect());
         const targetPos = element.current.getBoundingClientRect().top+window.scrollY-80;
         window.scrollTo({top:targetPos, behavior:'smooth'});
    }

    

    return (
        <div className="w-full flex justify-center items-center fixed z-50 bg-white border-b border-gray-200">
            <div className='w-full max-w-[75rem] px-4 py-2 flex justify-between items-center bg-white'>
                <div className="flex items-center">
                    <span className="lobster text-4xl laptop:text-5xl">
                        A
                    </span>
                    <span  className='font-calibri text-xl font-medium laptop:text-2xl'>
                        ditya
                    </span>
                    <span className='font-calibri hidden laptop:text-2xl laptop:inline'>
                        &nbsp;Rana
                    </span>
                </div>

                <div className='flex gap-3 text-lg laptop:text-xl'>
                    <span onClick={()=>{scrollTo(projectRef)}} className='cursor-pointer  select-none hidden laptop:inline'>
                        Projects
                    </span>
                    <span onClick={()=>{scrollTo(skillRef)}} className='cursor-pointer  select-none hidden laptop:inline'>
                        Skills
                    </span>
                    <span onClick={()=>{scrollTo(contactRef)}} className='cursor-pointer underline select-none'>
                        Contact Me
                    </span>
                </div>
            </div>
            
        </div>
    )
}