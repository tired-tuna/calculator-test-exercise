describe('calculateMonthlyPayment', function() {

it('should calculate the monthly rate correctly', function () {
  const values = {amount:20000, rate:7.5, years:4};
  expect(calculateMonthlyPayment(values)).toEqual('483.58');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount:20000, rate:7.5, years:4};
  const result = calculateMonthlyPayment(values);
  expect(result.split('.')[1].length).toEqual(2);
});

});


