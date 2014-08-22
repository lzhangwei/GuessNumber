/**
 * Created by zhangwei on 14-8-21.
 */
function Guess(answerGenerate,compareNumber){
    this.answer = answerGenerate.generate();
    this.compareNumber = compareNumber;
}

Guess.prototype.guess = function(input){

    var tips = this.compareNumber.compare(this.answer,input);

    return tips;
};