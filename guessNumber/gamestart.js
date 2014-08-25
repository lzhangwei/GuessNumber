/**
 * Created by zhangwei on 14-8-25.
 */
$(document).ready(function(){
    var game = new Game();
    $('#start').on('click', function(){
        var prompt = game.start();
        console.log('prompt:'+prompt);
        $('#prompt').text(prompt);
    });
    $('#submit').on('click', function(){
        var inputs = $('#inputs').val();
        if(game.check(inputs)){
            var prompt = game.commit(inputs);
            $('#prompt').text(prompt);
        }else{
            alert('请输入没有重复的四位数！');
        }
    });
});