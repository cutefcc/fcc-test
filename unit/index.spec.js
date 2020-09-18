describe('加法函数的测试', function () {
    it("1 加 1应该等于2", function () {
        expect(Add1(1)).toBe(2);
    });
    it("2 加 2 === 4", function () {
        expect(Add2(2)).toBe(4);
    });
    it("3 加 3 === 6", function () {
        expect(Add3(3)).toBe(4);
    });
});