(function ($) {
  Drupal.behaviors['webform_select2'] = {
    attach: function () {
      $('select', '.webform-client-form')
        .not('.crm-select2, .select2')
        .addClass('select2')
        .select2();
    }
  };
})(jQuery);