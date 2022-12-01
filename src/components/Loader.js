import React, { useEffect, useState } from 'react'
import "../css/main.css"
import styled from "styled-components";
import { gsap, CSSPlugin, Expo, Power4 } from "gsap";
gsap.registerPlugin(CSSPlugin);

function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}


const scrollBarWidth = getScrollbarWidth();
function Loader() {
    const lockScroll = React.useCallback(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
    }, [])

    const unlockScroll = React.useCallback(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = ''
    }, [])
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const count = setInterval(() => {
            lockScroll();
            setCounter((counter) =>
                counter < 100
                    ? counter + 1
                    : (clearInterval(count), setCounter(100), reveal())
            );
        }, 15);
    }, []);

    const reveal = () => {
        const t1 = gsap.timeline({
            onComplete: () => {
                unlockScroll()
            }
        });
        t1.to(".follow", {
            width: "100%",
            ease: Expo.easeInOut,
            duration: 1.2,
            delay: 0.7,
        })
            .to(".hide", { opacity: 0, duration: 0.3 })
            .to(".hide", { display: "none", duration: 0.3 })
            .to(".follow", {
                height: "100%",
                ease: Expo.easeInOut,
                duration: 0.7,
                delay: 0.5,
            })
            .to(".hideContainer", { width: "0", display: "none", ease: Power4.easeOut, duration: 1 })
    };


    return (
        <AppContainer className='hideContainer'>
            <Loading>
                <Follow className="follow"></Follow>
                <ProgressBar
                    className="hide"
                    id="progress-bar"
                    style={{ width: counter + "%" }}
                ></ProgressBar>
                <Count id="count" className="hide">
                    {counter}%
                </Count>
            </Loading>
        </AppContainer>
    );
}

export default Loader

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #ffa585;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;