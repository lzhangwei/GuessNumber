describe('guessNumber', function () {
    var answer;
    var inputs;

    beforeEach(function () {
        answer = '1234';
        inputs = ['1234', '5678', '1739', '4321'];
    });

    it('it should return 4A0B',function() {
       var compareNumber = new CompareNumber();
       var tips = compareNumber.compare(answer,inputs[0]);
       expect(tips).toBe('4A0B');
    });

    it('it should return 0A0B',function() {
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs[1]);
        expect(tips).toBe('0A0B');
    });

    it('it should return 2A0B',function() {
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs[2]);
        expect(tips).toBe('2A0B');
    });

    it('it should return 0A4B',function() {
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs[3]);
        expect(tips).toBe('0A4B');
    });
});
