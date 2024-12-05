export class Tile {

    tileX;
    tileY;

    constructor(x, y) {
        tileX = x;
        tileY = y;
    }

    drawX = tileX - 1;
    drawY = tileY - 1;

    isEqualTo(tileTwo) {
        if ((this.getX() == tileTwo.getX()) && (this.getY() == tileTwo.getY())) {
            return true;
        }
        return false;
    }
}