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
$('.toggle-menu').click(function() {
	$('body').toggleClass('menu-open menu-closed');
	// Nav-tabs toggle
	$(this).children('.icon').toggleClass('fa-ellipsis-v fa-th-list');
	// Nav-main toggle
	// $(this).children().children('.icon').toggleClass('fa-ellipsis-v fa-th-list');
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

// Submmenu toggle
// $('.submenu-item a').click(function(e) {
//     $('.submenu-item.active').removeClass('active');
//     var $this = $(this).parent();
//     if (!$this.hasClass('active')) {
//         $this.addClass('active');
//     }
//     e.preventDefault();
// });

// Submenu links
$('.step02').click(function() {
	$('.submenu-item.active').removeClass('active');
	$('.submenu-item .step02').parent().addClass('active');
	// Hide all others
	$('#03-finalize-business-plan').addClass('hidden');
	$('#04-decide-fso-packaged-solutions-model-and-target-function').addClass('hidden');
	$('#05-finalize-team-structure-and-assign-roles-responsibilities').addClass('hidden');
	$('#06-finalize-training-plan').addClass('hidden');
	// Show the one we want
	$('#02-attend-cloud-onboarding-session').removeClass('hidden');
});
$('.step03').click(function() {
	$('.submenu-item.active').removeClass('active');
	$('.submenu-item .step03').parent().addClass('active');
	// Hide all others
	$('#02-attend-cloud-onboarding-session').addClass('hidden');
	$('#04-decide-fso-packaged-solutions-model-and-target-function').addClass('hidden');
	$('#05-finalize-team-structure-and-assign-roles-responsibilities').addClass('hidden');
	$('#06-finalize-training-plan').addClass('hidden');
	// Show the one we want
	$('#03-finalize-business-plan').removeClass('hidden');
});
$('.step04').click(function() {
	$('.submenu-item.active').removeClass('active');
	$('.submenu-item .step04').parent().addClass('active');
	// Hide all others
	$('#02-attend-cloud-onboarding-session').addClass('hidden');
	$('#03-finalize-business-plan').addClass('hidden');
	$('#05-finalize-team-structure-and-assign-roles-responsibilities').addClass('hidden');
	$('#06-finalize-training-plan').addClass('hidden');
	// Show the one we want
	$('#04-decide-fso-packaged-solutions-model-and-target-function').removeClass('hidden');
});
$('.step05').click(function() {
	$('.submenu-item.active').removeClass('active');
	$('.submenu-item .step05').parent().addClass('active');
	// Hide all others
	$('#02-attend-cloud-onboarding-session').addClass('hidden');
	$('#03-finalize-business-plan').addClass('hidden');
	$('#04-decide-fso-packaged-solutions-model-and-target-function').addClass('hidden');
	$('#06-finalize-training-plan').addClass('hidden');
	// Show the one we want
	$('#05-finalize-team-structure-and-assign-roles-responsibilities').removeClass('hidden');
});
$('.step06').click(function() {
	$('.submenu-item.active').removeClass('active');
	$('.submenu-item .step06').parent().addClass('active');
	// Hide all others
	$('#02-attend-cloud-onboarding-session').addClass('hidden');
	$('#03-finalize-business-plan').addClass('hidden');
	$('#04-decide-fso-packaged-solutions-model-and-target-function').addClass('hidden');
	$('#05-finalize-team-structure-and-assign-roles-responsibilities').addClass('hidden');
	// Show the one we want
	$('#06-finalize-training-plan').removeClass('hidden');
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