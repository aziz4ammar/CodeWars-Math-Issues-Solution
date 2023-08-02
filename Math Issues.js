Math.round = function(number) {
    return Math.floor(number + 0.5);
  };
  
  Math.ceil = function(number) {
    return number % 1 === 0 ? number : Math.floor(number) + 1;
  };
  
  Math.floor = function(number) {
    return number < 0 ? Math.ceil(number) : number - (number % 1);
  };
  