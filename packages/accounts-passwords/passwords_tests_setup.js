Meteor.accounts.validateNewUser(function (user) {
  return !user.invalid;
});

Meteor.accounts.onCreateUser(function (options, extra, user) {
  if (extra.testOnCreateUserHook) {
    user.touchedByOnCreateUser = true;
    return user;
  } else {
    return 'TEST DEFAULT HOOK';
  }
});

Meteor.methods({
  setupMoreThanOneOnCreateUserHook: function () {
    try {
      Meteor.accounts.onCreateUser(function () {});
    } catch (exception) {
      throw new Meteor.Error(999, "Test exception");
    }
  }
});

// needed so that we can wait for this subscription to be complete
// before proceeding to the next step of a test (the default users
// dataset is an unnamed one, and this is not Meteor.subscribe'able)
Meteor.publish('users-for-tests', function() {
  return Meteor.users.find(
    {}, {fields: {services: 0, private: 0, emails: 0}});
});
