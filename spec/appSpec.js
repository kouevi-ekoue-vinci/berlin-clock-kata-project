import { berlinClock } from '../app.js';

describe("getFiveHours function should return the answer for the clock", function() {

    const clock = new berlinClock();

    it("getFiveHours should be return RROO when given 13" ,function(){
        
        const result = clock.getFiveHours(13);

        expect(result).toBe('RROO');
    });

    it("getFiveHours should be return RRRR when given 21" ,function(){
        
        const result = clock.getFiveHours(21);

        expect(result).toBe('RRRR');
    });

    it("getFiveHours should be return OOOO when given 2" ,function(){
        
        const result = clock.getFiveHours(2);

        expect(result).toBe('OOOO');
    });

    it("getFiveHours should be return RRRO when given 18" ,function(){
        
        const result = clock.getFiveHours(18);

        expect(result).toBe('RRRO');
    });

    it("getFiveHours should be return RROO when given 0" ,function(){
        
        const result = clock.getFiveHours(0);

        expect(result).toBe('OOOO');
    });

    it("getFiveHours should be return RROO when given 24" ,function(){
        
        const result = clock.getFiveHours(24);

        expect(result).toBe('RRRR');
    });

describe("getSeconds function should return the answer for the clock", function() {
        const clock = new berlinClock();

        it("getSeconds should be return R when given 2" ,function(){

            const result = clock.getSeconds(2);

            expect(result).toBe('R');
        });

        it("getSeconds should be return O when given 1" ,function(){

            const result = clock.getSeconds(1);

            expect(result).toBe('O');
        });

        it("getSeconds should be return R when given 4" ,function(){

            const result = clock.getSeconds(4);

            expect(result).toBe('R');
        });

    });

describe("getHours function should return the answer for the clock", function() {
        const clock = new berlinClock();

        it("getHours should be return RROO when given 2" ,function(){

            const result = clock.getHours(2);

            expect(result).toBe('RROO');
        });

        it("getHours should be return ROOO when given 1" ,function(){

            const result = clock.getHours(1);

            expect(result).toBe('ROOO');
        });

        it("getHours should be return RRRO when given 3" ,function(){

            const result = clock.getHours(3);

            expect(result).toBe('RRRO');
        });

        it("getHours should be return RRRR when given 4" ,function(){

            const result = clock.getHours(4);

            expect(result).toBe('RRRR');
        });

    });

    describe("getFiveMinutes function should return the answer for the clock", function() {
        const clock = new berlinClock();

        it("getFiveMinutes should be return OOOOOOOOOOO when given 2" ,function(){

            const result = clock.getFiveMinutes(2);

            expect(result).toBe('OOOOOOOOOOO');
        });

        it("getFiveMinutes should be return YOOOOOOOOOO when given 6" ,function(){

            const result = clock.getFiveMinutes(6);

            expect(result).toBe('YOOOOOOOOOO');
        });

        it("getFiveMinutes should be return YYROOOOOOOO when given 17" ,function(){

            const result = clock.getFiveMinutes(17);

            expect(result).toBe('YYROOOOOOOO');
        });

        it("getFiveMinutes should be return YYRYYROOOOO when given 34" ,function(){

            const result = clock.getFiveMinutes(34);

            expect(result).toBe('YYRYYROOOOO');
        });
        it("getFiveMinutes should be return YYRYYRYYRYY when given 58" ,function(){

            const result = clock.getFiveMinutes(58);

            expect(result).toBe('YYRYYRYYRYY');
        });

    });

    describe("getSingleMinutes function should return the correct representation for the clock", function() {
        const clock = new berlinClock();


        it("getSingleMinutes should return 'OOOO' when given 0", function() {
            const result = clock.getSingleMinutes(0);
            expect(result).toBe('OOOO');
        });
    
        it("getSingleMinutes should return 'YOOO' when given 1", function() {
            const result = clock.getSingleMinutes(1);
            expect(result).toBe('YOOO');
        });
    
        it("getSingleMinutes should return 'YYOO' when given 2", function() {
            const result = clock.getSingleMinutes(2);
            expect(result).toBe('YYOO');
        });
    
        it("getSingleMinutes should return 'YYYO' when given 3", function() {
            const result = clock.getSingleMinutes(3);
            expect(result).toBe('YYYO');
        });
    
        it("getSingleMinutes should return 'YYYY' when given 4", function() {
            const result = clock.getSingleMinutes(4);
            expect(result).toBe('YYYY');
        });
    });

});