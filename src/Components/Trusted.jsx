import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Trusted = () => {
    const [counterOn, setcounterOn] = useState(false);

    return (
        <div className='w-9/12 mx-auto py-8'>
            <h1 className='text-2xl font-bold text-center text-blue-500'>TRUSTED BY THE BEST</h1>
            <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(false)}>
                <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-6'>

                    {/* Years of Experience */}
                    <div className='text-center'>
                        {counterOn && (
                            <div>
                                <span className='text-5xl md:text-7xl text-blue-600 font-bold'>></span>
                                <CountUp className='text-5xl md:text-7xl text-blue-600 font-bold' end={20} start={0} delay={0} duration={2} />
                            </div>
                        )}
                        <h1 className='text-lg md:text-xl font-semibold'>Years of Experience</h1>
                    </div>

                    {/* Happy Clients */}
                    <div className='text-center'>
                        {counterOn && (
                            <div>
                                <CountUp className='text-5xl md:text-7xl text-blue-600 font-bold' end={40} start={0} delay={0} duration={2} />
                                <span className='text-5xl md:text-7xl text-blue-600 font-bold'>+</span>
                            </div>
                        )}
                        <h1 className='text-lg md:text-xl font-semibold'>Financial Institutions</h1>
                    </div>

                    {/* Completed Projects */}
                    <div className='text-center'>
                        {counterOn && (
                            <div>
                                <span className='text-5xl md:text-7xl text-blue-600 font-bold'>></span>
                                <CountUp className='text-5xl md:text-7xl text-blue-600 font-bold' end={200} start={0} delay={0} duration={2} />
                            </div>
                        )}
                        <h1 className='text-lg md:text-xl font-semibold'>Customers Each</h1>
                    </div>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Trusted;