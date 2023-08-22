
function calcular_cambio ( monto , cuotas ) {

    monto = parseFloat (monto);
    cuotas = parseFloat (cuotas);
    // Tasa Nominal Actual
    // TNA = parseFloat (TNA);
    
      let monto_final= 0;
    
      if( cuotas == 1 && monto > 0) {
        monto_final = monto + (monto * (1.18/12)) 
        return monto_final
      }
      else if ( cuotas == 3 && monto > 0) {
        monto_final = monto + (monto * (1.18/4))
        return monto_final
      }
      else if ( cuotas == 6 && monto > 0) {
        monto_final = monto + (monto * (1.18/2))
        return monto_final
      }
      else if ( cuotas == 12 && monto > 0) {
        monto_final = monto + (monto * (1.18/12))
        return monto_final
      }
    
        
        
    
    
    }
    // Simulador Plazo Fijo
    
        console.log ("Bienvenidos a Banco de Juan")
    
        let monto = 0
        while( monto != "FIN" ){
            monto = prompt("Monto que desea ingresas al plazo fijo o FIN");
            if (monto != "FIN") {
                let cuotas = prompt("Ingrese el numero de cuotas 1, 3, 6 o 12");
                let resultado_plazofijo = calcular_cambio ( monto , cuotas );
    
                console.log ("Pediste: ", monto);
                console.log ("Cuotas: ", cuotas);
                console.log ("Devolves: ", resultado_plazofijo);
            }
            
    
    
        }
    
        