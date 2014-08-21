/**
 * Created by zhangwei on 14-8-21.
 */
function AnswerGenerate(){
    var result = '';
    for (var i = 0; i < 4; i++){
        var num = parseInt(Math.random()*10);
        while(result.search(num) !== -1){
            num = parseInt(Math.random()*10);
        }
        result =result + num.toString();
    }
    return result;
}