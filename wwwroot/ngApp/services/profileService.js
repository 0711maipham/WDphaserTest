class ProfileService {
    constructor ($resource) {
        this.dragonResource = $resource("/api/profile");
        this.friendResource = $resource("/api/friend");
    }

    getProfile(id) {
        return this.profileResource.get({id:id});
    }

}