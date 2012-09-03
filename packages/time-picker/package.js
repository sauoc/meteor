Package.describe({
  summary: "Time Picker Stuff"
});

Package.on_use(function (api) {
  api.use(['jquery', 'jquery-ui'], 'client');

  api.add_files([
    'jquery.timepicker.css',
    'jquery.timepicker.js',
    'lib/base.css',
    'lib/base.js',
    'lib/datepair.js'], 'client');
});

