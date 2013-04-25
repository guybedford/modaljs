define(['hbs!./modal', 'jquery', 'less!./modal'], function(tpl, $) {
  return {
    render: tpl,
    attach: function(el) {
      var controller = {
        close: function() {
          var self = this;
          $(el).fadeOut(function() {
            self.dispose();
          });
        }
      };
      $('.close', el).click(function() {
        controller.close();
      });
      return controller;
    }
  };
})
