describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('keeps track of the amount of swap calls'), function(){
        spyOn(bubbleSort, swap).and.callThrough(); 

        //bubbleSort([]);
        swap();

        expect(bubbleSort.swap.calls.count()).toEqual(arr.length)
    };
  });
