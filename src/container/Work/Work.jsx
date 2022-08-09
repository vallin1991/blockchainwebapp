import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const handleWorkFilter = (item) => {

    }
    return(
        <>
                <h2 className="head-text">
            I know that
            <span> Good Design</span>
            <br/>
            means
            <span> Good Business</span>
        </h2>
        <div className="app__work-filter">
            {['UI/UX','Web App','Mobile App', 'React JS', 'All'].map((item, index) =>(
                <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}

                >
                    {item}

                </div>
            )) }

        </div>
        </>
    );
}

export default Work;