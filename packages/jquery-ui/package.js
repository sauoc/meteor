Package.describe({
  summary: "Low-level interaction for animation, high-level themable widgets, built on top of jQuery."
});

Package.on_use(function (api) {
  api.add_files(['jquery.ui.js', 'jquery-ui-1.8.21.custom.css'], 'client');
});
