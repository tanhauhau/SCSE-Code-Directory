Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function () {
    this.render('Search', {to: 'search', data: {small: false, mod: null}});
    this.render(null, {to: 'results'});
});
Router.route('/repo/:_id', function(){
    this.render('Search', {to: 'search', data: {small: true, mod: this.params._id}});
    this.render('Repo', {
        to: 'results',
        data: function(){
            return {
                repos: Repos.find({mod: this.params._id}),
            };
        },
    });
});
