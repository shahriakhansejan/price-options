import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 flex flex-col text-white rounded-xl p-6'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold '>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h4 className='text-5xl text-center'>{name}</h4>
          
            <div className='pl-6 mt-8 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature> )
            }
            </div>
           <button className='mt-12 bg-green-700 w-full py-4 text-white font-bold rounded-lg hover:bg-green-800'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;