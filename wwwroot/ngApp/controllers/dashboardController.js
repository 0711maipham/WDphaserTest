class DashboardController {
    constructor($accountService, $dragonService, $profileService) {
        this.message = 'Hello from the about page!';
        this.profile = $profileService.getProfile(id);
        this.dragon = $dragonService.getDragon(id);
    }


}