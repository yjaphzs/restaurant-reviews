$(document).ready(function(){
    $('#registerForm').on('submit', function(e){
        e.preventDefault();
        var email =  $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        var password2 = $('input[name="password2"]').val();
        $.ajax({
            url: '/user/'+email,
            method: 'get',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
            },
            success: function(data) {
                var res = data.data;
                if(res.length > 0){
                    $('#email').addClass("is-invalid");
                    $('#password').addClass("is-invalid");
                    $('#password2').addClass("is-invalid");
                }
                else{
                    if(password == password2){
                        $.ajax({
                            url: '/user',
                            method: 'post',
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "cache-control": "no-cache"
                            },
                            data: {
                                email: $('input[name="email"]').val(),
                                password: $('input[name="password"]').val(),
                                name: $('input[name="name"]').val()
                            },
                            success: function(data) {
                                $('input[name="email"]').val("")
                                $('input[name="password"]').val("");
                                $('input[name="password2"]').val("");
                                $('input[name="name"]').val("");
                                $('#password').removeClass("is-invalid");
                                $('#password2').removeClass("is-invalid");
                                $('#email').removeClass("is-invalid");
                                swal("Success!", "Account successfully registered!", "success");
                            }
                        });
                    }
                    else{
                        $('#password').addClass("is-invalid");
                        $('#password2').addClass("is-invalid");
                    }
                }
            }
        });
    });
});
