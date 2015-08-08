var weekday = (function(){
	//CahceDom
	var weekDays =  ["Sunday", "Monday", "Tuesday", "Wednesday",
	"Thursday", "Friday", "Saturday"];
	function convertDay(day) {
		return weekDays.indexOf(day);
	}
	
	function ConvertNumber(num){
		if (num > 7)
			return "Invalid Input!";
		else
			return weekDays[num];
	}

  return {
    convertDay: convertDay,
    convertNum: ConvertNumber
  };
})();

weekday.convertNum(4);