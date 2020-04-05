class MockSvgD3Element {
    constructor () {
        this.width = null;
        this.height = null;
    }
    attr (key, val) {
        this[key] = val;

        return this[key];
    }
    call () { return true; }
    on () { return true; }
}

export default MockSvgD3Element;
