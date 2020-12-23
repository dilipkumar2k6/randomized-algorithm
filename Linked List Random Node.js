/**
 * Refer https://leetcode.com/problems/linked-list-random-node/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {    
    const K = 1;    
    let i = 0; 
    
    // Initialize reservior
    const R = new Array(K).fill(0);
    let node = this.head;
    
    // copy first K items into reservior
    while(i < K) {
        R[i]  = node.val;
        node = node.next;
        i++;
    }

    while (node) {
        // random generated index between 0 to len i +1
        const j = Math.floor(Math.random() * (i+1));
        if ( j < K ) {
            R[j] = node.val;            
        }
        // move on to the next node
        i += 1;
        node = node.next;
    }
    return R[0];    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */