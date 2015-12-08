
var hours= ['10am: '
,'11am: ' ,'12am: ' ,'1:00pm: ' ,'2:00pm: ' ,'3:00pm: '   ,'4:00pm: ' ,'5:00pm: ' ];

function CookieStand(place,min,max,avg){
  this.place = place;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = []
  this.dailyCookies = 0;
};

CookieStand.prototype.customers = function(){
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
},
CookieStand.prototype.cookie = function(){
  return Math.floor(this.customers() * (this.avg));
},
CookieStand.prototype.calcHourlyTotals = function(){
  for(var i = 0; i<hours.length; i++) {
      this.hourlyCookies.push(this.cookie());
};
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var airport= new CookieStand('Airport', 6, 44, 1.2);
var mall= new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue= new CookieStand('Bellevue Mall', 20, 48, 3.3);
var alki= new CookieStand('Alki', 3, 24, 2.6);

pikePlace.calcHourlyTotals();
airport.calcHourlyTotals();
mall.calcHourlyTotals();
bellevue.calcHourlyTotals();
alki.calcHourlyTotals();
