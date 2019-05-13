const mergeTwoLists = require('../controllers/merge-two-sorted-lists');

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));
// console.log(mergeTwoLists(list2));
