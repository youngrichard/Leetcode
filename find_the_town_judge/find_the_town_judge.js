/**
 * A simple and readable solution using sets.
 *
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

function findJudge(N, trust) {
  // Take care of edge case
  if (!trust.length) return N;

  const judges = new Set();
  const trustees = new Set();

  // key: trusted
  // value: set of trustees
  const hash = {};

  // Iterate through the input and populate the hash
  for (let [trustee, trusted] of trust) {
    if (!hash[trusted]) {
      hash[trusted] = new Set();
    }

    hash[trusted].add(trustee);
    trustees.add(trustee);
  }

  // Iterate through the trusted to find potential judges
  for (let trusted of Object.keys(hash)) {
    // Satisfies conditions 1 and 2 in the problem description
    if (hash[trusted].size === trustees.size && !trustees.has(trusted)) {
      judges.add(trusted);
    }
  }

  // If there is only one judge, return it
  if (judges.size === 1) return [...judges][0];

  return -1;
}
