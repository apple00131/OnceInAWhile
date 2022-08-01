$(document).ready(function(){
    $('.link_all').click(function(){
        // console.log("all");
        $('#all').css("display","flex");
        // $('.section_link').css("top",'0');
        $('#wood, #glass, #window').css("display","none");
    })
    
    $('.link_wood').click(function(){
        $('#wood').css("display","flex");
        $('#all, #glass, #window').css("display","none")
    })

    $('.link_glass').click(function(){
        $('#glass').css("display","flex");
        $('#all, #wood, #window').css("display","none")
    })

    $('.link_window').click(function(){
        $('#window').css("display","flex");
        $('#all, #wood ,#glass').css("display","none")
    })
    // -------------------------------------------------------
    $('#submitBtn').click(function(){
    
        let email = $('#inputEmail').val();
        let textarea = $('#inputContent').val();
        // console.log(email, textarea);
        
        if(email == ""){
          // 驗證不完整
          alert('您的信箱未填寫 !')
        }else{
          //驗證成功
            
          $.ajax({
            url: "https://script.google.com/macros/s/AKfycbw3xyXJyO8f8WkDGAs-f21cSWeTr9cdnAmXQSSzHcdaN2_cFNlc94aZA7Hpinubw1pE/exec",
            data: {
              "email": email,
              "textarea": textarea,
            },
            success: function(response){
              if (response == "成功") {
                alert("送出成功，感謝你的聯絡，若有問題我們會盡快回覆 ❤");
                $('#inputEmail').val("");
                $('#inputContent').val("");
            }
            }
      
          })
        }
    })
})