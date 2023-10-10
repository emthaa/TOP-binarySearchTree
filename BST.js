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


// ---------------------------------------------------------------------
function Tree(arrayInit){
    const sortedArray = mergeSort(arrayInit)
    const root = buildTree(sortedArray)


    function buildTree(sortedArray){
        
        if(sortedArray.length === 0){
            return null
        }

        const start = 0;
        const end = sortedArray.length
        const middle = Math.floor(start+end/2)

        let newMiddleNode = Node(sortedArray[middle])

        newMiddleNode.left = buildTree(sortedArray.slice(0,middle))
        newMiddleNode.right = buildTree(sortedArray.slice(middle+1)) 

        return newMiddleNode

    }
    return{
        root,
        buildTree,

    }
}



function Node(data,left = null,right = null){
    return{
        data,
        left,
        right
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return ;
    }

    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }

  };

const t = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
prettyPrint(t.root)










