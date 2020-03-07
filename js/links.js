$("#selh3").clic(function(event){
             $("#contenedor").load('../selecciones/colombia.html');
         });

$("li a").clic(function(event){
        event.preventDefault();
        if($(this).data('seleccion')!=null){
            $("#contenedor").load('selecciones/'+$(this).data('seleccion')+'.html');
        }
    });