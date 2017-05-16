// Accordion collapse
var $myGroup = $('#menu-accordion');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Main menu
$('.toggle-menu').click(function() {
	$('body').toggleClass('menu-open menu-closed');
	$(this).children('.icon').toggleClass('fa-th-list fa-ellipsis-v');
})