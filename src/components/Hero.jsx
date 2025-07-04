import profilePic from '../assets/home.png'
import { motion } from "framer-motion"
import { useTypewriter } from 'react-simple-typewriter'

const container = (delay) => ({
  hidden : {x : -100, opacity : 0},
  visible : {
    x : 0,
    opacity : 1,
    transition : {
      delay : delay,
      duration : 0.6
    }
  }
})

const Hero = () => {
  const [text] = useTypewriter({
    words : ['Front-end Developer' , 'Software Developer', 'Tech Enthusiast'],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 50,
  })
  return (
    <div className='border-b border-neutral-900 pb-4 mt-16 lg:mt-28 lg:mb-36 ' id='hero'>
      <div className='flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
          
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-2xl lg:text-3xl max-w-xl  pt-10 font-thin tracking-tighter '>Hello Everyone👋,</motion.p>
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-2xl lg:text-3xl max-w-xl  pb-5 font-thin tracking-tighter '>I hope you are doing well.</motion.p>
          
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-3xl lg:text-4xl max-w-xl  pt-5 font-thin tracking-tighter '>This is ,</motion.p>

            <motion.h1 
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
             className='pb-16 text-5xl font-thin tracking-tight lg:mt-2 lg:text-8xl'>Vansh Khatri</motion.h1>
            <motion.span 
            variants={container(0.8)}
            initial='hidden'
            animate='visible'
             className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent h-16 mb-8 '>{text}</motion.span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 '>
          <div className='flex justify-center '>
            <motion.img className = 'rounded-full lg:h-[25rem] lg:w-[25rem]'
            initial = {{x : 100 , opacity : 0}}
            animate = {{x : 0 , opacity : 1}}
            transition = {{duration : 1 , delay : 1.2}}
            src={profilePic} alt="Vansh Khatri" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
