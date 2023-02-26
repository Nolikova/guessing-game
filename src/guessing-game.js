class GuessingGame {
    min = null;
    max = null;
    current = null;
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if ([this.min, this.max, this.current].some === null) {
            throw "call setRange method first";
        }

        this.current = this.min + Math.ceil((this.max - this.min) / 2);
        return this.current;
    }

    lower() {
        this.max = this.current;
    }

    greater() {
        this.min = this.current;
    }
}

module.exports = GuessingGame;
