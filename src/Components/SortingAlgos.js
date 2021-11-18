export function test(array) {
    const animations = {}
    for(let i=0; i<array.length; i++) {
        animations[i] = [];
        for(let j=i+1; j<array.length; j++) {
            animations[i].push(j)
        }
    }
    return animations
} 

export function bubbleSort(array) {
    const animations = []
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-i-1; j++) {
            animations.push([j, j+1])
        }
    }
    return animations
}

export function selectionSort(array) {
    const animations = [] 
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
            animations.push([i,j])
        }
    }
    return animations
}