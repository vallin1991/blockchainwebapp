import React from 'react';

const NavigationDots = ({ active }) => {
    return(
        <div className="app__navigation">
                     {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item, index) => (
                <li key={item}>
                  <a href={`#${item}`}
                     key={item + index}
                     className="app__navigation-dot"
                     style={active === item ? {backgroundColor: '#313BAC'} : {}}/>
                   
                </li>
              ))}
        </div>
    );
}

export default NavigationDots;