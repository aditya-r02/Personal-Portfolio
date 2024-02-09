import Button from "../Extras/Button/Button";
import image1 from "../images/user-photo.jpg";
import './Home.css'
import leetcode from '../images/icons/leetcode.svg';
import github from '../images/icons/github.svg'
import codeforces from '../images/icons/codeforces.svg'
import linkedin from '../images/icons/linkedin.svg'
import ReactTyped from "react-typed";

export default function Home({contactRef}){
    const scrollTo = () =>{
        console.log(contactRef)
        //console.log(element.current.getBoundingClientRect());

         const targetPos = contactRef.current.getBoundingClientRect().top+window.scrollY-80;
         window.scrollTo({top:targetPos, behavior:'smooth'});
    }

    return (
        <div className="w-full flex flex-col mt-16 items-center gap-5 laptop:flex-row laptop:gap-10
        laptop:justify-center dark:bg-[#222831] dark:text-[#EEEEEE]">
            <div className="flex flex-col items-center mx-3  laptop:max-w-[40rem]
            laptop:items-start laptop:gap-3">
                <p className="text-2xl laptop:text-5xl">Hello!</p>
                <p className="text-2xl laptop:text-5xl">
                    I am&nbsp;
                    <span className="text-blue-600 font-medium dark:text-[#00ADB5]">
                        <ReactTyped
                            strings={['Aditya Rana', 'a Leetcoder', 'a Web Developer']}
                            typeSpeed={60}
                            backSpeed={49}
                            loop
                        />
                                    
                    </span>
                </p>
                <p className="text-center text-lg my-1 laptop:text-justify laptop:text-xl">
                    I'm an engineering student passionate about web development.
                    Welcome to my portfolio,
                    where you'll find a collection of my projects and a showcase of my skills as a web developer.
                </p>
                
                <div onClick={scrollTo}>
                    <Button text="Hire me" />
                </div>
                
            </div>

            <div className="w-64 laptop:my-5 laptop:w-80 relative dark:shadow-photo mb-5 shadow-light-photo">
                <img src={image1} alt="person" className="w-full"/>

                <div className="flex flex-col text-4xl absolute top-5  gap-3 right-1">

                    <a href="https://github.com/aditya-r02" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="w-10"/>
                    </a>

                    <a href="https://leetcode.com/aditya__r/" target="_blank" rel="noopener noreferrer">
                        <img src={leetcode} alt="leetcode" className="w-10"/>
                    </a>

                    <a href="https://codeforces.com/profile/aditya_rana" target="_blank" rel="noopener noreferrer">
                        <img src={codeforces} alt="codeforces" className="w-10"/>
                    </a>

                    <a href="https://www.linkedin.com/in/adityarana2003/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="w-10"/>
                    </a>
        
                </div>
            </div>
        </div>
    )
}