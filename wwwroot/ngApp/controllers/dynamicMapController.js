class DynamicMapController {
    constructor($scope, $state, $window) {
        this.window = $window;
        this.state = $state;
        this.start = "";
        this.end = "";
        this.markers = [];
        this.radius = 300
        this.origin = { lat: 42.3601, lng: -71.0589 }; //replace with this.origin = dragon.hometown

        let mapElement = document.getElementById('map');
        this.map = new google.maps.Map(mapElement, {
            zoom: 6,
            center: this.origin
        });

        google.maps.event.addListener(this.map, 'click', (event) => {
            this.addMarker({
                coord: event.latLng,
                content: "Travel here?",
            }, this.map);

            if (this.end == "") {
                this.end = event.latLng;
                $scope.$apply();
            };

        });

        let markerDetailList = this.getMarkerDetailList();
        markerDetailList.forEach((markerDetail) => {
            this.addMarker(markerDetail, this.map);
        });
    }

    travelCheck(destination) {
        if (confirm("Is this where we're going today?") == true) {
            var x = destination.toString().replace(/[{()}]/g, '').split(',').map(Number);
            var lat1 = this.origin.lat;
            var lon1 = this.origin.lng;
            var lat2 = x[0];
            var lon2 = x[1];
            var p = 0.017453292519943295;    // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat2 - lat1) * p) / 2 +
                c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;

            var y = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
            if (y>this.radius) {
                this.window.alert("That's a bit too far, isn't it? :(");
                this.state.reload();
            }
            else {
                this.state.reload();
            }
        }
        else {
            this.state.reload();
        }
    }

    addMarker(markerDetail, map) {
        var marker = new google.maps.Marker({
            position: markerDetail.coord,
            map: map,
            // icon:props.iconImage
        });

        if (markerDetail.iconImage) {
            marker.setIcon(markerDetail.iconImage);
        }

        if (markerDetail.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: markerDetail.content,
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }

        this.markers.push(marker);
    }

    getMarkerDetailList() {
        return [
            {
                coord: this.origin,
                iconImage: 'https://orig00.deviantart.net/dc58/f/2016/016/1/5/free_dragonite_icon_by_rrrai-d9o6j6v.png', //replace with dragon.img
                content: '<h1>Take me to England</h1>'
            },
        ];
    }
}



