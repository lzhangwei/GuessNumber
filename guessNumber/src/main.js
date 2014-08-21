function CompareNumber(){

}

CompareNumber.prototype.compare = function(answer, input){
    var anum = 0;
    var cnum = 0;
    for(var i = 0; i < answer.length; i++){
        if(answer.charAt(i) === input.charAt(i)){
            anum ++;
        }
        if(answer.search(input.charAt(i)) != -1){
            cnum ++;
        }
    }
    var bnum = cnum - anum;
    return anum + 'A' + bnum + 'B';
};