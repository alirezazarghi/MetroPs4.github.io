

document.write('<center></center>');

function showdate() {
    week= new Array("يكشنبه :","دوشنبه :","سه شنبه :","چهارشنبه :","پنج شنبه :","جمعه :","شنبه :")
    months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دی","بهمن","اسفند");
    a = new Date();
    d= a.getDay();
    day= a.getDate()+1;
    month = a.getMonth()+1;
    year= a.getYear();

	year = (year== 0)?2000:year;
	(year<1000)? (year += 2000):true;
    
	year = 1398;

	switch (month) {
    	case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
    	case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
    	case 3: (day<21)? (month=12, day+=9):(month=1, day-=20);   break;
    	case 4: (day<21)? (month=1, day+=11):(month=2, day-=20);   break;
    	case 5:
    	case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
    	case 7:
    	case 8:
    	case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22);  break;
    	case 10:(day<23)? (month=7, day+=8):(month=8, day-=22);    break;
    	case 11:
    	case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21);  break;
       default:  	break;
	}
document.write('<center>' + week[d]+" "+day+" "+months[month-1]+" "+ year + '</center>');
};

showdate();

// Clock

<!-- hiding
function MakeArrayday(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function MakeArraymonth(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function funClock() {
if (!document.layers && !document.all)
return;
var runTime = new Date();
var hours = runTime.getHours();
var minutes = runTime.getMinutes();
var seconds = runTime.getSeconds();
var dn = "قبل از ظهر";
if (hours >= 12) {
dn = "بعد از ظهر";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
if (minutes <= 9) {
minutes = "0" + minutes;
}
if (seconds <= 9) {
seconds = "0" + seconds;
}
movingtime = "<b>"+ hours + ":" + minutes + ":" + seconds + " " + dn + "</b></div>";
if (document.layers) {
document.layers.clock.document.write(movingtime);
document.layers.clock.document.close();
}
else if (document.all) {
clock.innerHTML = movingtime;
}
setTimeout("funClock()", 1000)
}
window.onload = funClock;
//  End -->
/* document.write('<center><span style="text-decoration: none"> <br> <span style="font-family:Tahoma; font-size: 8pt" id="clock"></span></span></center>');
document.write('<center><span style="text-decoration: none"><div style=" margin-top: 5px;"><div style=" margin-bottom: 5px;"></div></div></span></center>'); */
