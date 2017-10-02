<<<<<<< HEAD
﻿class HomeController {
    constructor($scope) {
        this.messages=[];
        this.message="";
        this.connection = new signalR.HubConnection('/chat');
        this.connection.start().then(() => this.connection.invoke('send', 'Hello'));
        this.connection.on('send', data => {
                    this.messages.push(data);
                    $scope.$apply();
                });
        
       
    }
    sendMessage() {
        this.connection.invoke('send', this.message);
    }
=======
class HomeController {
    constructor() {
        this.message = 'Hello from the about page!';
    }


    // initMap() {
    //   let map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   });
    // }
>>>>>>> origin/TestingStuff
}