/**
 * Created by zhangwei on 14-8-21.
 */
describe('guessNumber', function () {

    var input;
    beforeEach(function () {
        input = '1234';
    });

    it('it should return 4A0B',function() {
        var answerGenerate = new AnswerGenerate();
        spyOn(answerGenerate, 'generate').and.returnValue('1234');
        var compareNumber = new CompareNumber();
        var guess = new Guess(answerGenerate,compareNumber);
        var tips = guess.guess(input);
        var truetips = compareNumber.compare(answerGenerate.generate(),input);
        expect(tips).toBe(truetips);
    });

});