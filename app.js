const searchUser = document.querySelector('#searchUser');
const gh = new GitHub();
const ui = new UI();
searchUser.addEventListener('keyup', getText);
function getText(e){
    const query = e.target.value;
    if(query!==''){
        gh.getUser(query)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showError('User not found :(', 'alert alert-danger');
                }else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        ui.clearProfile();
    }
}