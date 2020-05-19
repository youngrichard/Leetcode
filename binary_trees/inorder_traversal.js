/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * Inorder: left -> root -> right
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
function inorderTraversalRecursive(root) {
  const output = [];

  function recurse(node) {
    // Exit condition
    if (!node) return;

    recurse(node.left);
    output.push(node.val);
    recurse(node.right);
  }

  recurse(root);
  return output;
}

// Iterative Solution
function inorderTraversalIterative(root) {
  if (!root) return [];

  const stack = [];
  const output = [];
  let node = root;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      output.push(node.val);
      node = node.right;
    }
  }

  return output;
}
