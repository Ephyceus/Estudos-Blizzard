$(document).ready(function(){
    $("#menuJogos").click(function(someMenuGame){
        $(".panel").slideToggle();
        $("#esportsMenu").hide();
        $("#jogosMenu").show("slow");
    });

    $("#menuSport").click(function(someMenuSport){
        $(".panel").slideToggle();
        $("#jogosMenu").hide();
        $("#esportsMenu").show("slow");
    });

    $("#logon").click(function(){
        $("#login").slideToggle("slow");
    });

    $("#logonav").animate({left: "30px"}, "slow");
});

        /*if( $("#menuEsport").click(function(){
            if(isMenuEsports){
                $(".panel").slideToggle();
                isMenuJogos = false;
            }
            else
            {
                isMenuJogos = true;
            }
        }));    
    }
    isMenuEsports = false;
    isMenuJogos = false;
});
    //Aqui vai suas funções do jQuery
        /*

public void Pulo()
    {
        if (!isWater)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                if (isGrounded)
                {
                    rgb.AddForce(new Vector2(0, forcaPulo));
                    GetComponent<AudioSource>().Play();
                    canFly = false;
                }
                else
                {
                    canFly = true;
                }
            }

            if (isGrounded)
            {
                GetComponent<Animator>().SetBool("Jumping", false);
            }
            else
            {
                GetComponent<Animator>().SetBool("Jumping", true);
            }
        }
    }


$("#menuJogos").click(function(){
            $(".panel").slideToggle("slow");
        });
        $("#menuSport").click(function(){
            $(".panel").slideToggle("slow");
        });
        $("#logon").click(function(){
            $("#login").slideToggle("slow");
        });
        //$("button").click(function(){
            //$("#logonav").animate({left: "30px"}, "slow");
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