class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var preorderTraversal = function(root) {
    if(!root) return [];

    const stack = [];
    const result = [];

    stack.push(root);

    while(stack.length){
        const node = stack.pop();
        result.push(node.val);

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return result;
};

//Example usage:
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

console.log("Preorder traversal:", preorderTraversal(root1));

const root2 = null;
console.log("Preorder traversal:", preorderTraversal(root2));

const root3 = new TreeNode(1);
console.log("Preorder traversal:", preorderTraversal(root3));