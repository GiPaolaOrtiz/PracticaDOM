function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '')
    }
}

//RESALTAR PARRAFOS
function resaltar() {
    var eti = document.getElementsByTagName("p");
    //resaltarParrafo(eti)
    //resaltarParrafoProfesor();
    resaltarPalabra('paola') //<--------ESCRIBIR PALABRA QUE DESEA BUSCAR AQUI!
    //resaltarPalabra('Lorem');
    //resaltarPalabra('javascrip')
}


//FUNCION RESALTAR PALABRA
function resaltarPalabra(text) {
    
    
    
    var eti = document.getElementsByTagName('p');

    for (var i = 1; i <= eti.length; i++) {
        var innerHTML = eti[i].innerHTML
        var index = innerHTML.indexOf(text);
        
        
        
        if (index >= 0) {
            innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
            eti[i].innerHTML = innerHTML
        }
    }
}






function resaltarParrafo(eti) {
    for (var i = 1; i <= eti.length; i++) {
        eti[i].style.background = "yellow";
    }
}

//FUNCION-PROFESOR
function resaltarParrafoProfesor() {
    var eti = document.getElementsByTagName('p');

    for (let p of eti) {
        p.classList.add('highlight')
    }
}


/*function resaltarPalabra(etiqueta) {
    for (var i = 1; i <= etiqueta.length; i++) {
        //etiqueta[i].style.background = "yellow";
        if (/paola/.test(etiqueta[i].textContent)) {
            //if (etiqueta[i].innerHTML.match(/paola/gi)) {
            alert("si");
            //etiqueta[i].innerHTML.match(/paola/gi, "gina")
            // }
            etiqueta[i].style.background = "yellow";
            //var a = etiqueta[i].textContent;
        } 
    }
}
*/
