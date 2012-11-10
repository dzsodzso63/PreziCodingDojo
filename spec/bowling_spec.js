describe("Bowling", function() {
    describe("Invalid", function() {
        describe("Invalid length", function() {
            bowling_helper('', -1);
            bowling_helper('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', -1);
            bowling_helper('XXXXXXXXXXXXX', -1);
        });
        describe("Invalid characters", function() {
            bowling_helper('ejfbs', -1);
            bowling_helper('ejfbsXXXXXXXXXXXXXXXXXXXXX', -1);
            bowling_helper('12023040..12023040.r', -1);
            bowling_helper('909-9-9-909-9-9-9-9-', -1);
        });
        describe("Invalid pins", function() {
            bowling_helper('38------------------', -1);
            bowling_helper('91------------------', -1);
            bowling_helper('5/5/5/555/5/5/5/5/5/X', -1);
        });
        describe("Invalid bonus", function() {
            bowling_helper('313131313131313131311', -1);
            bowling_helper('3131313131313131313/XX', -1);
            bowling_helper('3131313131313131313/1/', -1);
            bowling_helper('XXXXXXXXXXX/', -1);
            bowling_helper('XXXXXXXXX99/', -1);
            bowling_helper('XXXXXXXXX991', -1);
            bowling_helper('XXXXXXXXX99', -1);
        });
        describe("Missing bonus", function() {
            bowling_helper('313233343536373839X', -1);
            bowling_helper('313233343536373839XX', -1);
            bowling_helper('3132333435363738393/', -1);
        });
    });
    describe("Valid 20", function() {
        bowling_helper('9-9-9-9-9-9-9-9-9-9-', 90);
        bowling_helper('31313131313131313131', 40);
        bowling_helper('5/5/5/545/X5/5/5/5/X', 159);
    });
    describe("Valid 12", function() {
        bowling_helper('XXXXXXXXXXX9', 299);
        bowling_helper('XXXXXXXXXX9/', 289);
        bowling_helper('XXXXXXXXX9/9', 278);
        bowling_helper('XXXXXXXXX9/X', 279);
        bowling_helper('XXXXXXXXXXXX', 300);
        bowling_helper('XXXX--XXXX--', 180);
    });
    describe("Valid 13", function() {
        bowling_helper('XXXX--X5/XX--', 160);
    });
    describe("Valid 21", function() {
        bowling_helper('5/5/5/5/5/5/5/5/5/5/5', 150);
        bowling_helper('5/5/5/5/5/5/5/5/5/5/X', 155);
        bowling_helper('5/5/5/545/5/5/5/5/5/X', 149);
    });
    describe("Valid 11", function() {
        bowling_helper('XXXXXXXXX81', 266);
        bowling_helper('XXXXXXXXX--', 240);
    });
});

function bowling_helper(expression, result){
    it("should evaluate '"+expression+"' to "+result, function() {
        expect(bowling.getScore(expression)).toBe(result);
    });
}