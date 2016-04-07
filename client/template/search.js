Template.Search.onRendered(function(){
    $("#search").dropdown({
        onChange: function(value, text, $selectedItem) {
            Router.go('/repo/' + value);
        },
        fullTextSearch: true,
    });
    $("#modalSearch").dropdown({
        fullTextSearch: true,
    });
    $("#search").dropdown('set selected', this.data.mod);
    $("#modalSearch").dropdown('set selected', this.data.mod);
    $("#addModal").modal();
});
Template.Search.helpers({
    modules: function(){
        return Modules.find();
    }
});
Template.Search.events({
    'click #title': function(){
        Router.go('/');
    },
    'click #addRepo': function(){
        $("#addModal").modal('show');
    }
});
Template.SearchAdd.events({
    'click #submitAddRepo': function(){
        var mod = $("#modalSearch").dropdown('get value')[0];
        if(mod == ""){
            $("#modalSearch-field").addClass('error');
            return;
        }else{
            $("#modalSearch-field").removeClass('error');
        }
        var link = $("#github").val();
        var regex = /^https:\/\/github.com\/(.*)\/(.*)$/;
        if(regex.test(link)){
            //valid link
            $("#github-field").removeClass('error');
            //get user and repo
            var match = regex.exec(link);
            var user = match[1];
            var repo = match[2];
            Meteor.call('addRepo', mod, user, repo, function(err, result){
                if(err){
                }else{
                }
                $("#addModal").modal('hide');
            });
        }else{
            //invalid link
            $("#github-field").addClass('error');
        }
    },
})
