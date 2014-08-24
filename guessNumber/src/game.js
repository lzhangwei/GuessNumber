/**
 * Created by zhangwei on 14-8-22.
 */
function Game(){
    this.times = 6;
    this.guess;
}

Game.prototype.start = function() {
    var answerGenerate = new AnswerGenerate();
    var compareNumber = new CompareNumber();
    this.guess = new Guess(answerGenerate, compareNumber);
    this.times = 6;
    return 'Welcome,you have ' + this.times + ' times to challenge!';
};

Game.prototype.check = function(input) {
    if(/^d/.test(input)){
        return false;
    }
    for(var i = 0; i < 4; i++){
       for(var j = i + 1; j < 4; j++){
           if(input.charAt(i) === input.charAt(j)){
               return false;
           }
       }
    }
    return true;
};

Game.prototype.commit = function(input) {
    var tips = this.guess.guess(input);
    if(tips === '4A0B'){
        this.times--;
        return 'Congratulations!';
    } else {
        this.times--;
        var result = '';
        if(this.times === 0){
            result = 'Sorry,you fail!';
        } else {
            result = 'Welcome,you have ' + this.times + ' times to challenge!';
        }

        return result;
    }
};