// 852. Peak Index in a Mountain Array

/*
Q. An array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

*/

function peakIndexInMountainArrayTS(arr: number[]): number {
    let start:number = 0;
    let end:number = arr.length - 1;
    
    while(start < end){
        let middle:number = Math.floor(start + (end - start) / 2);
        if(arr[middle] > arr[middle + 1]){
            end = middle;
        }else{
            start = middle + 1;
        }
    }
    return start;
};