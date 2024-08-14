import React from 'react';
import PropTypes from 'prop-types';
import PriceOption from './PriceOption';

const Price = () => {

    const price = [
        {
          "id": 1,
          "name": "Basic",
          "price": 20.0,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 40.0,
          "features": [
            "All Basic features",
            "Access to group fitness classes",
            "Personalized workout plan",
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 60.0,
          "features": [
            "All Standard features",
            "Access to sauna and spa facilities",
            "Monthly personal training session",
            "Specialized fitness workshops"
          ]
        },
        {
          "id": 4,
          "name": "Executive",
          "price": 80.0,
          "features": [
            "All Premium features",
            "24/7 gym access",
            "Unlimited personal training sessions",
            "Priority booking for classes and facilities",
            "Priority booking for classes and facilities"
          ]
        },
        {
          "id": 5,
          "name": "Corporate",
          "price": 90.0,
          "features": [
            "Customized corporate wellness programs",
            "Dedicated account manager",
            "On-site fitness classes",
            "Employee wellness workshops"
          ]
        }
      ]
      
      

    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the time</h2>
            
            <div className='grid md:grid-cols-3 gap-6'>
            {
                price.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

Price.propTypes = {
    
};

export default Price;