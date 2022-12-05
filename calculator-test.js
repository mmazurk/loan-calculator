
it('should calculate the monthly rate correctly', function () {
  const testvalues = {
    amount: 1600000,
    years: 30,
    rate: 3.63
  };
  expect(calculateMonthlyPayment(testvalues)).toEqual('7301.32')
  
});


it("should return a result with 2 decimal places", function() {
  const testvalues = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(testvalues)).toEqual('131.00')
});


