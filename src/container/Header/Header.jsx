import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants ={
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info app__header-circlesleft"
            >
                {[ images.btc, images.eth, images.ltc].map((circle, index) =>(
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>

                        <img src={circle} alt="circle"/>

                    </div>
                ))}
            </motion.div>
            
            {/* Motion for Logo Header */}
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
                
            >
                {/* Blockchain Logo Header */}
                <img src={images.profile} alt="profile_bg" />
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
              
            </motion.div>

            {/* Right Icons on Header */}
            <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
            >
                {[ images.btc, images.eth, images.ltc].map((circle, index) =>(
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>

                        <img src={circle} alt="circle"/>

                    </div>
                ))}

            </motion.div>


            

       
        </div>
    );
}
export default AppWrap(Header, 'home');