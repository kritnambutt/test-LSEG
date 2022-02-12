import React, { useEffect } from 'react';
import { ContainerWrapper } from './style';

const ContainerQ4 = () => {
    useEffect(() => {
        const getRandomRGB = () => {
            const r = Math.floor(Math.random() * Math.floor(255));
            const g = Math.floor(Math.random() * Math.floor(255));
            const b = Math.floor(Math.random() * Math.floor(255));
            return `rgb(${r},${g},${b})`;
        };
          
        const colorPicker = document.getElementById('colorPicker');
          
        for (let i=0; i<10000; ++i) {
            const btn = document.createElement('button');
            const rgb = getRandomRGB();
            btn.id = rgb;
            btn.textContent = rgb;
            btn.style.backgroundColor = rgb;

            // listener event on click btn
            btn.addEventListener("click", () => {
                const answerBoxElem = document.getElementById('answerBox');
                answerBoxElem.style.backgroundColor = rgb;
                answerBoxElem.innerHTML = rgb;
            });
            colorPicker.appendChild(btn);
        }   
    }, []);

    return (
        <ContainerWrapper>
            <h2>Question 4</h2>
            <h3>Write code to show RGB code that users clicked inside the answer box.</h3>
            <div id="answerBox">ANSWER</div>
            <div id="colorPicker"></div>
        </ContainerWrapper>
    )
}

export default ContainerQ4;