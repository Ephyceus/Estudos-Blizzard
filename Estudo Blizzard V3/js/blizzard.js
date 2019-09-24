$(document).ready(function(){
    //Aqui vai suas funções do jQuery
        $("#menu1").click(function(){
            $(".panel").slideToggle("slow");
        });
        $("#sport").click(function(){
            $(".panel").slideToggle("slow");
        });
        $("#logon").click(function(){
            $("#login").slideToggle("slow");
        });
        //$("button").click(function(){
            
            $("#logonav").animate({left: "30px"}, "slow");
        });
    //});



/*var jq = jQuery.noConflict();
jq(document).ready(function(){
//Aqui vai suas funções do jQuery
    jq("button").click(function(){
        jq("p").hide();
    });
});

$(seletor).ação()
$("p") seleciona todos os elementos com a tag P
$("p.teste") seleciona todos os P com a class teste
$("p#teste") seleciona todos os P com o ID teste
$("[href]") seleciona todos os elementos com o atributo href
$("[href = '#']") todos os href com o valor igual a #
$("[href != '#']") todos os href com valor diferente de #
$("[href $= '.jpg']") todos href com valor terminado em .jpg

$(seletor).ready(function)
$(seletor).click(function)
$(seletor).dbclick(function)
$(seletor).focus(function)
$(seletor).mouseover(function)
$(seletor).change(function)
$(seletor).keypress(function)
$(seletor).submit(function)
$(seletor).resize(function)
*/