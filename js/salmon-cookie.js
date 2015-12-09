
var hours= ['10am: '
,'11am: ' ,'12am: ' ,'1:00pm: ' ,'2:00pm: ' ,'3:00pm: '   ,'4:00pm: ' ,'5:00pm: ' ];

function CookieStand(place,min,max,avg){
  this.place = place;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = []
  this.dailyCookies = 0;
  this.total = 0;
};

CookieStand.prototype.customers = function(){
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};
CookieStand.prototype.calcHourlyTotals = function(){
  for(var i = 0; i<this.hourlyCookies.length; i++) {
        this.total += this.hourlyCookies[i];
  };
};

CookieStand.prototype.pushCookiesToArray = function(){
  for(var i = 0; i<hours.length; i++) {
      this.hourlyCookies.push(Math.floor(this.customers() * (this.avg)));
  };
}

CookieStand.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.place;
  trEl.appendChild(tdEl);

  var totalEl = document.createElement('td');
  totalEl.textContent = this.total;
  trEl.appendChild(totalEl);
  //iterate over the hourlyCookies array and fill table data and append to table row
  for(var i = 0; i<this.hourlyCookies.length; i++){
    var cookieTd = document.createElement('td');
    cookieTd.textContent = this.hourlyCookies[i];
    trEl.appendChild(cookieTd);
  }
  //get the section (id="hours")
  //get the table and append the row you just created
  var hoursEl = document.getElementById('hours');
  console.log(hoursEl);
  var table = document.getElementById("table");
  console.log(table);
  table.appendChild(trEl);
  hoursEl.appendChild(table);

};

var hoursEl = document.getElementById('hours');
var tbEl = document.createElement('tb');
tbEl.id = "table";
var thEl = document.createElement('th');
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
var totalEl = document.createElement('th');

thEl.textContent = 'Location';
trEl.appendChild(thEl);
//tbEl.appendChild(trEl);
totalEl.textContent = 'Total';
trEl.appendChild(totalEl);
//for loop to add hours
for(var i = 0; i<hours.length; i++){
  //get the hours from the array
  //created new table haeader
  var thCurrent = document.createElement('th');
  //filled in the newly creted table header with the hours from array
  thCurrent.textContent = hours[i];
  //added the table header to the table row
  trEl.appendChild(thCurrent);
};

//create a row that says the location and its corresponding data set
//and attach it to the table
tbEl.appendChild(trEl);
hoursEl.appendChild(tbEl);

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var airport = new CookieStand('Airport', 6, 44, 1.2);
var mall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

pikePlace.pushCookiesToArray();
pikePlace.calcHourlyTotals();
pikePlace.render();

airport.pushCookiesToArray();
airport.calcHourlyTotals();
airport.render();

mall.pushCookiesToArray();
mall.calcHourlyTotals();
mall.render();

bellevue.pushCookiesToArray();
bellevue.calcHourlyTotals();
bellevue.render();

alki.pushCookiesToArray();
alki.calcHourlyTotals();
alki.render();

//bellevue.render()
//..
//var locationTable = tblocation.a
