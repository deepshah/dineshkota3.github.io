//hard coded the data
var cars_data = [
  {
    "id": "1",
    "name": "Lambhorgini",
    "year": "2010",
    "color": "red",
    "weight": "400",
    "height": "40",
    "dealer": "Dinesh",
    "number": "9769474123"
  },
  {
    "id": "2",
    "name": "Audi",
    "year": "2010",
    "color": "red",
    "weight": "400",
    "height": "40",
    "dealer": "Dinesh",
    "number": "9769474123"
  },
  {
    "id": "3",
    "name": "Skoda",
    "year": "2012",
    "color": "Black",
    "weight": "500",
    "height": "50",
    "dealer": "Dinesh",
    "number": "9769474123"
  },
  {
    "id": "4",
    "name": "Skoda",
    "year": "2014",
    "color": "yellow",
    "weight": "500",
    "height": "50",
    "dealer": "Dinesh",
    "number": "9769474123"
  },
  {
    "id": "5",
    "name": "Ferrari",
    "year": "2014",
    "color": "Black",
    "weight": "600",
    "height": "60",
    "dealer": "Dinesh",
    "number": "9769474123"
  }
];


//get the element that has to be changed
pile_up= document.getElementById("container");
var car_count = cars_data.length;


for(var i = 0;i<car_count;i++){
	//loop which piles up all the cars one above other. This runs on all the cars.
	pile_up.innerHTML = pile_up.innerHTML + '<div class="buddy" href = "description.html?id=' +cars_data[i]["id"] + '" style="display: block;"><div class="avatar"  style="display: block; background-image: url(./images/' + cars_data[i]["id"] + '.jpg)"></div></div>';
}




