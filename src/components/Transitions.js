import React, { useRef, useEffect } from 'react'
import "../css/main.css"
import { Power4 } from 'gsap'

function Transition({ timeline }) {
    const trans = useRef(null);
    useEffect(() => {
        timeline.to(trans.current, {
            delay: 0.3,
            duration: 2.5,
            x: 2500,
            ease: Power4.easeOut
        });
    })
    return (
        <div>
            <div className="transition-effect" ref={trans}></div>
        </div>
    )
}

export default Transition