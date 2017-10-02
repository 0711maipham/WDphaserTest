class ProfileService {
    constructor ($resource) {
        this.dragonResource = $resource("/api/profile");
        this.friendResource = $resource("/api/friend");
        this.user ={
                DisplayName: "Meme",
                JoinDate: "September 5th 2017",
                HomeTown: "Phoenix, Arizona"
            };
    }

    getProfile(id) {
        return this.profileResource.get({id:id});
    }
    getUser(){
        return this.user;
    }

}