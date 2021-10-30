import React from 'react'

export default function DropDown() {
    return (
        <>
            <div className="Dropdown">
                <div className="item item1"></div>
                <div className="item item2"></div>
                <div className="item item3"></div>
            </div>

            <style jsx>
                {`
            .Dropdown {
                width: 2rem;
                height:2rem;
                display:flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 10;
            }

            .item {
                width: 2rem;
                height: .25rem;
                border-radius: 10px;
                background-color: black;
                transform-origin: 1px;
                transition: all .3s linear;
            }
            `}
            </style>
        </>
    )
}
