import { Box,Lightbulb,UsersRound  } from 'lucide-react';
import UnderLine from './SVG/UnderLine';
 
const Vision = () => {
    const data = [
        {   
            logo: Box,
            title: "Rapid Prototyping",
            description: "We accelerate the development process, turning concepts into functional prototypes swiftly and efficiently"
        },
        {
            logo: Lightbulb,
            title: "Creative Solutions",
            description: "We foster innovation and design thinking to craft unique and impactful digital experiences."
        },
        {
            logo: UsersRound,
            title: "Collaborative Development",
            description: "We believe in teamwork and open communication, working closely with clients to achieve shared goals."
        },
    ]

  return (
    <section  className='pt-[3rem] relative'>
        <div id='vision' className='relative'>
            <div className='flex flex-col gap-2 justify-center relative mx-auto'>
                 <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
                <div className='w-fit mx-auto'>
                <p className='text-center text-3xl lg:text-5xl text-white font-semibold font-poppins'>Our Vision</p>
                <UnderLine className={''} />
                </div>
                <p className='text-center text-gray-300 text-sm'>Where idea become reality</p>
            </div>
            <div className='flex flex-col justify-center px-[2rem] py-[2rem] gap-10 lg:flex-row items-center'>
                {data.map((item, index) => (
                    <div key={index} className='bg-gray-400/20 border-2 border-gray-100/30 rounded-2xl p-3 pt-5 lg:py-[2rem] flex flex-col gap-5  w-full max-w-[25rem]'>
                        <item.logo className='bg-red-700 size-20 rounded-full p-3 mx-auto' />
                        <p className='text-xl lg:text-[25px] text-white text-center font-bold'>{item.title}</p>
                        <p className='text-sm lg:text-[18px] text-gray-200 text-center'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Vision