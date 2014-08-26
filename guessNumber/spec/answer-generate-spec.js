/**
 * Created by zhangwei on 14-8-21.
 */
describe('AnswerGenerate', function () {

    var result;

    beforeEach(function () {

    });

    it('it should be a num ',function() {

        var answer = new AnswerGenerate();
        var generate = answer.generate();

        expect(generate).not.toMatch(/^d/);
    });

    it('length is 4 ',function() {

        var answer = new AnswerGenerate();
        var generate = answer.generate();

        expect(generate.length).toBe(4);
    });

    it('the four number is different',function() {

        var answer = new AnswerGenerate();
        var generate = answer.generate();

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

        var answer = new AnswerGenerate();
        var generate1 = answer.generate();

        var answer = new AnswerGenerate();
        var generate2 = answer.generate();

        expect(generate1 !== generate2).toBe(true);
    });

});
