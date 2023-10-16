import {mergeSort,removeDuplicates} from './misc.js'
import {Node} from './node.js'

function Tree(arrayInit) {
  const sortedArray = mergeSort(arrayInit)
  const filteredArray = removeDuplicates(sortedArray)
  const root = buildTree(filteredArray)


  function buildTree(sortedArray) {

    if (sortedArray.length === 0) {
      return null
    }

    const start = 0;
    const end = sortedArray.length
    const middle = Math.floor(start + end / 2)

    let newMiddleNode = Node(sortedArray[middle])

    newMiddleNode.left = buildTree(sortedArray.slice(0, middle))
    newMiddleNode.right = buildTree(sortedArray.slice(middle + 1))

    return newMiddleNode

  }

  function insert(value) {

    if (this.find(value) != null) {
      return
    }

    let currentNode = root;
    let parentNode = null;

    while (currentNode !== null) {
      parentNode = currentNode;

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return;
      }
    }


    const newNode = Node(value);

    if (value < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

function remove(value) {
    if (this.find(value) == null) {
        return;
    }

    function findParent(node, value) {
        if (node === null || (node.left && node.left.data === value) || (node.right && node.right.data === value)) {
            return node;
        }
        if (value < node.data) {
            return findParent(node.left, value);
        } else {
            return findParent(node.right, value);
        }
    }

    let parentOfFindValue = findParent(this.root, value);
    let findValue;

    if (parentOfFindValue) {
        if (parentOfFindValue.left && parentOfFindValue.left.data === value) {
            findValue = parentOfFindValue.left;
        } else {
            findValue = parentOfFindValue.right;
        }
    } else {
        findValue = this.root;
    }

    if (findValue.left === null && findValue.right === null) { //case one, no children
        // Node to remove has no children
        if (parentOfFindValue) {
            if (parentOfFindValue.left === findValue) {
                parentOfFindValue.left = null;
            } else {
                parentOfFindValue.right = null;
            }
        } else {
            // Handle removing the root node if necessary
            this.root = null;
        }
    }
  
  if (findValue.left !== null && findValue.right !== null) { // case two, two children
      let nodeGoingLeft = findValue.right;
      let nodeGoingLeftParent = findValue; // Start with findValue as the parent
  
      while (nodeGoingLeft.left !== null) {
          nodeGoingLeftParent = nodeGoingLeft;
          nodeGoingLeft = nodeGoingLeft.left;
      }
  
      // Now, nodeGoingLeft contains the in-order successor
  
      // Replace the data of the node to be deleted with the in-order successor data
      findValue.data = nodeGoingLeft.data;
  
      // Handle the case where the in-order successor has a right child
      if (nodeGoingLeftParent === findValue) {
          findValue.right = nodeGoingLeft.right;
      } else {
          nodeGoingLeftParent.left = nodeGoingLeft.right;
      }
  }
  
  if(findValue.left === null || findValue.right === null){ //case three, one child
    if(parentOfFindValue && parentOfFindValue.left === findValue){
        if(findValue.left != null){
          parentOfFindValue.left = findValue.left
        }else{
          parentOfFindValue.left = findValue.right
        }

    }else{
      if(findValue.left != null){
          parentOfFindValue.right = findValue.left
        }else{
          parentOfFindValue.right = findValue.right
        }
    }
  }
}




  function levelOrder() {
    let visited = []
    let queue = []

    queue.push(root)

    while (queue.length > 0) {
      let currentNode = queue.shift()
      visited.push(currentNode.data)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return visited
  }

  function find(value, currentNode = this.root) {
    if (currentNode == null || currentNode.data == value) {
      return currentNode
    }
    if (currentNode.data > value) {
      return find(value, currentNode.left)
    } else {
      return find(value, currentNode.right)
    }
  }

function inOrder(callbackFn, node = this.root, list = []) {
    if (node == null) {
        return list; // Return the list at the end
    }
    inOrder(callbackFn, node.left, list);
    if (typeof callbackFn === 'function') {
        callbackFn(node);
    } else {
        list.push(node.data);
    }
    inOrder(callbackFn, node.right, list);
    return list;
}


  function preOrder(callbackFn, node = this.root, list=[]){
    if (node == null) {
        return list; // Return the list at the end
    }
    if (typeof callbackFn === 'function') {
        callbackFn(node);
    } else {
        list.push(node.data);
    }
    inOrder(callbackFn, node.left, list);
    inOrder(callbackFn, node.right, list);
    return list;
    
  }

  function postOrder(callbackFn, node = this.root, list=[]){

    inOrder(callbackFn, node.left, list);
    inOrder(callbackFn, node.right, list);
    if (node == null) {
        return list; // Return the list at the end
    }
    if (typeof callbackFn === 'function') {
        callbackFn(node);
    } else {
        list.push(node.data);
    }
    return list;
  }

  function height(node){
    // node to leaf node
    if(node == null){
      return 0
    }
    let nodeLeft = height(node.left)
    let nodeRight = height(node.right)
    return Math.max(nodeLeft,nodeRight)+1
  }

  function depth(node){
    // root to node
    if(this.find(node.data) == null){
      return null
    }
    let currentNode = this.root
    let depth = 0
    while(node != currentNode){
      if(currentNode.data > node.data){
        currentNode = currentNode.left
        depth++
      }else{
        currentNode = currentNode.right
        depth++
      }
    }
    return depth
    
  }

  function isBalanced(node = this.root){
    if(node == null){
      return true
    }

    let lh = height(node.left)
    let rh = height(node.right)
    if (Math.abs(lh - rh) <= 1 && isBalanced(node.left)== true && isBalanced( node.right) == true){
        return true
    }
    return false

    
  }

  function rebalance(){
    let inOrderList = this.inOrder()
    this.root = this.buildTree(inOrderList)
    
  } 
  
  return {
    root,
    buildTree,
    insert,
    remove,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance
  }
}


export{Tree}