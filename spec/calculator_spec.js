describe("Calculator", function() {
    describe("Basic", function() {
        it("should evaluate '' to 0", function() {
            expect(calculator.add('')).toBe(0);
        });
        it("should evaluate '42' to 42", function() {
            expect(calculator.add('42')).toBe(42);
        });
    });
});
