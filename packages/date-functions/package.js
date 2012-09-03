Package.describe({
  summary: "Adding Some date and time helpers"
});

Package.on_use(function (api) {
  api.add_files([
    'dateFunctions.js'], ['client','server']);
});
