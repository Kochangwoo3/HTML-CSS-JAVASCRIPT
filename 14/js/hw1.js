var espresso = 10;
var milk = 170;
var chocolateSyrup = 50;
var whippedCream = 60;

var latte = espresso + milk;
var mocha = latte + chocolateSyrup;
var whippingMocha = mocha + whippedCream;

// 메뉴별 칼로리 테스트
// 에스프레소 칼로리  10
console.log(espresso);
// 라떼 칼로리  180
console.log(latte);
// 모카 칼로리  230
console.log(mocha);
// 모카(휘핑 추가) 칼로리  290
console.log(whippingMocha);