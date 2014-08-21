/**
 * Created by zhangwei on 14-8-21.
 */
describe('guessNumber', function () {

    var result;

    beforeEach(function () {

    });

    it('it should be a num ',function() {
        var generate = AnswerGenerate();

        result = true;

        if(/^d/.test(generate)){
            result = false;
        }

        expect(result).toBe(true);
    });

    it('lenght is 4 ',function() {
        var generate = AnswerGenerate();

        result = true;

        if(generate.length !== 4){
            result = false;
        }

        expect(result).toBe(true);
    });

    it('the four number is different',function() {
        var generate = AnswerGenerate();

        result = true;

        var num1 = generate.charAt(0);
        var num2 = generate.charAt(2);
        var num3 = generate.charAt(3);
        var num4 = generate.charAt(4);

        if(num1 === num2 || num1 === num3 || num1 === num4 || num2 === num1 || num2 === num3 || num2 === num4){
            result = false;
        }

        if(num3 === num1 || num3 === num2 || num3 === num4 || num4 === num1 || num4 === num2 || num4 === num3){
            result = false;
        }

        expect(result).toBe(true);
    });

    it('the number is random',function() {
        var generate1 = AnswerGenerate();

        var generate2 = AnswerGenerate();

        result = true;

        if(generate1 === generate2){
            result = false;
        }

        expect(result).toBe(true);
    });

});