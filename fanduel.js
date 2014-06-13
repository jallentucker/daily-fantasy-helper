(function() {
  'use strict';

  var printCurrentDateAsTitle = function(today) {
    $('title').append(today.getMonth().toString() + today.getDate().toString());
  };

  $(function() {
    var today = new Date();
    printCurrentDateAsTitle(today);
  });

})();
