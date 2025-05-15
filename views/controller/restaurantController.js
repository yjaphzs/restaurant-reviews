$(document).ready(function(){
    var star = 0;
    var title = "Mcdonalds";
    var location = '<span class="fa fa-map-marker text-danger"></span> Maharlika corner, Del Pilar St, San Jose City, Nueva Ecija';
    var restaurant ="Mcdonalds";

    var r_title = "";
    var r_comment = "";
    var r_star = "";

    $("#editReview").hide();
    loadReviews();
    function loadReviews() {
        $.ajax({
            url: '/review/'+restaurant,
            method: 'get',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
            },
            success: function(data) {
                var res = data.data;
                var stars = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                var stotal = 0;
                var ctr = 0;
                var output = "";
                var reviewed = false;
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
                                <div style="position:absolute; right: 55px;">`+u_star+`</div>
                                <h6 class="text-left" style="margin:0;">${rec.title}</h6>
                                <p class="text-left text-dark">${rec.comment}</p>
                                <label class="text-left float-right"><span class="fa fa-comment"></span> ${rec.email}</label>
                            </li>`;
                    if(rec.email == sessionStorage.getItem("email")){
                        r_title = rec.title;
                        r_comment = rec.comment;
                        r_star = parseInt(rec.star);
                        reviewed = true;
                    }
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
                if(reviewed){
                    $("#addReview").hide();
                    $("#editReview").show();
                }
                else{
                    $("#addReview").show();
                    $("#editReview").hide();
                }
                $('#title').html(title);
                $('#location').html(location);
                $('#reviews').html(output);
                $('#stars').html(stars);
            }
        });
    }

    $('#reviewForm').on('submit', function(e){
        e.preventDefault();
        if(star == 0){
            $("#reaction").html("Please rate");
            $("#reaction").addClass("text-danger");
        }
        else{
            $.ajax({
                url: '/review',
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache"
                },
                data: {
                    restaurant: restaurant,
                    star : star,
                    title: $('input[name="review_title"]').val(),
                    comment: $('textarea[name="review_comment"]').val(),
                    email: sessionStorage.getItem("email")
                },
                success: function(data) {
                    $('#review').modal('hide');
                    $('input[name="review_title"]').val("");
                    $('textarea[name="review_comment"]').val("");
                    $('#1_star').removeClass("text-warning");
                    $('#2_star').removeClass("text-warning");
                    $('#3_star').removeClass("text-warning");
                    $('#4_star').removeClass("text-warning");
                    $('#5_star').removeClass("text-warning");
                    loadReviews();
                }
            })
        }
    });

    $('#e_reviewForm').on('submit', function(e){
        e.preventDefault();
        if(star == 0){
            $("#ereaction").html("Please rate");
            $("#ereaction").addClass("text-danger");
        }
        else{
            $.ajax({
                url: '/review',
                method: 'put',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache"
                },
                data: {
                    restaurant: restaurant,
                    star : star,
                    title: $('input[name="e_review_title"]').val(),
                    comment: $('textarea[name="e_review_comment"]').val(),
                    email: sessionStorage.getItem("email")
                },
                success: function(data) {
                    $('#e_review').modal('hide');
                    $('input[name="e_review_title"]').val("");
                    $('textarea[name="e_review_comment"]').val("");
                    $('#e1_star').removeClass("text-warning");
                    $('#e2_star').removeClass("text-warning");
                    $('#e3_star').removeClass("text-warning");
                    $('#e4_star').removeClass("text-warning");
                    $('#e5_star').removeClass("text-warning");
                    loadReviews();
                }
            })
        }
    });

    $('#account_profile').html("<span class='fa fa-user' style='font-size: 50px; color: #f4991a;'></span><br>"+sessionStorage.getItem("name")+"<br><small>"+sessionStorage.getItem("email")+"</small>");

    $('#e_account_profile').html("<span class='fa fa-user' style='font-size: 50px; color: #f4991a;'></span><br>"+sessionStorage.getItem("name")+"<br><small>"+sessionStorage.getItem("email")+"</small>");

    $('#addReview').on('click', function(e){
        $("#review").modal("show");
    });

    $('#editReview').on('click', function(e){
        $("#e_review").modal("show");
        $('input[name="e_review_title"]').val(r_title);
        $('textarea[name="e_review_comment"]').val(r_comment);
        var r_stars = "";
        if(r_star == 5.0){
            r_stars = 'Rating: <span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star text-warning"></span><span id="e4_star" class="fa fa-star text-warning"></span><span id="e5_star" class="fa fa-star text-warning"></span>';
        }
        else if(r_star > 4.0 && stotal < 5.0){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star text-warning"></span><span id="e4_star" class="fa fa-star text-warning"></span><span id="e5_star" class="fa fa-star-half-alt text-warning"></span>';
        }
        else if(r_star == 4){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star text-warning"></span><span id="e4_star" class="fa fa-star text-warning"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star > 3.0 && stotal < 4.0){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star text-warning"></span><span id="e4_star" class="fa fa-star-half-alt text-warning"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star == 3){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star text-warning"></span><span id="e4_star" class="fa fa-star"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star > 2.0 && stotal < 3.0){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star-half-alt text-warning"></span><span id="e4_star" class="fa fa-star"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star == 2){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star text-warning"></span><span id="e3_star" class="fa fa-star"></span><span id="e4_star" class="fa fa-star"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star > 1.0 && stotal < 2.0){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star-half-alt text-warning"></span><span id="e3_star" class="fa fa-star"></span><span id="e4_star" class="fa fa-star"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        else if(r_star == 1){
            r_stars = '<span id="e1_star" class="fa fa-star text-warning"></span><span id="e2_star" class="fa fa-star"></span><span id="e3_star" class="fa fa-star"></span><span id="e4_star" class="fa fa-star"></span><span id="e5_star" class="fa fa-star"></span>';
        }
        $("#r_stars").html(r_stars);
        star = r_star;
    });

    $(document).on("click","#r_stars #e1_star", function(e) {
        $('#e1_star').addClass("text-warning");

        $('#e2_star').removeClass("text-warning");
        $('#e3_star').removeClass("text-warning");
        $('#e4_star').removeClass("text-warning");
        $('#e5_star').removeClass("text-warning");
        $("#ereaction").html("Hate it");
        $("#ereaction").removeClass("text-danger");
        star = 1;
    });
    $(document).on("click","#r_stars #e2_star", function(e) {
        $('#e1_star').addClass("text-warning");
        $('#e2_star').addClass("text-warning");

        $('#e3_star').removeClass("text-warning");
        $('#e4_star').removeClass("text-warning");
        $('#e5_star').removeClass("text-warning");
        $("#ereaction").html("Dislike it");
        $("#ereaction").removeClass("text-danger");
        star = 2;
    });
    $(document).on("click","#r_stars #e3_star", function(e) {
        $('#e1_star').addClass("text-warning");
        $('#e2_star').addClass("text-warning");
        $('#e3_star').addClass("text-warning");

        $('#e4_star').removeClass("text-warning");
        $('#e5_star').removeClass("text-warning");
        $("#ereaction").html("It's Ok");
        $("#ereaction").removeClass("text-danger");
        star = 3;
    });
    $(document).on("click","#r_stars #e4_star", function(e) {
        $('#e1_star').addClass("text-warning");
        $('#e2_star').addClass("text-warning");
        $('#e3_star').addClass("text-warning");
        $('#e4_star').addClass("text-warning");

        $('#e5_star').removeClass("text-warning");
        $("#ereaction").html("Liked it");
        $("#ereaction").removeClass("text-danger");
        star = 4;
    });
    $(document).on("click","#r_stars #e5_star", function(e) {
        $('#e1_star').addClass("text-warning");
        $('#e2_star').addClass("text-warning");
        $('#e3_star').addClass("text-warning");
        $('#e4_star').addClass("text-warning");
        $('#e5_star').addClass("text-warning");
        $("#ereaction").html("Loved it");
        $("#ereaction").removeClass("text-danger");
        star = 5;
    });

    $('#1_star').on('click', function(e){
        $('#1_star').addClass("text-warning");

        $('#2_star').removeClass("text-warning");
        $('#3_star').removeClass("text-warning");
        $('#4_star').removeClass("text-warning");
        $('#5_star').removeClass("text-warning");
        $("#reaction").html("Hate it");
        $("#reaction").removeClass("text-danger");
        star = 1;
    });
    $('#2_star').on('click', function(e){
        $('#1_star').addClass("text-warning");
        $('#2_star').addClass("text-warning");

        $('#3_star').removeClass("text-warning");
        $('#4_star').removeClass("text-warning");
        $('#5_star').removeClass("text-warning");
        $("#reaction").html("Dislike it");
        $("#reaction").removeClass("text-danger");
        star = 2;
    });
    $('#3_star').on('click', function(e){
        $('#1_star').addClass("text-warning");
        $('#2_star').addClass("text-warning");
        $('#3_star').addClass("text-warning");

        $('#4_star').removeClass("text-warning");
        $('#5_star').removeClass("text-warning");
        $("#reaction").html("It's Ok");
        $("#reaction").removeClass("text-danger");
        star = 3;
    });
    $('#4_star').on('click', function(e){
        $('#1_star').addClass("text-warning");
        $('#2_star').addClass("text-warning");
        $('#3_star').addClass("text-warning");
        $('#4_star').addClass("text-warning");

        $('#5_star').removeClass("text-warning");
        $("#reaction").html("Liked it");
        $("#reaction").removeClass("text-danger");
        star = 4;
    });
    $('#5_star').on('click', function(e){
        $('#1_star').addClass("text-warning");
        $('#2_star').addClass("text-warning");
        $('#3_star').addClass("text-warning");
        $('#4_star').addClass("text-warning");
        $('#5_star').addClass("text-warning");
        $("#reaction").html("Loved it");
        $("#reaction").removeClass("text-danger");
        star = 5;
    });

     $('#macdo').on('click', function(e){
        restaurant = "Mcdonalds";
        title = "Mcdonalds"
        location = '<span class="fa fa-map-marker text-danger"></span> Maharlika corner, Del Pilar St, San Jose City, Nueva Ecija';
        loadReviews();
     });
     $('#jollibee').on('click', function(e){
        restaurant = "Jollibee";
        title = "Jollibee"
        location = '<span class="fa fa-map-marker text-danger"></span> Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija';
        loadReviews();
     });
     $('#chowking').on('click', function(e){
        restaurant = "Chowking";
        title = "Chowking"
        location = '<span class="fa fa-map-marker text-danger"></span> Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
     $('#greenwich').on('click', function(e){
        restaurant = "Greenwich";
        title = "Greenwich";
        location = '<span class="fa fa-map-marker text-danger"></span> Maharlika corner, Bonifacio St, San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
     $('#shakeys').on('click', function(e){
        restaurant = "Shakeys";
        title = "Shakeys";
        location = '<span class="fa fa-map-marker text-danger"></span> Pan-Philippine Hwy, San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
     $('#chingu').on('click', function(e){
        restaurant = "Chingu";
        title = "Chingu";
        location = '<span class="fa fa-map-marker text-danger"></span> Maharlika Highway, Abar 1st San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
     $('#marquez').on('click', function(e){
        restaurant = "Marquez";
        title = "Marquez";
        location = '<span class="fa fa-map-marker text-danger"></span> Rizal St, San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
     $('#miapots').on('click', function(e){
        restaurant = "Miapots";
        title = "Miapots";
        location = '<span class="fa fa-map-marker text-danger"></span> A.O. Pascual St, San Jose City, Nueva Ecija';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        loadReviews();
     });
});
