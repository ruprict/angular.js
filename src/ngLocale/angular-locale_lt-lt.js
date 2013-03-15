angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {"NUMBER_FORMATS":{"DECIMAL_SEP":",","GROUP_SEP":" ","PATTERNS":[{"minInt":1,"minFrac":0,"macFrac":0,"posPre":"","posSuf":"","negPre":"-","negSuf":"","gSize":3,"lgSize":3,"maxFrac":3},{"minInt":1,"minFrac":2,"macFrac":0,"posPre":"","posSuf":" \u00A4","negPre":"-","negSuf":" \u00A4","gSize":3,"lgSize":3,"maxFrac":2}],"CURRENCY_SYM":"Lt"},"pluralCat":function (n) {  if (n % 10 == 1 && (n % 100 < 11 || n % 100 > 19)) {   return PLURAL_CATEGORY.ONE;  }  if (n == (n | 0) && n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)) {   return PLURAL_CATEGORY.FEW;  }  return PLURAL_CATEGORY.OTHER;},"DATETIME_FORMATS":{"MONTH":["sausio","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"],"SHORTMONTH":["Saus.","Vas","Kov.","Bal.","Geg.","Bir.","Liep.","Rugp.","Rugs.","Spal.","Lapkr.","Gruod."],"DAY":["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],"SHORTDAY":["Sk","Pr","An","Tr","Kt","Pn","Št"],"AMPMS":["priešpiet","popiet"],"medium":"y MMM d HH:mm:ss","short":"yyyy-MM-dd HH:mm","fullDate":"y 'm'. MMMM d 'd'., EEEE","longDate":"y 'm'. MMMM d 'd'.","mediumDate":"y MMM d","shortDate":"yyyy-MM-dd","mediumTime":"HH:mm:ss","shortTime":"HH:mm"},"id":"lt-lt"});
}]);