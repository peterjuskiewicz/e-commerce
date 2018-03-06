// JavaScript Document
var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5,#panel6');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.glyphicon').toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
    })
});