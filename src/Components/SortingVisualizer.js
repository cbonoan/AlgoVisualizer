import React from 'react';
import * as sortingAlgos from './SortingAlgos';

import '../Styles/SortingVisualizer.scss';

function SortingVisualizer(props) {
    

    // eslint-disable-next-line
    const testTraversal = () => {
        const animations = sortingAlgos.test(props.arr);
        for(let i=0; i<Object.keys(animations).length; i++) {
            const comparison = animations[i];
            setTimeout(() => {
                const numBars = document.getElementsByClassName('num-block');
                numBars[i].classList.add('selected');

                setTimeout(() => {
                    // numBars[[comparison[0]]].classList.toggle('selected');
                    numBars[[comparison[1]]].classList.toggle('selected');
                }, (i+1) * 10)
            }, i*10)
        }
    }

    const bubbleSort = () => {
        const animations = sortingAlgos.bubbleSort(props.arr);
        console.log(animations);
        for(let i=0; i<animations.length; i++) {
            const comparison = animations[i]
            setTimeout(() => {
                const arrBars = document.getElementsByClassName('num-block');
                const height1 = arrBars[comparison[0]].offsetHeight;
                const height2 = arrBars[comparison[1]].offsetHeight;

                arrBars[comparison[0]].classList.toggle('selected');
                arrBars[comparison[1]].classList.toggle('selected');

                if(height1 > height2) {
                    arrBars[comparison[1]].style.height = `${height1}px`;
                    arrBars[comparison[0]].style.height = `${height2}px`;
                }
                setTimeout(() => {
                    arrBars[comparison[0]].classList.toggle('selected');
                    arrBars[comparison[1]].classList.toggle('selected');
                }, i*0.001)
                
            }, i*5);
        }
    }

    const selectionSort = () => {
        for(let i=0; i<props.arr.length; i++) {
            setTimeout(() => {
                const arrBars = document.getElementsByClassName('num-block');
                arrBars[i].classList.toggle('selected');
                let tmpHeight = arrBars[i].offsetHeight;
                let minHeight = arrBars[i].offsetHeight;
                let swapPos = i; 
                setTimeout(() => {
                    for(let j=i+1; j<props.arr.length; j++) {
                        if(arrBars[j].offsetHeight < minHeight) {
                            minHeight = arrBars[j].offsetHeight;
                            swapPos = j; 
                        }
                    }
                    arrBars[i].style.height = `${minHeight}px`;
                    arrBars[swapPos].style.height = `${tmpHeight}px`;
                }, i*0.01)
            }, i*10)
        }
    }

    return(
        <div className="container">
            <div className="sort-btns">
                <button className="btn" onClick={props.generateArr}>Generate New Array</button>
                <button className="btn" onClick={bubbleSort}>Bubble Sort</button>
                <button className="btn" onClick={selectionSort}>Selection Sort</button>
                <button className="btn" onClick={bubbleSort}>Merge Sort</button>
                <button className="btn" onClick={bubbleSort}>Quick Sort</button>
            </div>
            
            <div className="container-fluid" id="array-container">
                {props.arr.map((num, index) => {
                    return (
                        <div key={index} className="num-block" style={{height: num+"px"}}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default SortingVisualizer;