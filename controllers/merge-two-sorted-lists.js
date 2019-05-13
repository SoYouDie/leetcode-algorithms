/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l2) return l1;
    if (!l1) return l2;
    let result;
    function takeOffNodes(n1, n2) {
        if (!n2 || n1 >= n2) {
            if (!result) {
                result = new ListNode(n1.val);
            } else {
                result.next = new ListNode(n1.val);
            }
            l1 = l1.next;
        } else {
            if (!result) {
                result = new ListNode(n2.val);
            } else {
                result.next = new ListNode(n2.val);
            }
            l2 = l2.next;
        }
        return;
    }
    while (l1 || l2) {
        takeOffNodes(l1, l2);
    }
    return result;
};

module.exports = mergeTwoLists;

function ListNode(val) {
    this.val = val;
    this.next = null;
}
