export class berlinClock {

    getFiveHours(hours) {
        let row = '';
        let litBlock = Math.floor(hours / 5);

        for (let i = 0; i < 4; i++) {
            if (i < litBlock) {
                row += 'R'; // R -> Pour Red quand c'est allumée
            } else {
                row += 'O'; // O -> Pour Off quand c'est éteint
            }
        }
        return row;
    }

    getSeconds(seconds) {
        return seconds % 2 === 0 ? 'R' : 'O';
    }

    getHours(hours) {
        let row = '';
        let litBlock = hours % 5;

        for (let i = 0; i < 4; i++) {
            if (i < litBlock) {
                row += 'R'; // R -> Pour Red quand c'est allumée
            } else {
                row += 'O'; // O -> Pour Off quand c'est éteint
            }
        }
        return row;
    }

    getFiveMinutes(minutes) {
        let litLamps = Math.floor(minutes / 5);
        let row = '';

        for (let i = 1; i <= 11; i++) {
            if (i <= litLamps) {
                row += (i % 3 === 0) ? 'R' : 'Y';
            } else {
                row += 'O';
            }
        }
        return row;
    }
}
