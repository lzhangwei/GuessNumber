/**
 * Created by zhangwei on 14-8-22.
 */
describe('guessNumber', function () {

    beforeEach(function () {

    });

    it('should give the 6 times prompt when start',function() {

        var game = new Game();
        expect(game.start()).toBe('Welcome,you have 6 times to challenge!');
    });

    it('should init the guess when start',function() {

        var game = new Game();
        game.start();

        expect(game.guess != null).toBe(true);
    });

    it('should check the input with it have no same number',function() {
        var game = new Game();
        game.start();

        expect(game.check('1123')).toBe(false);
        expect(game.check('1523')).toBe(true);
    });

    it('should give the correct prompt times when input is false', function() {

        var game = new Game();
        game.start();

        spyOn(game.guess, 'guess').and.returnValue('0A4B');
        var input = '1357';
        expect(game.commit(input)).toBe('Welcome,you have 5 times to challenge!');
        expect(game.commit(input)).toBe('Welcome,you have 4 times to challenge!');
        expect(game.commit(input)).toBe('Welcome,you have 3 times to challenge!');
        expect(game.commit(input)).toBe('Welcome,you have 2 times to challenge!');
        expect(game.commit(input)).toBe('Welcome,you have 1 times to challenge!');
    });

    it('should prompt congratulations  when input is correct', function() {

        var game = new Game();
        game.start();

        spyOn(game.guess, 'guess').and.returnValue('4A0B');
        expect(game.commit('1234')).toBe('Congratulations!');
    });

    it('should prompt you have failed when 6th is failed', function() {

        var game = new Game();
        game.start();

        game.times = 1;
        spyOn(game.guess, 'guess').and.returnValue('0A3B');

        expect(game.commit('1294')).toBe('Sorry,you fail!');
    });

    it('tracks that the guess was called',function() {
        var game = new Game();
        game.start();

        spyOn(game.guess, 'guess').and.returnValue('0A4B');
        game.commit('2345');

        expect(game.guess.guess).toHaveBeenCalled();
    });

});