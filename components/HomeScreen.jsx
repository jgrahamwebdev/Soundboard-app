
import Image from "next/image";
// import useSound from "use-sound";
import { useRef } from "react";

const HomeScreen = () => {
    // const [playOne] = useSound('/images/tom-1.mp3');

    const audioRefOne = useRef();
    const audioRefTwo = useRef();
    const audioRefThree = useRef();
    const audioRefFour = useRef();

    const playOne = () => {
      if (audioRefOne.current) {
        audioRefOne.current.play()
      } else {
        // Throw error
      }
    }
    const playTwo = () => {
        if (audioRefTwo.current) {
          audioRefTwo.current.play()
        } else {
          // Throw error
        }
    }
    const playThree = () => {
        if (audioRefThree.current) {
          audioRefThree.current.play()
        } else {
          // Throw error
        }
    }
    const playFour = () => {
        if (audioRefFour.current) {
          audioRefFour.current.play()
        } else {
          // Throw error
        }
    }

    
    return (
        <div className="h-[100vh] bg-[url('/images/bg.jpg')] bg-center bg-cover flex items-center justify-center">

            {/* <Image width={1000} height={1000} className="absolute top-[68%] w-[18rem] h-auto" src="/images/slinky.png" alt="" /> */}
           
           <div className="h-[75%] w-auto flex items-start justify-center flex-wrap">
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playOne}>
                    <Image width={1000} height={1000} className="w-[4rem] h-auto" src="/images/slinky2.png" alt=""  />
                    <audio ref={audioRefOne} src='/images/tom-1.mp3' />
                </div>
            </div>
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playTwo}>
                    <Image width={1000} height={1000} className="w-[4.2rem] h-auto" src="/images/slinky4.png" alt=""  />
                    <audio ref={audioRefTwo} src='/images/tom-2.mp3' />
                </div>
            </div>
           </div>
           <div className="h-[75%] w-auto flex items-start justify-center flex-wrap">
           <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playThree}>
                    <Image width={1000} height={1000} className="w-[4.2rem] h-auto" src="/images/slinky3.png" alt=""  />
                    <audio ref={audioRefThree} src='/images/tom-3.mp3' />
                </div>
            </div>
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playFour}>
                    <Image width={1000} height={1000} className="w-[4.5rem] h-auto" src="/images/slinky5.png" alt=""  />
                    <audio ref={audioRefFour} src='/images/tom-4.mp3' />
                </div>
            </div>
           </div>
        </div>
    )
}

export default HomeScreen
