
import Image from "next/image";
import useSound from "use-sound";

const HomeScreen = () => {
    const [playOne] = useSound('/images/tom-1.mp3');
    const [playTwo] = useSound('/images/tom-2.mp3');
    const [playThree] = useSound('/images/tom-3.mp3');
    const [playFour] = useSound('/images/tom-4.mp3');
    return (
        <div className="w-screen h-screen bg-[url('/images/bg.jpg')] bg-cover flex items-center justify-center">

            <Image width={1000} height={1000} className="absolute top-[68%] w-[18rem] h-auto" src="/images/slinky.png" alt="" />
           
           <div className="h-[75%] w-full px-[4rem] flex items-start justify-aroun flex-wrap">
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playOne}>
                    <Image width={1000} height={1000} className="w-[4rem] h-auto" src="/images/slinky2.png" alt=""  />
                </div>
            </div>
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playTwo}>
                    <Image width={1000} height={1000} className="w-[4.2rem] h-auto" src="/images/slinky4.png" alt=""  />
                </div>
            </div>
           </div>
           <div className="h-[75%] w-full px-[4rem] flex items-start justify-evenly flex-wrap">
           <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playThree}>
                    <Image width={1000} height={1000} className="w-[4.2rem] h-auto" src="/images/slinky3.png" alt=""  />
                </div>
            </div>
            <div className="bg-[#faea08] w-[8rem] h-[8rem] rounded-full flex items-center justify-center shadow-inner">
                <div className="bg-red-500 w-[6rem] h-[6rem] rounded-full cursor-pointer flex items-center justify-center" onClick={playFour}>
                    <Image width={1000} height={1000} className="w-[4.5rem] h-auto" src="/images/slinky5.png" alt=""  />
                </div>
            </div>
           </div>
        </div>
    )
}

export default HomeScreen
