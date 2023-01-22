import propTypes from 'prop-types';

const FeedBackOptions = ({ options, onLeaveFeedback }) => { 
    const object = Object.keys(options)
    return (object.map(item =>  
            <button type='button' onClick={() => onLeaveFeedback(item)} key={item}>{[item]}</button>
    )        
    )
}

FeedBackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};


export default FeedBackOptions