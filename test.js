import { randomArray ,prettyPrint} from "./misc.js";
import { Tree} from './BST.js'


const newArray = randomArray(20) 

const testTree = new Tree(newArray)

console.log(testTree.isBalanced())

console.log(testTree.levelOrder())
console.log(testTree.preOrder())
console.log(testTree.postOrder())
console.log(testTree.inOrder())

testTree.insert(101)
testTree.insert(202)
testTree.insert(303)

console.log(testTree.isBalanced())

testTree.rebalance()

console.log(testTree.isBalanced())

console.log(testTree.levelOrder())
console.log(testTree.preOrder())
console.log(testTree.postOrder())
console.log(testTree.inOrder())

prettyPrint(testTree.root)