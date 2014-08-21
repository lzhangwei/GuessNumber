/**
 * Created by zhangwei on 14-8-21.
 */
function AnswerGenerate(){

}

AnswerGenerate.prototype.generate = function(){
    var result = '';
    for (var i = 0; i < 4; i++){
        var num = parseInt(Math.random()*10);
        while(result.search(num) !== -1){
            num = parseInt(Math.random()*10);
        }
        result += num.toString();
    }
    return result;
}