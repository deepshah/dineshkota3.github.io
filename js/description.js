var cars_data = [
  {
    "id": "1",
    "name": "Lambhorgini",
    "year": "2010",
    "color": "red",
    "weight": "400",
    "height": "40",
    "dealer": "Dinesh",
    "number": "12345675"
  },
  {
    "id": "2",
    "name": "Audi",
    "year": "2010",
    "color": "red",
    "weight": "400",
    "height": "40",
    "dealer": "Dinesh",
    "number": "123345675"
  },
  {
    "id": "3",
    "name": "Skoda",
    "year": "2012",
    "color": "Black",
    "weight": "500",
    "height": "50",
    "dealer": "Dinesh",
    "number": "123345675"
  },
  {
    "id": "4",
    "name": "Skoda",
    "year": "2014",
    "color": "yellow",
    "weight": "500",
    "height": "50",
    "dealer": "Dinesh",
    "number": "123345675"
  },
  {
    "id": "5",
    "name": "Ferrari",
    "year": "2014",
    "color": "Black",
    "weight": "600",
    "height": "60",
    "dealer": "Dinesh",
    "number": "123345675);"
  }
];

car_property= document.getElementById("car_description");

var car_id = location.search.split('id=')[1];
 
var src = './images/'+car_id+'.jpg';
 
document.getElementById("get_image").setAttribute("src", src);







