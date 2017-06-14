// Accordion collapse
var $myGroup = $('#menu-accordion');
	$myGroup.on('show.bs.collapse','.collapse', function() {
	$myGroup.find('.collapse.in').collapse('hide');
});

// Tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});



// Main menu toggle
$('.toggle-menu').click(function(e) {
	$('body').toggleClass('menu-open menu-closed');
	// Nav-tabs toggle
	$(this).children('.menu-item-indicator').children('.icon').toggleClass('fa-ellipsis-v fa-th-list');
	$(this).toggleClass('active');
	// Nav-main toggle
	// $(this).children().children('.icon').toggleClass('fa-ellipsis-v fa-th-list');
	e.preventDefault();
});

// Menu tabs toggle
$('.nav-tabs a').click(function(e) {
	$('.nav-tabs .active').removeClass('active');
	var $this = $(this).parent();
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	// e.preventDefault();
});

// Table first-child / not-first-child
$.each( $('table', this.$el), function( index, table ){
	var rowspan = 0;
	$.each( $('tr', table), function( index, tr ){
		if( rowspan > 0 ){
			$('td:first-child', tr).addClass("not-first-child");
			rowspan = (rowspan>0) ? rowspan-1 : 0;
		} else if( $('td:first-child', tr).attr("rowspan") > 0){
			rowspan = parseInt( $('td:first-child', tr).attr("rowspan")) - 1;
		}
	});
});


// Same height phase steps
equalheight = function(container){

var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;

	$(container).each(function() {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
});
}

$(window).load(function() {
	equalheight('.phase-steps li');
	equalheight('.phase-steps-title');
});


$(window).resize(function(){
	equalheight('.phase-steps li');
	equalheight('.phase-steps-title');
});