import React from 'react';

const Word = (props) => {
    const wordColor = {
        color: props.color,
        backgroundColor: props.background
    }

    return(
        <div>
            {
                isNaN(props.word) ?
                <h2 style={wordColor}>The word is: {props.word}</h2>:
                <h2>The number is: {props.word}</h2>
            }
        </div>
    );
};

export default Word;