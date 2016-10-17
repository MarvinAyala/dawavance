
function Enviar(){

if((document.getElementById("nombre").value == "") && ( document.getElementById("pais").value ==  "") && ( document.getElementById("mail").value == "") && (document.getElementById("cuerpo").value == "")) {

alert("No hay datos ingresados");

} 
        /********************************************************************
                                VALIDACION
        ********************************************************************/
    else {
    if(!/([A-Z]?[a-z]+\s?)+/.test(document.getElementById("nombre").value)){
        alert("Nombre invalido");
    }
    else if(!/([A-Z]?[a-z]+\s?)+/.test(document.getElementById("pais").value)){
        alert("Pais invalido");
    }
    else if(!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(document.getElementById("mail").value)){
        alert("Correo invalido");
    }
    else{

    	/******************************************************************************
    					CAPTURAR DATOS DEL FORMULARIO (DOM — BY ID)
    	******************************************************************************/
    		var nombreForm = document.getElementById("nombre").value;
    		var paisForm = document.getElementById("pais").value;
    		var mailForm = document.getElementById("mail").value;
    		var cuerpoForm = document.getElementById("cuerpo").value;
    
    
    	/******************************************************************************
    				   TRAER BANDEJA Y HACER PUSH CON EL NUEVO MENSAJE
    	******************************************************************************/
    
    		//Traemos del localStorage la key BANDEJA. Que almacena los mensajes recibidos. 
    		var bandejaAlmacenada = JSON.parse(localStorage.getItem('bandeja'));
    		//Si la key no tiene nada, crea un Array vacío
    		if (bandejaAlmacenada === null) {
    			bandejaAlmacenada = [];
    		}
    
    		//Agregamos los datos del form a un array asociativo (JSON)
    		var mensaje = { 'nombre' : nombreForm, 'pais' : paisForm, 'mail' : mailForm, 'cuerpo' : cuerpoForm}; 
    
    		//Agregamos el nuevo array al de la key del LocalStorage
    		bandejaAlmacenada.push(mensaje);
    		//Mandamos al LocalStorage el nuevo arreglo. 
    		localStorage.setItem('bandeja', JSON.stringify(bandejaAlmacenada));
    		//Recargamos la página para hacer efectivo el guardado
    		location.reload();
    
    
    	/******************************************************************************
    					NOTIFICAR QUE SE HA AGREGADO UN NUEVO REGISTRO
    	******************************************************************************/
    	//Limpiar controles
    		document.getElementById("nombre").value="";
    		document.getElementById("pais").value="";
    		document.getElementById("mail").value="";
    		document.getElementById("cuerpo").value="";
    		alert(mensaje.nombre + " de " + mensaje.pais + ". Dice: '"+ mensaje.cuerpo+"'.");
    
      }
    
    }
}