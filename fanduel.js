(function() {
  'use strict';

  var loadData = function() {
    var uploads = 0;
    var incrementUploads = function() {
      uploads++;
      $('#uploads').text('Uploads: ' + uploads);
      if (uploads === 1) { console.log($('#batter-file')); }
    };
    $('#batter-file').change(function() { incrementUploads(); });
    $('#pitcher-file').change(function() { incrementUploads(); });
    $('#fanduel-file').change(function() { incrementUploads(); });
  };

  $(function() {
    loadData();
  });

})();
