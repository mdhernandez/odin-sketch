$(document).ready(function(){
 $('#reset').on('click', function(){	
 	$('#container div').removeClass('highlight');
 	$('.square').remove();
	
	var gridlen = prompt("Enter the length of the Square Grid", 16);
	
	if(isNaN(gridlen) || gridlen == null || gridlen <= 1){
		alert("Please enter a number and try again");
	}
	
	else{

	 var gridsquare = gridlen * gridlen;
	 	
 	 for (i = 0; i < gridsquare ; i++) {
 		 $('#container').append('<div>a</div>');
	 }//end for
	 
 	 $('#container').find('div').addClass('square');
 	 
	 var side = 720 / gridlen
 	 var sizestr = String(side) + "px";
 	 $('.square').css({"height": sizestr, "min-width": sizestr});
 
 	 //Event Handler
 	 $('#container').on('mouseenter', 'div' ,function(){
	  $(this).addClass('highlight'); 
	 });
	}//end else
 });
});