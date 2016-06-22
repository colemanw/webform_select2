(function ($) {
  Backdrop.behaviors['webform_select2'] = {
    attach: function () {
      $('select', '.webform-client-form')
        .not('.crm-select2, .webform-select2, .no-select2, select2-hidden-accessible')
        .addClass('webform-select2')
        .select2();
    }
  };
})(jQuery);