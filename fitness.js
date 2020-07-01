$(document).ready(function(){
    $(".menu-1").hover(function(){
        $(this).css("color","rgb(224, 129, 19)")})
    $(".menu-1").mouseleave(function(){
        $(this).css("color","white")})
    $(".menu-2").hover(function(){
        $(this).css("color","rgb(224, 129, 19)")})
    $(".menu-2").mouseleave(function(){
        $(this).css("color","white")})
    $(".menu-3").hover(function(){
        $(this).css("color","rgb(224, 129, 19)")})
    $(".menu-3").mouseleave(function(){
        $(this).css("color","white")})
    $(".menu-4").hover(function(){
        $(this).css("color","rgb(224, 129, 19)")})
    $(".menu-4").mouseleave(function(){
        $(this).css("color","white")})
    $(".main-matter-button").hover(function(){
        $(this).css({"color":"white","border-color":"rgb(224, 129, 19)"})
    })
    $(".main-matter-button").mouseleave(function(){
        $(this).css({"color":"rgb(224, 129, 19)","border-color":"white"})
    })
    $(".pre-main-matter-button").hover(function(){
        $(this).css({"color":"white","border-color":"rgb(224, 129, 19)"})
    })
    $(".pre-main-matter-button").mouseleave(function(){
        $(this).css({"color":"rgb(224, 129, 19)","border-color":"white"})
    })
    $(".menu-bar").click(function(){
    $(".toggle").css("height","30%");
    $(".menu-bar").hide();
    $(".close").css("display","block");
    $(".close").show();
    })
    $(".close").click(function(){
    $(".toggle").css("height","0%");
    $(".close").hide();
    $(".menu-bar").show();
    })
    $("input").click(function(){
    $(this).css("border-bottom","2px solid rgb(224, 129, 19)")
    })
    $(".hide,.hide-1,.hide-2,.hide-3").css("color","red")
    $(".send").click(function(){
    $("input").css("border-bottom","2px solid black");
    var name= $(".name").val();
    var check= /^[a-zA-Z\s]+$/;
    if(name==""){
        $(".hide").text("Enter your name");
        return false;
    }
    else{true;}
    if(!name.match(check)){
        $(".hide").text("Enter your valid name");
            return false;
    }
    else{true;}
    if(name.length>20){
        $(".hide").text("More than 20 char. is not allowed");
        return false;
        }
        else{ $(".hide").text("");}
    var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=$(".email").val();
    if(email==""){
        $(".hide-1").text("Enter your email id");
        return false;
    }
    else{true}
    if(!email.match(check_email)){
        $(".hide-1").text("Enter your valid email id");
        return false;
    }
    else{$(".hide-1").text("")}
    var address= $(".address").val();
    var check_address= /^([a-zA-Z\s])+$/;
    if(address==""){
        $(".hide-2").text("please enter your address");
        return false;
    }
    else{$(".hide-2").text("")}
    if(!address.match(check_address)){
        $(".hide-2").text("enter your valid address");
        return false;
    }
    else{$("hide-2").text("")}
    var message =$(".messages").val();
    if(message==""){
        $(".hide-3").text("write something for us");
        return false;
    }
    else{$(".hide-3").text("")}
    alert("send");
    })
})