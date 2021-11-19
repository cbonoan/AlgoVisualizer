import React from 'react';
import * as sortingAlgos from './SortingAlgos';

import '../Styles/SortingVisualizer.scss';

const SELECTED_COLOR = "#3498DB";
const NOT_SELECTED = "#E74C3C";

function SortingVisualizer(props) {
    const resetArr = () => {
        props.generateArr();
        const numBars = document.getElementsByClassName('num-block');
        for(let i=0; i<numBars.length; i++) {
            numBars[i].classList.remove('selected');
        }
    }

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

    const disableBtns = () => {
        const btns = document.getElementsByClassName('btn')
        for(let i=0; i<btns.length; i++) {
            btns[i].disabled = true;
        }
    }
    const enableBtns = () => {
        const btns = document.getElementsByClassName('btn')
        for(let i=0; i<btns.length; i++) {
            btns[i].disabled = false;
        }
    }

    const bubbleSort = () => {
        disableBtns();
        const animations = sortingAlgos.bubbleSort(props.arr);
        let i = 0;
        for(i=0; i<animations.length; i++) {
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
            }, 0);
        }
        setTimeout(() => {
            enableBtns();
        }, i*0.01);
    }

    const selectionSort = () => {
        disableBtns();
        let j = 0;
        for(let i=0; i<props.arr.length; i++) {
            setTimeout(() => {
                const arrBars = document.getElementsByClassName('num-block');
                arrBars[i].classList.toggle('selected');
                let tmpHeight = arrBars[i].offsetHeight;
                let minHeight = arrBars[i].offsetHeight;
                let swapPos = i; 
                for(let j=i+1; j<props.arr.length; j++) {
                    if(arrBars[j].offsetHeight < minHeight) {
                        minHeight = arrBars[j].offsetHeight;
                        swapPos = j; 
                    }
                }
                arrBars[i].style.height = `${minHeight}px`;
                arrBars[swapPos].style.height = `${tmpHeight}px`;
            }, i*10)
            j++;
        }
        setTimeout(() => {
            enableBtns();
        }, j*10);
    }

    const mergeSort = () => {
        disableBtns();
        // console.log(sortingAlgos.getMergeSortAnims(props.arr));
        const anims = sortingAlgos.getMergeSortAnims(props.arr);
        console.log(anims)
        let i = 0;
        for(i=0; i < anims.length; i++) {
            const arrBars = document.getElementsByClassName('num-block');
            const swap = i % 3 !== 2;
            if(swap) {
                const [barOne, barTwo] = anims[i];
                const color = i % 3 === 0 ? NOT_SELECTED : SELECTED_COLOR;
                setTimeout(() => {
                    arrBars[barOne].style.backgroundColor = color;
                    arrBars[barTwo].style.backgroundColor = color;
                }, i*10)
            } else {
                const [barOne, newHeight] = anims[i];
                setTimeout(() => {
                    arrBars[barOne].style.height = `${newHeight}px`;
                }, i*10);
            }
            
        }
        setTimeout(() => {
            enableBtns();
        }, i*10)
    }

    return(
        <div className="container">
            <div className="sort-btns">
                <button type="button" className="btn" onClick={resetArr}>Generate New Array</button>
                <button type="button" className="btn" onClick={mergeSort}>Merge Sort</button>
                <button type="button" className="btn" onClick={bubbleSort}>Quick Sort</button>
                <button type="button" className="btn" onClick={selectionSort}>Selection Sort</button>
                <button type="button" className="btn" onClick={bubbleSort}>Bubble Sort</button>
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