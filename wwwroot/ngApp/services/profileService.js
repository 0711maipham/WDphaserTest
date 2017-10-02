class ProfileService {
    constructor ($resource) {
        this.dragonResource = $resource("/api/profile");
    }

    getProfile(id) {
        return this.profileResource.get({id:id});
    }

}