import { LinkedList } from './linked-list-impl'; 

describe('LinkedList', () => {
  describe('swapNodeByK', () => {
    it('should swap the adjacent nodes k = 2', () => {
      const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
      const expected = new LinkedList(2, new LinkedList(1, new LinkedList(4, new LinkedList(3, new LinkedList(6, new LinkedList(5, null))))));
      
      const ans = list.swapNodeByK(list, 2);
      expect(ans).toEqual(expected);
    });
  });

  describe('swapNodeByK', () => {
    it('should swap the nodes in threes k = 3', () => {
      const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5, new LinkedList(6))))));
      const expected = new LinkedList(3, new LinkedList(2, new LinkedList(1, new LinkedList(6, new LinkedList(5, new LinkedList(4, null))))));
      
      const ans = list.swapNodeByK(list, 3);
      expect(ans).toEqual(expected);
    });
  });

  describe('swapNodeByK', () => {
    it('No change 1 node', () => {
      const list = new LinkedList(1);
      const expected = new LinkedList(1, null);
      
      const ans = list.swapNodeByK(list, 3);
      expect(ans).toEqual(expected);
    });
  });

  describe('removeTargetNode', () => {
    it('Remove Target Node 3 from the middle of list', () => {
      const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(3, new LinkedList(5, new LinkedList(6))))));
      const expected = new LinkedList(1, new LinkedList(2, new LinkedList(5, new LinkedList(6))));
     
      const ans = list.removeTargetNode(list, 3);
      expect(ans).toEqual(expected);
    });
  });

  describe('removeTargetNode', () => {
    it('Remove Target Node 1 from the start of list', () => {
      const list = new LinkedList(1, new LinkedList(1, new LinkedList(3, new LinkedList(1, new LinkedList(5, new LinkedList(1))))));
      const expected = new LinkedList(3, new LinkedList(5));
     
      const ans = list.removeTargetNode(list, 1);
      expect(ans).toEqual(expected);
    });
  });

  describe('removeTargetNode', () => {
    it('Remove all nodes from the list and return undefined', () => {
      const list = new LinkedList(2, new LinkedList(2, new LinkedList(2, new LinkedList(2, new LinkedList(2, new LinkedList(2))))));
      // const expected = new LinkedList(3);
     
      const ans = list.removeTargetNode(list, 2);
      expect(ans).toEqual(undefined);
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
