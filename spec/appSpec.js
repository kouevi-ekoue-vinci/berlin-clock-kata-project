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

        

    });

});