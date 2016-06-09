//hard coded data
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

var car_size = cars_data.length;
//this below line is used to get the id of the car from the url
var car_id = location.search.split('id=')[1]; 

var car_location; //specific location of the car in the array
for(var i = 0;i<car_size;i++){
	if(cars_data[i]["id"] == car_id){
		car_location = i;
	}
}
//location of the image is set here
var src = './images/'+car_id+'.jpg';

document.getElementById("get_image").setAttribute("src", src);


var table_description = document.getElementById("car_description");

// this below line is used to define the table entries

table_description.innerHTML = table_description.innerHTML + '<tr><td> Name</td><td>' +cars_data[car_location]["name"] + 
								'</td></tr> <tr><td>Year</td><td>'+cars_data[car_location]["year"] +
								'</td></tr> <tr><td>Color</td><td>' +cars_data[car_location]["color"]+
						 '</td></tr><tr> <td>Weight</td> <td>' + cars_data[car_location]["weight"]+
						 '</td> </tr><tr><td>Height</td><td>' +cars_data[car_location]["height"]+
						  '</td></tr><tr><td>Dealer</td><td>' +cars_data[car_location]["dealer"]+
						   '</td></tr><tr><td>Phone</td><td>' +cars_data[car_location]["number"]+'</td></tr>';

//initialzing the number
var number = "tel:+91" + cars_data[car_location]["number"];
// call button href is set here
var call_button = document.getElementById("call").setAttribute("href", number);



