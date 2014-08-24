/**
 * Created by zhangwei on 14-8-21.
 */
describe('guessNumber', function () {

    var input;
    var answerGenerate;
    var compareNumber;

    beforeEach(function () {
        input = '7234';
        answerGenerate = new AnswerGenerate();
        compareNumber = new CompareNumber();
    });

    it('it should return 3A0B',function() {

        spyOn(answerGenerate, 'generate').and.returnValue('1234');

        spyOn(compareNumber, 'compare').and.returnValue('3A0B');

        var guess = new Guess(answerGenerate,compareNumber);
        var tips = guess.guess(input);

        expect(tips).toBe('3A0B');

    });

    it('tracks that the compare was called',function() {
        spyOn(answerGenerate, 'generate').and.returnValue('1234');
        spyOn(compareNumber, 'compare');

        var guess = new Guess(answerGenerate,compareNumber);
        guess.guess(input);

        expect(compareNumber.compare).toHaveBeenCalledWith('1234',input);
    });

    it('tracks that the generate was called',function() {
        spyOn(answerGenerate, 'generate').and.returnValue('1234');

        var guess = new Guess(answerGenerate,compareNumber);
        guess.guess(input);

        expect(answerGenerate.generate).toHaveBeenCalled();
    });

});