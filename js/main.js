
let colorsWidth = $(".colors").outerWidth();
console.log(colorsWidth);


$(document).ready(function(){
    $(".spinner").fadeOut(1000,function(){
        $("#loading").fadeOut(1000);
    })
})
let aboutOffset = $("#about").offset().top;

$(window).scroll(function(){

    let wscroll =$(window).scrollTop();
   

    if(wscroll>aboutOffset-50){
        $("#main-nav").css('backgroundColor','rgba(0,0,0,0.6)');
        $("#btnUp").fadeIn(500);   
      
      

    }

    else{
        $("#main-nav").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500);
    }
})


$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'},2000);
})

$("a[href^='#']").click(function(){

    let aHref=$(this).attr("href");
    let sectionOffset= $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},2000)
})

let arr=['cadetblue','rgb(231, 161, 175)','#09c','teal'];
for(let i=0 ;i<4;i++)
{
    
    $(".colors div").eq(i).css("backgroundColor",arr[i]);
}

$(".setting").click(function(){
   
   let x= $(".colors").offset().left; 

   if(x==0)
   {
    $(".options").animate({left:-colorsWidth},2000);
   }

   else
   {
    $(".options").animate({left:'0'},2000);
   }
  
})

$(".colors div").click(function(){
    let bg=$(this).css("backgroundColor");
    $("p,h1,h2,.navbar-brand").css("color",bg)
})