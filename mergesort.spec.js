describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        var sample = [4, 7, 3, 1];
        var splitOutput = split(sample);
        expect(splitOutput).toEqual([[4, 7], [3, 1]]);
    });
    it('returns original array if length is 1', function(){
        var sample2 = [1];
        expect(split(sample2)).toEqual([1]);
    });
    it('handles an odd array', function(){
        var sample3 = [5, 8, 3, 9, 10];
        expect(split(sample3)).toEqual([[5, 8, 3], [9, 10]]);
    })
  });

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        
    });
  });