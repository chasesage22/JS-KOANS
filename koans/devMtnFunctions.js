describe('First Functions', function(){
  it('should create a function returns the current year', function(){
    var getYear = function() {
    return 2014;}
    expect(getYear()).toBe(2014);
  });
  it('should create a function returns the current year and saves it', function(){
    var current = function() {
      return 2014;}
    var currentYearVar = current ();
    expect(currentYearVar).toBe(2014);
  });
  it('should create a multiply function', function(){
    //Write a function called multiply that takes in two parametrs, multiplies them together, and returns the answer
    var multiply = function(num1, num2) {
    return num1*num2;
    }
    expect(multiply(2,4)).toBe(8);
  });
})

