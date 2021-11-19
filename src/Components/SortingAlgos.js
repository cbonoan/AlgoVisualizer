export function test(array) {
    const anims = {}
    for(let i=0; i<array.length; i++) {
        anims[i] = [];
        for(let j=i+1; j<array.length; j++) {
            anims[i].push(j)
        }
    }
    return anims
} 

export function bubbleSort(array) {
    const anims = []
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-i-1; j++) {
            anims.push([j, j+1])
        }
    }
    return anims
}

export function getMergeSortAnims(arr) {
    const animations = [];
    const auxArr = arr.slice(); 
    console.log(arr)
    mergeSort(arr, 0, arr.length-1, auxArr, animations);
    console.log(arr)
    return animations
}

function mergeSort(array, l, r, auxArr, anims) {
    if(l === r) {
        return;
    }

    const mid = Math.floor((l+r)/2);

    mergeSort(auxArr, l, mid, array, anims);
    mergeSort(auxArr, mid+1,r, array, anims);
    merge(array, l, mid, r, auxArr, anims)
}

function merge(array, l, mid, r, auxArr, anims) {
    let i = l; 
    let j = mid+1;
    let k = l; 


    while(i <= mid && j <= r) {
        anims.push([i,j]);
        anims.push([i,j]);
        if(auxArr[i] < auxArr[j]) {
            anims.push([k, auxArr[i]]);
            array[k] = auxArr[i];
            i++;
        } else {
            anims.push([k, auxArr[j]]);
            array[k] = auxArr[j];
            j++;
        }
        k++;
    }

    while(i <= mid) {
        anims.push([i,i]);
        anims.push([i,i]);
        anims.push([k, auxArr[i]])
        array[k] = auxArr[i];
        k++;
        i++;
    }

    while(j <= r) {
        anims.push([j,j]);
        anims.push([j,j]);
        anims.push([k, auxArr[j]]);
        array[k] = auxArr[j];
        j++;
        k++;
    }
}
