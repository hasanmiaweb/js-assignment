//https://github.com/hasanmiaweb/js-assignment

//Assignment number 1. Name: kilometer To Meter

/**kilometer To Meter. solution Start**/
function kilometerToMeter(kilometer) {
  var meterResult = kilometer * 1000;
  if (kilometer > 0) {
    meterResult == meterResult;
  } else {
    meterResult = "kilometer cannot be negative";
  }
  return meterResult;
}
/**kilometer To Meter. solution End**/

//Assignment number 2. Name: Budget Calculator

/**Budget Calculator. solution Start**/

function budgetCalculator(watch, phone, laptop) {
  var shoppingTotalBudget = 0;
  //negative Valuation Check Start
  var negativeValuation = true;
  //negative Valuation Check End
  if (watch < negativeValuation == true) {
    shoppingTotalBudget = "Watch Negative number is not allowed";
  } else if (phone < negativeValuation == true) {
    shoppingTotalBudget = "Phone Negative number is not allowed";
  } else if (laptop < negativeValuation == true) {
    shoppingTotalBudget = "Laptop Negative number is not allowed";
  } else {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    shoppingTotalBudget = watchPrice + phonePrice + laptopPrice;
  }
  return shoppingTotalBudget;
}
/**Budget Calculator. solution End**/

//Assignment number 3. Name: HotelCost

/**Hotel Cost. solution Start**/
function hotelCost(dailyNight) {
  var totalHotelCost = 0;

  if (dailyNight <= 10) {
    var firstnight = dailyNight * 100;
    totalHotelCost = firstnight;
  } else if (dailyNight <= 20) {
    var firstnight = 10 * 100;
    var nightCounting = dailyNight - 10;
    var secendNight = nightCounting * 80;
    totalHotelCost = firstnight + secendNight;
  } else {
    var firstnight = 10 * 100;
    var secendNight = 10 * 80;
    var nightCounting = dailyNight - 20;
    var thirdNight = nightCounting * 50;
    totalHotelCost = firstnight + secendNight + thirdNight;
  }
  return totalHotelCost;
}
/** Hotel Cost. solution End**/

//Assignment number 4. Name: Mega Friend

/** Mega Friend. solution Start**/
var allFriends = ["Altab", "jalal", "Azmir", "Muktadir"];
function megaFriend(friendGroup) {
  var nameLetterCount = 0;
  var largestName;

  for (var i = 0; i < friendGroup.length; i++) {
    if (friendGroup[i].length > nameLetterCount) {
      var nameLetterCount = friendGroup[i].length;
      largestName = friendGroup[i];
    }
  }
  return largestName;
}
/** Mega Friend. solution End**/
