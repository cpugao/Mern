import React, { useState } from 'react';

const Tabs = (props) => {
    const {tabs, setTabs} = props

    const [content, setContent] = useState("")

    const handleClick = (e) => {
        setContent(tabs[e.target.value].content)
    }

    return(
        <div className="container">
            <div className="divTab">
                {tabs.map( (tab, index) => 
                    <button onClick={ handleClick } value={ index } key={ index }>Tab { index + 1 }</button>
                )}
            </div>
            <div className="divContent">
                <h4>{ content }</h4>
            </div>
        </div>
    )
}

export default Tabs;