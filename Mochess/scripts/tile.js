import { WIDTH, HEIGHT } from './main.js';

export class Tile {

    constructor(x, y) {
        this.tileX = x;
        this.tileY = y;
    }

    print() {
        console.log("x: " + this.tileX);
        console.log("y: " + this.tileY);
        console.log("");
    }

    isEqualTo(tileTwo) {
        if ((this.getX() == tileTwo.getX()) && (this.getY() == tileTwo.getY())) {
            return true;
        }
        return false;
    }
}