$(document).ready(function() {
    $('#send-btn').click(function(){
        let inputvalue = $('#data').val()
        let usermsg = `<div class="user-inbox inbox">
                        <div class="msg-header">
                            <p>${inputvalue}</p>
                        </div>
                    </div>`
        $('.form').append(usermsg)
        $('#data').val('')
        
        $.ajax({
            url: 'message.php',
            type: 'POST',
            data: 'text='+inputvalue,
            success: function(response) {
                let botreply = `<div class="bot-inbox inbox">
                                    <div class="icon">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="msg-header">
                                        <p>${response}</p>
                                    </div>
                                </div>`
                $('.form').append(botreply)
                $('.form').scrollTop($('.form')[0].scrollHeight)
                
            }
        })
        
    })


})