if (Meteor.isClient) {
    Router.configure({
        layoutTemplate: 'layout'
    });

    Router.map(function () {
        this.route('main', {
            path: '/',
            before: function () {
                if (1 < 2) {
                    this.redirect('otherpage');
                }
            }
        });

        this.route('otherpage', {
            path: '/other-page'
        });
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
