$(document).ready(function(){
    $('#loginForm').on('submit', function(e){
        e.preventDefault();
        var email =  $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        $.ajax({
            url: '/user/'+email+'/'+password,
            method: 'get',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
            },
            success: function(data) {
                var res = data.data;
                if(res.length > 0){
                    res.forEach(rec => {
                        sessionStorage.setItem("email", rec.email);
                        sessionStorage.setItem("name", rec.name);
                    });
                    window.location.href="/";
                }
                else{
                    swal("Invalid!", "Wrong username or password!", "warning");
                }
            }
        });
    });
});
