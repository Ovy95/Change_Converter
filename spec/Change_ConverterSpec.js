
describe("ChangeConverter", function() {
  var change;

  beforeEach (function () {
    change = new ChangeConverter();
  });

  describe("First Tests",function() {
    it ("returns values passed",function() {
      expect(change.change(1)).toEqual(1);
    })
  })
});