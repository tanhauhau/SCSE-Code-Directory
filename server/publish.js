Meteor.publish('modules', function(){
    return Modules.find();
})
Meteor.publish('repos', function(){
    return Repos.find();
})
