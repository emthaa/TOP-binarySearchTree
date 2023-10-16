function mergeSort(array){
    if(array.length < 2){
      return array
    }
  
    let middlePoint = Math.floor(array.length/2)
    let arrayLeft = array.slice(0,middlePoint)
    let arrayRight = array.slice(middlePoint,array.length)
  
    return merge(mergeSort(arrayLeft),mergeSort(arrayRight))
  }
  
  function merge(leftArray,rightArray)  {
    const sortedArray = []
    
    let leftI = 0
    let rightI = 0
  
  
    while(leftI<leftArray.length && rightI<rightArray.length){
    
      if(leftArray[leftI] < rightArray[rightI]){
        sortedArray.push(leftArray[leftI])
        leftI++
      }else{
        sortedArray.push(rightArray[rightI])  
        rightI++
      }
  
      
    
      
    }
  
    while(leftI<leftArray.length){
        sortedArray.push(leftArray[leftI])
        leftI++
      }
      while(rightI<rightArray.length){
        sortedArray.push(rightArray[rightI])  
        rightI++
      }
  
    return sortedArray
    
  }


  function removeDuplicates(arr) {
    return arr.filter((item,
      index) => arr.indexOf(item) === index);
  }

function randomArray(n){
    let randomArr = [];
    for (let i = 0; i < n; i++) {
        randomArr.push(Math.floor(Math.random() * 100) + 1);
    }
    return randomArr
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

export{mergeSort,randomArray,removeDuplicates,prettyPrint}