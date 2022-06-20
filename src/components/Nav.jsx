import { useState } from "react";
/*  ./components/Navbar.jsx   imp  */
import { TbBone } from 'react-icons/tb';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../index.css'
const Nav = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-red-400 p-3 max-w-5xl mx-auto'>
                <a href='/'>
                    <a className='inline-flex items-center p-2 mr-4 space-x-2'>
                        <TbBone className="animate-bounce h-8 w-8 text-white" />
                        <span className='text-xl text-white font-bold tracking-wide'>
                            Crypto Chihuahua NFT
                        </span>
                    </a>
                </a>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <ConnectButton />
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Nav;