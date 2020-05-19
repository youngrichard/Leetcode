/**
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * Preorder: root -> left -> right
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
function preorderTraversalRecursive(root) {
  const output = [];

  function recurse(node) {
    // Exit condition
    if (!node) return;

    // For preorder traversal, we process the node first
    output.push(node.val);

    recurse(node.left);
    recurse(node.right);
  }

  recurse(root);
  return output;
}

// Iterative Solution
function preorderTraversalIterative(root) {
  if (!root) return [];

  const stack = [root];
  const output = [];

  while (stack.length) {
    const node = stack.pop();

    output.push(node.val);

    // Due to the FILO nature of a stack, push R node before L node.
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return output;
}
