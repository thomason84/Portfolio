// add or remove menu button on scroll,
$(window).on('scroll',function(){

    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top + $('#main').height();

    // round to reduce workload
    var stop = Math.round($(window).scrollTop());

    if (stop < mainbottom) {
        $("#sideMenuButton").parent().hide(300);
    } else if (stop > mainbottom) {
        $("#sideMenuButton").parent().show(300);
    }
});

(function(){
    $("#sideMenuButton").parent().hide();
})();

// change color of links on hover

$("li").hover(function(){
    $(this).toggleClass("liHover");
});

$(".submitButton").hover (function(){
    $(this).toggleClass("submitHover");
});

// remove icons when greater than 400px
function icons() {
    if ($(".site").width() < 485) {
        $("#navIcon1").addClass("fa-home");
        $("#navIcon2").addClass("fa-info-circle");
        $("#navIcon3").addClass("fa-briefcase");
        $("#navIcon4").addClass("fa-mobile-alt");
        $("#navIcon5").addClass("fa-file-alt");
    } else {
        $("#navIcon1").removeClass("fa-home");
        $("#navIcon2").removeClass("fa-info-circle");
        $("#navIcon3").removeClass("fa-briefcase");
        $("#navIcon4").removeClass("fa-mobile-alt");
        $("#navIcon5").removeClass("fa-file-alt");
    }
}

//icons();

$(document).ready(function(){
    icons();
});

$(window).resize(function(){
    icons();
});


// Ease in menu and fade out icon
$('#sideMenuButton').on("mousedown", function() {
    $('#sideNav').toggleClass('sideNavbarOpen');
    $(this).toggleClass("menuOpen");
    $('#sideNav').toggleClass('sideNavbar');
    $("#sideMenuButton").parent().hide(300);
});

// Ease out menu and fade in icon
$('.fa-times-circle').on("mousedown", function() {
    $('#sideNav').toggleClass('sideNavbarOpen');
    $('#sideNav').toggleClass('sideNavbar');
    $("#sideMenuButton").toggleClass("menuOpen");
    $("#sideMenuButton").parent().show(300);
});

//remove side nav on scroll
$(document).on("scroll", function(){
    $('#sideNav').removeClass('sideNavbarOpen');
    $('#sideNav').addClass('sideNavbar');
    $("#sideMenuButton").removeClass("menuOpen");
    $("#sideMenuButton").fadeIn("slow");
});


// Typewriter effect for intro text

// get size of viewport
var distance = $('#about').offset().top - ((30/100 ) * $('#about').offset().top);
    $window = $(window);
var fired = 0;

$window.scroll(function() {
    console.log(fired);
    if (fired === 1) {
        return;
    } else if ( $window.scrollTop() >= distance ) {
        // if the event is already fired, exit function
        fired = 1;

        // if the event has not been fired, run typewriter function
        (function (){
            if (fired === 1) {
                typewriter();
            }
        })();
    }
});

// set up text to print, each item in array is new line
var aText = new Array(
"Does your site need an update? <br><br> I can help with that!"
);
var iSpeed = 40; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typeText");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 400);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


function pageHeightCheck() {
    if ($(window).height() < 500) {
        $(".navbarItems").parent().hide();
    } else {
        $(".navbarItems").parent().show();
    }
}

$(document).ready(function(){
    pageHeightCheck();
});

$(window).resize(function(){
    pageHeightCheck();
});







function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}

$("#navIcon2").click(function() {
   scrollToAnchor('about');
});

$("#navIcon3").click(function() {
   scrollToAnchor('portfolio');
});

$("#navIcon4").click(function() {
   scrollToAnchor('contact');
});

$("#sideNav1").click(function() {
   scrollToAnchor('home');
});

$("#sideNav2").click(function() {
   scrollToAnchor('about');
});

$("#sideNav3").click(function() {
   scrollToAnchor('portfolio');
});

$("#sideNav4").click(function() {
   scrollToAnchor('contact');
});

$("#navIcon5").click(function() {
   window.open("https://registry.jsonresume.org/fb5d293b");
});

$("#sideNav5").click(function() {
   window.open("https://registry.jsonresume.org/fb5d293b");
});

const modalBack = document.getElementById('imageModalContainer');
const modal = document.getElementById('imageModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');

document.getElementById('hompageOld').addEventListener('click', function(){
	modal.classList.remove('hidden');
	modalBack.classList.remove('hidden');
	modalImg.setAttribute('src', 'images/hompageOld-large.png');
});

document.getElementById('unitspageOld').addEventListener('click', function(){
	modal.classList.remove('hidden');
	modalBack.classList.remove('hidden');
	modalImg.setAttribute('src', 'images/unitspageOld-large.png');
});

document.getElementById('membershipPerksOld').addEventListener('click', function(){
	modal.classList.remove('hidden');
	modalBack.classList.remove('hidden');
	modalImg.setAttribute('src', 'images/membershipPerksOld-large.png');
});

modalImg.addEventListener('click', function(){
	modal.classList.add('hidden');
	modalBack.classList.add('hidden');
});

modalBack.addEventListener('click', function(){
	modal.classList.add('hidden');
	modalBack.classList.add('hidden');
});
