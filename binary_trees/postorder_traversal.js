/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * Postorder: left -> right -> root
 *
 * function TreeNode(val, left, right) {
 *   this.val = val || 0;
 *   this.left = left || null;
 *   this.right = right || null;
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive Solution
function postorderTraversalRecursive(root) {
  const output = [];

  function recurse(node) {
    if (!node) return;

    recurse(node.left);
    recurse(node.right);
    output.push(node.val);
  }

  recurse(root);
  return output;
}

// Iterative Solution
// This is basically the opposite of preorder traversal
function postorderTraversalIterative(root) {
  if (!root) return [];

  const stack = [root];
  const output = [];

  while (stack.length) {
    const node = stack.pop();

    output.unshift(node.val); // Unshift inserts an item at the beginning of an array

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return output;
}
