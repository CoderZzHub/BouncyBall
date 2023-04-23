import './App.css'
import { motion } from 'framer-motion'
import Form from './Form'

function App() {

  return (
    <>
      <motion.div className='mx-auto mt-[250px] z-20 h-6 w-6 rounded-full bg-gradient-to-b from-[#FE6244] to-[#576CBC]'
      initial={{y:0}}
      animate={[{y:[0,-20,0]},{scale:[1,3,1,100], transition:{
        delay:2
      }}]}
      ></motion.div>
      <motion.div className={`absolute left-[450px] top-[10px] z-40`}
      initial={{visibility:'hidden', opacity:0, y:50}}
      animate={{visibility:"visible",y:0, opacity:1, transition:{
        duration:1,
        delay:4
      }}}
      ><Form /></motion.div>
    </>
  )
}

export default App
