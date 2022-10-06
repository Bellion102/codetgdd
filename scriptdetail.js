//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	// var autoSlider = setInterval(slideRight, 3000);
	
	// //for each slide 
	// $.each($('#slider-wrap ul li'), function() { 
	//    //set its color
	//    var c = $(this).attr("data-color");
	//    $(this).css("background",c);
	   
	//    //create a pagination
	//    var li = document.createElement('li');
	//    $('#pagination-wrap ul').append(li);	   
	// });
	
	//counter
	// countSlides();
	
	//pagination
	// pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 4000); }
	);
	
	

});//DOCUMENT READY
	
document.addEventListener("DOMContentLoaded", () => {
	const BASE_URL = "https://632fc662591935f3c8851f34.mockapi.io/api/apiphone";
  
	fetch(BASE_URL)
	  .then((response) => response.json())
	  .then((data) => {

		// showData(products, data);
  
		// thực hiện chức năng search
  
		// const input = document.querySelector(".inputx ");
		// input.addEventListener("keyup", (event) => {
		//   const target = event.target;
		//   console.log(target);
		//   const value = target.value;
		//   const convertToLowerCase = value.toLowerCase();
		//   const filterData = data.filter((item) =>
		// 	item.name.toLowerCase().includes(convertToLowerCase)
		//   );
		// //   showData(products, filterData);
		// });
		// dataProduct = data;
		// const namex = document.querySelector(".clname").innerHTML;
		// namex.sort(function(a, b){return a-b});
  
		// const sortBy = document.getElementById("sort")
		// let sortData = [];
		// const compareByName =  (objFirst, objSecond) => {
		//   if(removeVietKey(objFirst.name) > removeVietKey(objSecond.name)){
		//     return 1
		//   } else if(removeVietKey(objFirst.name) < removeVietKey(objSecond.name)){
		//     return -1
		//   } return 0
		// }
		// if(sortBy){
		//   sortBy.onchange = (event) =>{
		//     console.log(event.target.value);
		//     const {value} = event.target;
		//     if(+value === 1 ){
		//       sortData = [...data].sort(compareByName)
		//     }else if(+value === 2){
		//       sortData = [...data].sort(compareByName).reverse()
		//     }else{
		//       sortData = data
		//     }
		//     element.innerHTML = mapDatas(sortData)
		//   };
		// }
		// const sortedResponse = obj.data.DoctorsList.sort(function(a, b) { return parseInt(a.name) - parseInt(b.name) });
		// console.log(sortedResphonse);
		// const dataDetail = 
		const id = location.href.slice(34,35)
		const dataDetail = data.filter((item)=>{
			return item.id == id;
		})
		console.log(dataDetail) 
	  })
	  .catch((error) => {
		console.error("Error:", error);
	  });
  });

/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	// countSlides();
	// pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
		


