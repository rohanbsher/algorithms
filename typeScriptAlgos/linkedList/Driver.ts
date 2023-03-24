import { LinkedList } from "./Linkedlist";

const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
const list1 = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
const list2 = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
const list3 = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));

list.printlist(list.swapNodeByK(list, 2));
list.printlist(list.swapNodeByK(list1, 3));
list.printlist(list.swapNodeByK(list2, 1));
list.printlist(list.swapNodeByK(list3, 4));
