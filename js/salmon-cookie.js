var hours= ['10am: '
,'11am: ' ,'12am: ' ,'1:00pm: ' ,'2:00pm: ' ,'3:00pm: '   ,'4:00pm: ' ,'5:00pm: ' ];
function CookieStand(place,min,max,avg){
  this.place = place;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = []
  this.total = 0;
};
CookieStand.prototype.customers = function(){
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};
CookieStand.prototype.pushCookiesToArray = function(){
  for(var i = 0; i<hours.length; i++) {
      this.hourlyCookies.push(Math.floor(this.customers() * (this.avg)));
      this.total += this.hourlyCookies[i];
  }
};
CookieStand.prototype.render = function(){
  this.pushCookiesToArray();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.place;
  trEl.appendChild(tdEl);
  var totalEl = document.createElement('td');
  totalEl.textContent = this.total;
  trEl.appendChild(totalEl);
  for(var i = 0; i<this.hourlyCookies.length; i++){
    var cookieTd = document.createElement('td');
    cookieTd.textContent = this.hourlyCookies[i];
    trEl.appendChild(cookieTd);
  }
  var hoursEl = document.getElementById('hours');
  console.log(hoursEl);
  var table = document.getElementById("table");
  console.log(table);
  table.appendChild(trEl);
  hoursEl.appendChild(table);

};

function titles(){
  var hoursEl = document.getElementById('hours');
  var tbEl = document.createElement('tb');
  tbEl.id = "table";
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var totalEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);
  for(var i = 0; i<hours.length; i++){
    var thCurrent = document.createElement('th');
    thCurrent.textContent = hours[i];
    trEl.appendChild(thCurrent);
  };
  tbEl.appendChild(trEl);
  hoursEl.appendChild(tbEl);
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var airport = new CookieStand('Airport', 6, 44, 1.2);
var mall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

titles();
pikePlace.render();
airport.render();
mall.render();
bellevue.render();
alki.render();

var userForm = document.getElementById('user-form');
function newStats(event){
  event.preventDefault();
  var name = event.target.place.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);
  var newStore = new CookieStand (name,min,max,avg);

  newStore.render();
};
userForm.addEventListener('submit', newStats);
