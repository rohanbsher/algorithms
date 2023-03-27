import { LinkedList } from './linked-list-impl'; 

describe('LinkedList', () => {
  describe('swapNodeByK', () => {
    it('should swap the nodes in the list correctly', () => {
      const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
      const expected = new LinkedList(2, new LinkedList(1, new LinkedList(4, new LinkedList(3, new LinkedList(6, new LinkedList(5))))));
      
      const ans = list.swapNodeByK(list, 2);
      expect(ans).toEqual(expected);
    });
  });

  describe('printlist', () => {
    it('should print the values of the list correctly', () => {
      const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
      const expected = '1 2 3 4 5 6 ';
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      list.printlist(list);

      expect(consoleSpy).toHaveBeenCalledWith(expected);

      consoleSpy.mockRestore();
    });
  });
});
