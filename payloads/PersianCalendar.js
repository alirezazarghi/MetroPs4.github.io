// JavaScript Document


//get name of Day.
		function DayName(DayNumber){
		var dayname;
	
		switch(DayNumber){
			case 6:
			dayname="شنبه";
			break;
		
				case 0:
				dayname="یکشنبه";
				break;
		
					case 1:
					dayname="دوشنبه";
					break;
		
						case 2:
						dayname="سه شنبه";
						break;
		
							case 3:
							dayname="چهارشنبه";
							break;
		
								case 4:
								dayname="پنجشنبه";
								break;
		
									case 5:
									dayname="جمعه";
									break;
		
	}


	return dayname;
}

	
		//get name of month.
		function MonthName(MonthNumber){
			var monthname;
	
			switch (MonthNumber){
		
			case 0:
			monthname="فروردین";
			break;
	
				case 1:
				monthname="اردیبهشت";
				break;
	
					case 2:
					monthname="خرداد";
					break;
	
						case 3:
						monthname="تیر";
						break;
	
							case 4:
							monthname="مرداد";
							break;
	
								case 5:
								monthname="شهریور";
								break;
	
									case 6:
									monthname="مهر";
									break;
	
										case 7:
										monthname="آبان";
										break;
	
											case 8:
											monthname="آذر";
											break;
	
												case 9:
												monthname="دی";
												break;
	
													case 10:
													monthname="بهمن";
													break;
	
														case 11:
														monthname="اسفند";
														break;
	
		
	}
	
	return monthname;
}
//persian calendar
function PersianCalendar(DateType,CalendarTitle){
	
	var PC =new Object;
	
	//Base Dates ()
	var basedate=new Date(2015,7,5);
	var pbasedate=new Date(1394,4,14);

	// Diffrence of Base Dates
	var diff=basedate.getTime() - pbasedate.getTime() ;

	//Get Today Date
	var today=new Date();
	today=Date.now();

	//Calculate Persian Date.
	var persianDate= new Date(today-diff);


		


//Create Persian Date string.
//getMonth--> Returns 0-11.
//getFullYear--> Returns year(YYYY).
//getDate--> Returns 1-31 Day of month.
//getDay-->0-6 day of week, 0==Sunday.
//getHours-->0-23.
//getTime-->milliseconds since 1/1/1970.


	var pcstring;

	switch (DateType){
	case 0:
		pcstring=String(String(persianDate.getFullYear())+ "/" + String(persianDate.getMonth()+1) +"/"+ 
		 String(persianDate.getDate()+1));
	
		break;
	
	case 1:
		pcstring=String( DayName(persianDate.getDay())+ "  " + String(persianDate.getDate()-1) + "  " + 
		 MonthName(persianDate.getMonth()) + "  " +String(persianDate.getFullYear()) );
				
		break;
	
}

//set object properties
PC.name=CalendarTitle;
PC.year=persianDate.getFullYear();
PC.month=persianDate.getMonth()+1;
PC.monthname=MonthName(persianDate.getMonth());
PC.day=persianDate.getDate()+1;
PC.dayname=String(DayName(persianDate.getDay()));
PC.type=DateType;
PC.date= pcstring;



return PC;

}

