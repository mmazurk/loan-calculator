
// window.onload = (event) => {
//   //code here
// console.log("Hello")

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

// I need to check and see if it inserted the correct value into the page

it('should insert the correct value into the page', function() {
  var foo = document.getElementById('monthly-payment')
  expect(foo.innerText).toEqual('$7301.32');
})

// };

