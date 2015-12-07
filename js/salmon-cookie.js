var hours= ['10am: ','11am: ','12am:','1:00pm:','2:00pm:','3:00pm:','4:00pm:','5:00pm:'];
var hoursEl= document.getElementById('hours');

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookie: function(){
    return this.customers() * this.avg;
  },
  calcHourlyTotals: function(){
    var ulEl= document.createElement('ul')
    for(var i =0; i<hours.length; i++) {
        this.hourlyCookies.push(this.cookie());
        var liEl= document.createTextNode('li');
        liEl.textContent= hours[i] +' '+ this.hourlyCookies[i];
        ulEl.appendChild(liEl);
      }
        hoursEl.appendChild(ulEl);
    }
};
console.log(pikePlace.customers());
console.log(pikePlace.cookie());
pikePlace.calcHourlyTotals();
