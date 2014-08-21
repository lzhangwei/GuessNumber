/**
 * Created by zhangwei on 14-8-21.
 */
function Guess(answerGenerate,compareNumber){
    this.answerGenerate = answerGenerate;
    this.compareNumber = compareNumber;
}

Guess.prototype.guess = function(input){
    var answer = this.answerGenerate.generate();
    var tips = this.compareNumber.compare(answer,input);
    return tips;
};