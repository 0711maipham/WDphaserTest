class DragonService {
    constructor ($resource) {
        this.dragonResource = $resource("/api/dragon");
        this.dragon =
            {
                Name: "Lala",
                XpPoints: 45639821,
                Items: 5,
                Travelled: 5698542,
                Age: 6,
                Trips: 105,
            };
    }

    getDragon(id) {
        return this.dragonResource.get({id:id});
    }
    getDragonInfo(){
        return this.dragon;
    }

}