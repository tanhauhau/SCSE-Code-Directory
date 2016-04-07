Meteor.methods({
    addRepo: function(mod, owner_name, repo_name){
        check(mod, String);
        check(owner_name, String);
        check(repo_name, String);

        var GithubApi = Meteor.npmRequire('github');
        var github = new GithubApi({
          version: "3.0.0"
        });
        github.repos.get({user: owner_name, repo: repo_name}, Meteor.bindEnvironment(function(error, data){
            if(error){
                console.log(repo_name);
                throw new Meteor.Error(error);
            }else{
                var repo = {
                    mod: mod,
                    repo_name: data.name,
                    repo_link: data.html_url,
                    repo_desc: data.description,
                    owner_name: data.owner.login,
                    owner_pic: data.owner.avatar_url,
                    owner_url: data.owner.html_url,
                    repo_updated: data.updated_at
                };
                Repos.upsert({repo_link: repo.repo_link}, repo);
            }
        }));
    }
})
