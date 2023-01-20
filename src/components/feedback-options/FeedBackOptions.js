const FeedBackOptions = ({options, onLeaveFeedback}) => { 
    const object = Object.keys(options)
    return (object.map(item =>  
            <button type='button' onClick={onLeaveFeedback}>{[item]}</button>
    )        
    )
}

export default FeedBackOptions