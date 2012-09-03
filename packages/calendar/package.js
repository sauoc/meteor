Package.describe({
  summary: "Adding Some calendar functionality"
});

Package.on_use(function (api) {
  api.use(['jquery', 'jquery-ui'], 'client');

  api.add_files([
    'fullcalendar.css',
    'fullcalendar.js',
    'gcal.js'], 'client');
});
