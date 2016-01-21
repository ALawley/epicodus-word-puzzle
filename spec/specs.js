describe("wordPuzzle", function(){
  it("will take in string and replace all vowels with the - symbol", function() {
    expect(wordPuzzle("hello world")).to.equal("h-ll- w-rld");
  });
});
