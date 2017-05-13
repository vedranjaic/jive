// Accordion collapse
var $myGroup = $('#menu-accordion');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})