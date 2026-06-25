'use client'
import React, { useEffect } from 'react';
import H3Text from '../Components/h3Text';
import Counter from '../Components/Counter';

const About = () => {
    return (
        <div className='flex flex-col items-center my-10'>
            <H3Text>I am a MERN Stack Developer</H3Text>
            <div className='text-2xl font-semibold flex gap-10 mt-10'>
                <h4><Counter target={12}></Counter>+ Projects</h4>
                <h4><Counter target={9}></Counter>+ Clients</h4>
                <h4><Counter target={4.9} isInt={false}></Counter>+ Rating</h4>
            </div>
        </div>
    );
};

export default About;