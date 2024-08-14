import PropTypes from 'prop-types';
import { ImCheckboxChecked } from 'react-icons/im';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3 items-center '><ImCheckboxChecked></ImCheckboxChecked> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;