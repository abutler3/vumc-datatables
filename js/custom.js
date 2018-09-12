(function (jQuery) {
  // jQuery('#tablefield-0').dataTable();
  jQuery(document).ready(function($) {
    if ($('table.tablefield').length > 0 ){
      jQuery('table.tablefield').dataTable(
      	responsive: true
      );
    }
  });


})(jQuery);
