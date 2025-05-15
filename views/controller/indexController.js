
            var map = L.map('map').setView([15.791995473348873, 120.98896086215971], 17);
            var southWest = L.latLng(15.69865640321718, 120.88643074035643),
                northEast = L.latLng(15.8837436848468, 121.09680175781249),
            mybounds = L.latLngBounds(southWest, northEast);

            var mcdo = L.icon({
                iconUrl: 'images/mcdo.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var jbee = L.icon({
                iconUrl: 'images/jbee.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var chowking = L.icon({
                iconUrl: 'images/chowking.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var shakeys = L.icon({
                iconUrl: 'images/shakeys.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var miapots = L.icon({
                iconUrl: 'images/miapots.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var greenwich = L.icon({
                iconUrl: 'images/greenwich.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var marquez = L.icon({
                iconUrl: 'images/marquez.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            var chingu = L.icon({
                iconUrl: 'images/chingu.png',
                shadowUrl: '',
                iconSize:     [45, 45], // size of the icon
                iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
                popupAnchor:  [5, -35] // point from which the popup should open relative to the iconAnchor
            });

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                bounds: mybounds,
                maxZoom: 19,
                minZoom: 16,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoieWphcGh6cyIsImEiOiJjam9hbHdtYmMwMWh0M3Ztc3U0OGE1bjlyIn0.y0xQauLsWMkIw0OLp379PQ'
            }).addTo(map);

            var mMcdo = L.marker([15.791794164495506,120.99037170410156],{icon:mcdo}).bindPopup("<b>Mcdonalds!</b>").addTo(map);
            var mJbee = L.marker([15.792289703918113,120.9901249408722],{icon:jbee}).bindPopup("<b>Jollibee!</b>").addTo(map);
            var mMiapots = L.marker([15.790606937477564,120.98998546600343],{icon:miapots}).bindPopup("<b>Miapots!</b>").addTo(map);
            var mShakeys = L.marker([15.790178482204356,120.98673462867738],{icon:shakeys}).bindPopup("<b>Shakeys!</b>").addTo(map);
            var mChowking = L.marker([15.792501378413466,120.99024295806886],{icon:chowking}).bindPopup("<b>Chowking!</b>").addTo(map);
            var mGreenwich = L.marker([15.792537490788535,120.99032342433931],{icon:greenwich}).bindPopup("<b>Greenwich!</b>").addTo(map);
            var mChingu = L.marker([15.787545846753332,120.97802817821504],{icon:chingu}).addTo(map).bindPopup("<b>Chingu!</b>").addTo(map);
            var mMarquez = L.marker([15.793554398964865,120.99072039127351],{icon:marquez}).bindPopup("<b>Marquez!</b>").addTo(map);

            var page = 0;
            function cMcdo(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.791794164495506,120.99037170410156],17);
                angular.element('#mainController').scope().myfunction("Mcdonalds");
                angular.element('#mainController').scope().$apply()
            }

            function cJbee(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.792289703918113,120.9901249408722],17);
                angular.element('#mainController').scope().myfunction("Jollibee");
                angular.element('#mainController').scope().$apply()
            }

            function cMiapots(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.790606937477564,120.98998546600343],17);
                angular.element('#mainController').scope().myfunction("Miapots");
                angular.element('#mainController').scope().$apply()
            }

            function cShakeys(){
               if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.790178482204356,120.98673462867738],17);
                angular.element('#mainController').scope().myfunction("Shakeys");
                angular.element('#mainController').scope().$apply()
            }

            function cChowking(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.792501378413466,120.99024295806886],17);
                angular.element('#mainController').scope().myfunction("Chowking");
                angular.element('#mainController').scope().$apply()
            }

            function cGreenwich(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.792537490788535,120.99032342433931],17);
                angular.element('#mainController').scope().myfunction("Greenwich");
                angular.element('#mainController').scope().$apply()
            }

            function cChingu(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.787545846753332,120.97802817821504],17);
                angular.element('#mainController').scope().myfunction("Chingu");
                angular.element('#mainController').scope().$apply()
            }

            function cMarquez(){
                if(page == 0){
                    $("#wrapper").toggleClass("toggled");
                    page = 1;
                }
                map.setView([15.793554398964865,120.99072039127351],17);
                angular.element('#mainController').scope().myfunction("Marquez");
                angular.element('#mainController').scope().$apply()
            }

            map.on('click', function() {
                if(page == 1){
                    $("#wrapper").toggleClass("toggled");
                    page = 0;
                }
            });
            mMcdo.on('click',cMcdo);
            mJbee.on('click',cJbee);
            mMiapots.on('click',cMiapots);
            mShakeys.on('click',cShakeys);
            mChowking.on('click',cChowking);
            mGreenwich.on('click',cGreenwich);
            mChingu.on('click',cChingu);
            mMarquez.on('click',cMarquez);


        var app = angular.module("myApp", []);
        app.controller("mainController", function($scope) {
            $scope.side = 0;
            $scope.name = "";
            $scope.image = "";
            $scope.dir = "";
            $scope.myfunction = function(name) {
                $scope.name = name;
                if(name == "Greenwich"){
                    $scope.image = "images/gw.png";
                    $scope.dir = "Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija";
                    loadReviews("Greenwich");
                }
                else if(name == "Jollibee"){
                    $scope.image = "images/jb.png";
                    $scope.dir = "Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija";
                    loadReviews("Jollibee");
                }
                else if(name == "Chowking"){
                    $scope.image = "images/ck.png";
                    $scope.dir = "Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija";
                    loadReviews("Chowking");
                }
                else if(name == "Mcdonalds"){
                    $scope.image = "images/md.png";
                    $scope.dir = "Maharlika corner, Del Pilar St, San Jose City, Nueva Ecija";
                    loadReviews("Mcdonalds");
                }
                else if(name == "Chingu"){
                    $scope.image = "images/cg.png";
                    $scope.dir = "Maharlika Highway, Abar 1st San Jose City, Nueva Ecija";
                    loadReviews("Chingu");
                }
                else if(name == "Shakeys"){
                    $scope.image = "images/sk.png";
                    $scope.dir = "Pan-Philippine Hwy, San Jose City, Nueva Ecija";
                    loadReviews("Shakeys");
                }
                else if(name == "Miapots"){
                    $scope.image = "images/mp.png";
                    $scope.dir = "A.O. Pascual St, San Jose City, Nueva Ecija";
                    loadReviews("Miapots");
                }
                else if(name == "Marquez"){
                    $scope.image = "images/mq.png";
                    $scope.dir = "Rizal St, San Jose City, Nueva Ecija";
                    loadReviews("Marquez");
                }
            }
        });

    function loadReviews(restaurant){
        console.log(restaurant);
        $.ajax({
            url: '/map/'+restaurant,
            method: 'get',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
            },
            success: function(data) {
            var res = data.data;
            console.log(res);
            var stars = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            var stotal = 0;
            var ctr = 0;
            var output = "";
            var u_star;
            res.forEach(rec => {
                if(rec.star == 5.0){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span>';
                    }
                    else if(rec.star > 4.0 && rec.star < 5.0){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span>';
                    }
                    else if(rec.star == 4){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star > 3.0 && rec.star < 4.0){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star == 3){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star > 2.0 && rec.star < 3.0){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star == 2){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star > 1.0 && rec.star < 2.0){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                    }
                    else if(rec.star == 1){
                        u_star = '<span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                    }
                output +=
                        `<li class="nav-item" style="margin:0;">
                            <h6 class="text-left" style="margin:0;">${rec.title}<small style="float: right; font-size:10px;">`+u_star+`</small></h6>
                            <p class="text-left text-dark">${rec.comment}</p>
                            <label class="text-left float-right"><span class="fa fa-comment"></span> ${rec.email}</label>
                        </li>`;
                stotal += parseInt(rec.star);
                ctr += 1;
            });
            stotal = stotal/ctr;
            if(stotal == 5.0){
                  stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span>';
            }
            else if(stotal > 4.0 && stotal < 5.0){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span>';
            }
            else if(stotal == 4){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span>';
            }
            else if(stotal > 3.0 && stotal < 4.0){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span>';
            }
            else if(stotal == 3){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            }
            else if(stotal > 2.0 && stotal < 3.0){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            }
            else if(stotal == 2){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            }
            else if(stotal > 1.0 && stotal < 2.0){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            }
            else if(stotal == 1){
                stars = '<span class="fa fa-star text-warning"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
            }
            $('#reviews').html(output);
            $('#stars').html(stars);
            }
        });
    }
