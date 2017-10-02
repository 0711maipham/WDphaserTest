class DragonService {
    constructor ($resource) {
        this.dragonResource = $resource("/api/dragon");
    }

    getDragon(id) {
        return this.dragonResource.get({id:id});
    }

}