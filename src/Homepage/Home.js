import Button from "../Extras/Button/Button";
import image1 from "../images/user-photo.jpg";
import './Home.css'

export default function Home({contactRef}){
    const scrollTo = () =>{
        console.log(contactRef)
        //console.log(element.current.getBoundingClientRect());

         const targetPos = contactRef.current.getBoundingClientRect().top+window.scrollY-80;
         window.scrollTo({top:targetPos, behavior:'smooth'});
    }

    return (
        <div className="w-full flex flex-col mt-16 items-center gap-5 laptop:flex-row laptop:gap-10
        laptop:justify-center">
            <div className="flex flex-col items-center mx-2  laptop:max-w-[40rem]
            laptop:items-start laptop:gap-3">
                <p className="text-2xl laptop:text-5xl">Hello!</p>
                <p className="text-2xl laptop:text-5xl">
                    I am&nbsp;
                    <span className="text-blue-600 font-medium">Aditya Rana</span>
                </p>
                <p className="text-center text-lg my-1 laptop:text-left laptop:text-xl">
                    I'm an engineering student passionate about web development.
                    Welcome to my portfolio,
                    where you'll find a collection of my projects and a showcase of my skills as a web developer.
                </p>
                
                <div onClick={scrollTo}>
                    <Button text="Hire me" />
                </div>
                
            </div>

            <div className="w-52 main-photo p-4 my-5 laptop:w-80">
                <img src={image1} alt="person" className=""/>
            </div>
        </div>
    )
}