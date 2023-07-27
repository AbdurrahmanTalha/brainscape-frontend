import Image from 'next/image';
import img from '../../public/Rectangle.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const QuizStartPage = () => {
    return (
        <main className='relative mt-10 md:mt-0 lg:mt-0'>
            <div className='absolute top-0 left-0 flex items-center gap-2'>
                <button><p className='text-[24px] font-bold text-[#FFFFFF]'> {"<"} Back</p> </button>

            </div>
            <div className='grid items-center gap-5 md:grid-cols-2'>
                <div>
                    <h2 className='text-[#FFFFFF] text-[40px] font-bold'>How to read Equations</h2>
                    <p className='text-[#a7a7a7]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <Image className='w-full h-screen' width={100} height={100} src={img} alt='' />
            </div>
        </main>
    );
};

export default QuizStartPage;