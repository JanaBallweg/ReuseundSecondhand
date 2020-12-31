$(document).ready(function(){
$('#fullpage').fullpage({

  
    easingcss3:'cubic-bezier(.17,.67,.83,.67)',
    loopTop:true,
    loopBottom:true,




    navigation:false,
    navigationTooltips:['Home', 'Die Studie', 'Besitz', 'Kauf & Verkauf','Impressum'],
    navigation:'left',



    afterLoad: function(anchorLink, index, direction){



    }

});


});