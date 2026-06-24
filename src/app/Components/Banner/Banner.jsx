import React from 'react';
import H3Text from '../h3Text';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-linear-to-b from-sky-900 to-sky-300'>
            <div className='space-y-5 w-180 text-center'>
                <H3Text>My Next Journey Starts Here</H3Text>
                <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore odio accusamus cupiditate exercitationem. Quasi, incidunt nesciunt voluptatum nam, adipisci cupiditate, eos accusantium molestiae corrupti debitis rerum aperiam doloribus reiciendis assumenda.
                </p>
                <Link href={'/About'}><button className='px-4 py-2 rounded bg-sky-700 font-semibold cursor-pointer'>About Me</button></Link>
            </div>
        </div>
    );
};

export default Banner;