

var hours= ['10am: '
,'11am: ' ,'12am: ' ,'1:00pm: ' ,'2:00pm: ' ,'3:00pm: '   ,'4:00pm: ' ,'5:00pm: ' ];
var pikeEl= document.getElementById('hours');
var seaAirportEl= document.getElementById('hours1');
var southcenterEl= document.getElementById('hours2');
var bellevueMallEl= document.getElementById('hours3');
var alkiBeachEl= document.getElementById('hours4');

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookie: function(){
    return Math.floor(this.customers() * (this.avg));
  },
  calcHourlyTotals: function(){
    var ulEl= document.createElement('ul');
    for(var i =0; i<hours.length; i++) {
        this.hourlyCookies.push(this.cookie());
        var liEl=document.createElement('li');
        liEl.textContent= ' '+ hours[i] +' '+ this.hourlyCookies[i];
        ulEl.appendChild(liEl);
      }
        pikeEl.appendChild(ulEl);
    }

};
console.log(pikePlace.customers());
console.log(pikePlace.cookie());
pikePlace.calcHourlyTotals();

var airport={
  min: 6,
  max: 44,
  avg: 1.2,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random()* (this.max - this.min)) + this.min;
  },
  cookie:function(){
    return Math.floor(this.customers()*this.avg);
  },
  calcHourlyTotals: function(){
    var ulEl= document.createElement('ul');
    for(var i=0; i<hours.length; i++){
      this.hourlyCookies.push(this.cookie());
      var liEl= document.createElement('li');
      liEl.textContent= ' '+ hours[i] +' '+ this.hourlyCookies[i];
      ulEl.appendChild(liEl);
    }
    seaAirportEl.appendChild(ulEl);
  }
};
console.log(airport.customers());
console.log(airport.cookie());
airport.calcHourlyTotals();

var mall= {
  min: 11,
  max: 38,
  avg: 1.9,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random()*(this.max - this.min) + this.min);
  },
  cookie: function(){
    return Math.floor(this.customers()*this.avg);
  },
  calcHourlyTotals: function(){
    var ulEl= document.createElement('ul');
    for(var i=0; i<hours.length; i++){
      this.hourlyCookies.push(this.cookie());
      var liEl= document.createElement('li');
      liEl.textContent= ' '+ hours[i] +' '+ this.hourlyCookies[i];
      ulEl.appendChild(liEl);
    }
      southcenterEl.appendChild(ulEl);
  }
};
console.log(mall.customers());
console.log(mall.cookie());
mall.calcHourlyTotals();

var bellevue={
  min: 20,
  max: 48,
  avg: 3.3,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random()*(this.max-this.min)+ this.min);
  },
  cookie: function(){
    return Math.floor(this.customers()*this.avg);
  },
  calcHourlyTotals:function(){
    var ulEl=document.createElement('ul');
    for(var i=0; i<hours.length; i++){
      this.hourlyCookies.push(this.cookie());
      var liEl= document.createElement('li')
      liEl.textContent= ' '+ hours[i]+ ' '+ this.hourlyCookies[i];
      ulEl.appendChild(liEl);
    }
    bellevueMallEl.appendChild(ulEl);
  }
};
console.log(bellevue.customers());
console.log(bellevue.cookie());
bellevue.calcHourlyTotals();

var alki= {
  min: 3,
  max: 24,
  avg: 2.6,
  hourlyCookies: [],

  customers: function(){
    return Math.floor(Math.random()*(this.max-this.min)+ this.min);
  },
  cookie: function(){
    return Math.floor(this.customers()*this.avg);
  },
  calcHourlyTotals:function(){
    var ulEl=document.createElement('ul');
    for(var i=0; i<hours.length; i++){
      this.hourlyCookies.push(this.cookie());
      var liEl= document.createElement('li');
      liEl.textContent= ' '+ hours[i]+ ' '+ this.hourlyCookies[i];
      ulEl.appendChild(liEl);
    }
    alkiBeachEl.appendChild(ulEl);
  }
};
console.log(bellevue.customers());
console.log(bellevue.cookie());
alki.calcHourlyTotals();
