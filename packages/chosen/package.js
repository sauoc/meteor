Package.describe({
  summary: "Dropdown Aswesomeness!"
});

Package.on_use(function (api) {
  api.use(['jquery', 'jquery-ui'], 'client');

  api.add_files([
    'chosen.css',
    'chosen.jquery.js'], 'client');
});
