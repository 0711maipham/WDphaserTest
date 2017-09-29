class HomeController {
    constructor() {
        this.message = 'Hello from the home page!';
        window.initMap = this.initMap();   
    }
    
    initmap(){
        var options = { //map options
        zoom: 8,
        center: { lat: 42.3601, lng: -71.0589 }
    }

    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Listen for click on map
    google.maps.event.addListener(map, 'click',
        function (event) {
            //adds marker
            addMarker({
                coord: event.latLng,
                content: "Travel here?",
            });
            if (document.getElementById('start').value == "") {
                document.getElementById('start').value = event.latLng
            };
            google.maps.event.addListener(map, 'click',
                function (event) {
                    //adds marker
                    document.getElementById('end').value = event.latLng;
                })
        });


    //Array of Markers
    var markers = [{
        coord: { lat: 42.4668, lng: -70.9495 },
        iconImage: 'https://orig00.deviantart.net/dc58/f/2016/016/1/5/free_dragonite_icon_by_rrrai-d9o6j6v.png',
        content: '<h1>Take me to England</h1>'
    },
    {
        coord: { lat: 42.8584, lng: -70.9300 },
        iconImage: 'https://orig00.deviantart.net/bd7f/f/2012/030/3/3/px__dustmite_dragon_by_niaro-d4o58x4.gif',
        content: '<h1>Boston is ok i guess</h1>'
    }
    ]

    //Loop through markers

    for (var index = 0; index < markers.length; index++) {
        addMarker(markers[index]);

    }
    //Add Marker Function

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coord,
            map: map,
            // icon:props.iconImage
        });

        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}
}

    // initMap() {
    //     var options = { //map options
    //         zoom: 8,
    //         center: { lat: 42.3601, lng: -71.0589 }
    //     }

    //     //new map
    //     var map = new google.maps.Map(document.getElementById('map'), options);

    //     //Listen for click on map
    //     google.maps.event.addListener(map, 'click',
    //         function (event) {
    //             //adds marker
    //             addMarker({
    //                 coord: event.latLng,
    //                 content: "Travel here?",
    //             });
    //             if (document.getElementById('start').value == "") {
    //                 document.getElementById('start').value = event.latLng
    //             };
    //             google.maps.event.addListener(map, 'click',
    //                 function (event) {
    //                     //adds marker
    //                     document.getElementById('end').value = event.latLng;
    //                 })
    //         });


    //     //Array of Markers
    //     var markers = [{
    //         coord: { lat: 42.4668, lng: -70.9495 },
    //         iconImage: 'https://orig00.deviantart.net/dc58/f/2016/016/1/5/free_dragonite_icon_by_rrrai-d9o6j6v.png',
    //         content: '<h1>Take me to England</h1>'
    //     },
    //     {
    //         coord: { lat: 42.8584, lng: -70.9300 },
    //         iconImage: 'https://orig00.deviantart.net/bd7f/f/2012/030/3/3/px__dustmite_dragon_by_niaro-d4o58x4.gif',
    //         content: '<h1>Boston is ok i guess</h1>'
    //     }
    //     ]

    //     //Loop through markers

    //     for (var index = 0; index < markers.length; index++) {
    //         addMarker(markers[index]);

    //     }
    //     //Add Marker Function

    //     function addMarker(props) {
    //         var marker = new google.maps.Marker({
    //             position: props.coord,
    //             map: map,
    //             // icon:props.iconImage
    //         });

    //         if (props.iconImage) {
    //             marker.setIcon(props.iconImage);
    //         }
    //         if (props.content) {
    //             var infoWindow = new google.maps.InfoWindow({
    //                 content: props.content,
    //             });

    //             marker.addListener('click', function () {
    //                 infoWindow.open(map, marker);
    //             });
    //         }
    //     }
    // }


