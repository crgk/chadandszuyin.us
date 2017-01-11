  // jQuery snippet for changing HTML form into JSON
  (function ($) {
    $.fn.serializeFormJSON = function () {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name]) {
          if (!o[this.name].push) { o[this.name] = [o[this.name]]; }
          o[this.name].push(this.value || '');
        } else { o[this.name] = this.value || ''; }
      });
      return o;
    };
  })(jQuery);

  var nextGuest = 2;
  $('#addGuest').click(function(e) {
      $('#guest' + nextGuest).show();
      nextGuest = nextGuest + 1;

      if (nextGuest >= 11) {
          $('#addGuest').hide();
      }
  });

  $('#rsvp-form').submit(function(e) {
    // prevent default submiting form
    e.preventDefault();

    // serialize data to JSON
    var data = $('#rsvp-form').serializeFormJSON();

    $.ajax({
      url: 'https://sheetsu.com/apis/v1.0/705b4743378b',
      data: data,
      dataType: 'json',
      type: 'POST',

      success: function(data) {
        window.location.href = 'thanks.html';
      },

      // handling error response
      error: function(data) {
        console.log(data);
      }
    });

    return false;
  });
