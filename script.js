$(document).ready(function(){
let process = '';
let result = '';
$('.one').click(function(){
    process+=1;
})
$('.two').click(function(){
    process += 2;
});

$('.three').click(function(){
    process += 3;
});
$('.four').click(function(){
    process += 4;
});

$('.five').click(function(){
    process += 5;
});

$('.six').click(function(){
    process += 6;
});

$('.seven').click(function(){
    process += 7;
});

$('.eight').click(function(){
    process += 8;
});

$('.nine').click(function(){
    process += 9;
});
$('.pole').html(process);

});