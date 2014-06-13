(function() {
  'use strict';

  var loadData = function() {
    var uploads = 0;
    var batterElement = document.getElementById('batter-file');
    var pitcherElement = document.getElementById('pitcher-file');
    var fanduelElement = document.getElementById('fanduel-file');
    var incrementUploads = function() {
      uploads++;
      $(document.getElementById('uploads')).text('Uploads: ' + uploads);
      if (uploads === 1) { console.log(document.getElementById('batter-file').value); }
    };
    $(batterElement).change(function() { incrementUploads(); });
    $(pitcherElement).change(function() { incrementUploads(); });
    $(fanduelElement).change(function() { incrementUploads(); });
  };

  $(function() {
    loadData();
  });

})();
