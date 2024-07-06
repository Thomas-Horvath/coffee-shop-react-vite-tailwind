import './hero.css';
import CoffeeMain from "../../assets/black.png"
import Navbar from '../Navbar/Navbar';


const Hero = () => {
    return (
        <main className='bgImage'>
            <section className='min-h-[750px] w-full'>
                <div className="container">
                    {/* navbar */}
                    <Navbar />


                    {/* hero section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">

                        {/* left section */}
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                            <h1 className='text-7xl font-bold leading-tight ml-14'>Thomas Coffee Corner</h1>
                            <div className='relative' >
                                <div className="relative z-10 space-y-4">
                                    <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt sed doloremque magnam
                                        repellendus, laborum eum nihil dicta fugiat dolorem porro
                                        laudantium magni explicabo sapiente fuga corrupti at quas soluta alias!</h1>
                                </div>
                                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                            </div>
                        </div>


                        {/* image */}
                        <div className="relative">
                            <img src={CoffeeMain} alt="cofee cup" className='relative z-40 h-[400px] md:h-[700px] img-shadow' />

                            {/* orange ring circle */}
                            <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10">
                            </div>

                            {/* big text */}
                            <div className='absolute -top-20 left-[200px] x-[1]'>
                                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                                    Black Thumbler
                                </h1>
                            </div>

                        </div>


                        {/* right section */}
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Thomas Coffee Corner</h1>
                            <div className='relative' >
                                <div className="relative z-10 space-y-4">
                                    <h1 className='text-2xl'>Black Tumbler</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt sed doloremque magnam
                                        repellendus. Lorem ipsum dolor sit amet.</h1>
                                </div>
                                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}

export default Hero;