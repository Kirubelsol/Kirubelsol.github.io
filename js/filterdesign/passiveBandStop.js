//Displaying Second order bandstop RLC filter

document.querySelector('.js-RLCNotchbtn').addEventListener('click', NotchRLC);

function NotchRLC(){
  
  let R = parseFloat(document.querySelector('.js-resistanceNRLC').value)
  let R_unit = document.querySelector('.js-resistanceNRLC-unit').value
  let C = parseFloat(document.querySelector('.js-capacitanceNRLC').value)
  let C_unit = document.querySelector('.js-capacitanceNRLC-unit').value
  let L = parseFloat(document.querySelector('.js-inductanceNRLC').value)
  let L_unit = document.querySelector('.js-inductanceNRLC-unit').value
  let Wc1 = parseFloat(document.querySelector('.js-cutoffNRLC1').value)
  let Wc1_unit = document.querySelector('.js-cutoffNRLC1-unit').value
  let Wc2 = parseFloat(document.querySelector('.js-cutoffNRLC2').value)
  let Wc2_unit = document.querySelector('.js-cutoffNRLC2-unit').value

  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });

  //check for only three inputs
  if (((R && C && L) || (R && C && Wc1) || (R && C && Wc2) || (R && L && Wc1) || (R && L && Wc2) || (R && Wc1 && Wc2) || (C && L && Wc1) || (C && L && Wc2) || (C && Wc1 && Wc2) || (L && Wc1 && Wc2)) && !( R && L && C && Wc1 && Wc2) && !( R && L && C && Wc1) && !( R && L && C && Wc2) && !( R && C && Wc1 && Wc2) && !(L && C && Wc1 && Wc2)) {
    let inputs = [L, C, R, Wc1, Wc2];
    let invalid = inputs.filter(inputs => inputs <= 0 );

    //check for a positive input only 
    if(invalid.length === 0){

      //Unit converting
      //Resistance
      if (R_unit === 'kΩ'){
        R = R*1000;
      }
      else if (R_unit === 'MΩ'){
        R = R*(10**6);
      }
      else if (R_unit === 'mΩ'){
        R = R/(1000);
      }
      else if (R_unit === 'µΩ'){
        R = R/(10**6);
      }
      //Capacitance
      if (C_unit === 'kF'){
        C = C*1000;
      }
      else if (C_unit === 'MF'){
        C = C*(10**6);
      }
      else if (C_unit === 'mF'){
        C = C/(1000);
      }
      else if (C_unit === 'µF'){
        C = C/(10**6);
      }
      //Inductance
      if (L_unit === 'kH'){
        L = L*1000;
      }
      else if (L_unit === 'MH'){
        L = L*(10**6);
      }
      else if (L_unit === 'mH'){
        L = L/(1000);
      }
      else if (L_unit === 'µH'){
        L = L/(10**6);
      }
      //Cutoff1
      if(Wc1_unit === 'Hz'){
        Wc1 = Wc1*Math.PI*2;
      }

      //Cutoff1
      if(Wc2_unit === 'Hz'){
        Wc2 = Wc2*Math.PI*2;
      }

      let cutoffDerivation = `

        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\). In band-stop filter we have upper and lower cutoff frequencies. <p>

        <ul style="list-style-type:none; line-height: 3;" class = "mb-4 georgia-font fst-italic">
          \\( \\bullet \\; \\) Using Voltage division
          \\(  \\frac{V_o}{V_i} = \\frac{Z_c + Z_L}{Z_R + Z_c + Z_L} \\) <br>
          \\( \\bullet \\; Z_L = {sL}\\) &nbsp; &nbsp; &nbsp; \\(  Z_c = {1 \\over {sC}}\\) &nbsp; &nbsp; &nbsp; \\(  Z_R = R \\) &nbsp; &nbsp; &nbsp;
          \\( s = jw \\) <br>
          \\( \\bullet \\; \\frac{V_o}{V_i} = { { {1 \\over {sC}} + sL }  \\over {{1 \\over {sC}} + sL + R} } =  { { {1 \\over {sC}} + sL }  \\over {{1 \\over {sC}} + sL + R} } \\cdot ({s \\over {s}})  =  { { {s}^2L + {1 \\over C} } \\over { {s}^2L + Rs + {1 \\over C} } }\\) <br>  
          \\(  \\bullet \\; \\frac{V_o}{V_i} = { { {s}^2L + {1 \\over C} } \\over { {s}^2L + Rs + {1 \\over C} } } ({{1 \\over L} \\over {1 \\over L}}) =  { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}}s+ {1 \\over {LC} } } }\\) <br>

          \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s + {1 \\over {LC} } } }\\rvert} = {\\lvert { { ({jw_c})^2 + {1 \\over {LC}} } \\over {({jw_c})^2 + {R \\over {L}} (jw_c) + {1 \\over {LC} } } }\\rvert} = {\\lvert { { {1 \\over {LC}} - {w_c}^2  } \\over { ({1 \\over {LC}} - {w_c}^2) + {R \\over {L}} (jw_c) } } \\rvert}  \\) <br> 
          \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
          \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{ ({1 \\over {LC}} - {w_c}^2) ^2} \\over \\sqrt { { ({1 \\over {LC}} - {w_c}^2)^2} + {({R \\over L}w_c)^2} } } =  { {{1 \\over {LC}} - {w_c}^2} \\over \\sqrt { { ({{1 \\over {LC}} - {w_c}^2 }) ^2} + {({R \\over L}w_c)^2} } }  \\) <br>
          \\( \\bullet \\; \\)Divide both numerator and denominator by \\( {1 \\over {LC}} - {w_c}^2  = 
          { 1 \\over \\sqrt { { ({ {R \\over L}w_c  \\over { {{1 \\over {LC}} - {w_c}^2 } } })^2} + 1 } }  \\) <br> 
          \\( \\bullet \\; ({1 \\over \\sqrt{2}})^2 = ( { 1 \\over \\sqrt { { ( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c } )^2} + 1 } } )^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
          \\( {1 \\over 2} = { 1 \\over { { ( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c } )^2} + 1 } } \\) <br>
          \\( \\bullet \\; 2 =  { { ( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c } )^2} + 1 }  \\), &nbsp;  &nbsp; &nbsp; \\( 1 =   { { ( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c } )^2} } , \\) &nbsp; &nbsp; &nbsp; \\( { {R \\over L}w_c \\over  { {{1 \\over {LC}} - {w_c}^2 } }  }= \\pm 1\\) <br>
          \\( \\bullet \\; \\) There are two quadratic equations: &nbsp;  \\( {w_c}^2 + {R \\over L}w_c - {1 \\over {LC}} = 0 \\) and \\( {w_c}^2 - {R \\over L}w_c - {1 \\over {LC}} = 0\\) <br>
          \\( \\bullet \\; \\)Using quadratic equation formula: &nbsp;  \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) &nbsp; and &nbsp;  \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) where \\( \\boldsymbol{w_l} \\) is the lower cutoff frequency and \\( \\boldsymbol{w_c} \\) is the upper cutoff frequency <br>
      `
      let SolutionElement = ''
      if (R && L && C){
        Wc1 =  ( (-R/(2*L)) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )
        Wc2 =  ( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )
        SolutionElement = `
          <h5 class ="solnHead" >Cutoff Frequencies </h5>

          <p class ="serif"> Given values: Resistance = ${R} \\( \\Omega \\) Capacitance = ${C} F and Inductance = ${L} H </p>
          
          ${cutoffDerivation}

          \\(  \\bullet \\; w_l = - {{${rounding(R)} \\over {2(${rounding(L)})} } + \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)}})})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } }  {rad \\over sec} \\) and \\( w_u = {{${rounding(R)} \\over {2(${rounding(L)})} }+ \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)})}})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } } {rad \\over sec} \\) <br> 

          \\(   \\bullet \\; w_l = ${rounding( (-R/(2*L)) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )} {rad \\over sec}  \\) &nbsp; and &nbsp; \\( w_u = ${rounding( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )}  {rad \\over sec} \\) <br> 
          
          \\(  \\bullet \\; f =  {{w} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_l \\approx ${ rounding(Wc1 /(Math.PI*2))} \\) Hz &nbsp; and &nbsp; \\( f_u \\approx ${ rounding(Wc2 /(Math.PI*2))} \\) Hz  

        </ul>
        `

      }

      else if (R && C && Wc1){
        L = ((1/(Wc1*Wc1*C)) - (R/Wc1))
        Wc2 = ( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `
        <h5 class ="solnHead" >Upper cut off frequency and Inductance </h5>

        <p class ="serif"> Given values: Resistance = ${R} \\( \\Omega \\) Capacitance = ${C} F and  \\( W_l = ${rounding(Wc1)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\)Using the equation of \\(  w_l \\) and rearranging it: \\( L = {1 \\over {{w_l}^2C} } - {R \\over {w_l}} \\)
        \\( = {1 \\over {{${rounding(Wc1)}}^2(${rounding(C)})} } - {${rounding(R)} \\over {${rounding(Wc1)}}}\\approx ${rounding((1/(Wc1*Wc1*C)) - (R/Wc1))}\\) H <br>

        \\( \\bullet \\;  \\)Using the value of L and the \\(  w_u \\) equation: \\(  w_u = {{${rounding(R)} \\over {2(${rounding(L)})} }+ \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)})}})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } } { rad \\over sec} \\approx ${ rounding( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) ) } {rad \\over sec} \\) <br>
        \\( \\bullet \\;  f_u =  {{w_u} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_u \\approx ${ rounding(Wc2 /(Math.PI*2))} \\) &nbsp; Hz
  
      </ul>
      `
      }

      else if (R && L && Wc1){
        C = (1/(Wc1*Wc1*L + R*Wc1))
        Wc2 = ( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `

        <h5 class ="solnHead" >Upper cut off frequency and Capacitance </h5>

        <p class ="serif"> Given values: Resistance = ${R} \\( \\Omega \\) , Inductance = ${L} H and  \\( W_l = ${rounding(Wc1)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\;  \\) Using the equation of \\(  w_l \\) and rearranging it: \\( C = {1 \\over {L{w_l}^2 + Rw_l}}\\)
        \\( = {1 \\over {${rounding(L)}({${rounding(Wc1)}}^2) + ${rounding(R)}(${rounding(Wc1)}) }} \\approx ${rounding(1/(Wc1*Wc1*L + R*Wc1))}\\) <br>

        \\( \\bullet \\; \\)Using the value of C and the \\(  w_u \\) equation:  \\(  w_u = {{${rounding(R)} \\over {2(${rounding(L)})} }+ \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)})}})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } } { rad \\over sec} \\approx ${ rounding( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) ) } {rad \\over sec} \\) <br>
        \\( \\bullet \\;  f_u =  {{w_u} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_u \\approx ${ rounding(Wc2 /(Math.PI*2))} \\) &nbsp; Hz
  
      </ul>
      `
      }

      else if (R && C && Wc2){
        L = ((1/(Wc2*Wc2*C)) + (R/Wc2))
        Wc1 = ( -R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `
        <h5 class ="solnHead" >Lower cut off frequency and Inductance </h5>

        <p class ="serif"> Given values: Resistance = ${R} \\( \\Omega \\)  , Capacitance = ${C} F and  \\( w_u = ${rounding(Wc2)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\)Using the equation of \\(  w_u \\) and rearranging:  \\( L = {1 \\over {{w_u}^2C} } + {R \\over {w_u}} \\)
        \\( = {1 \\over {{${rounding(Wc2)}}^2(${rounding(C)})} } + {${rounding(R)} \\over {${rounding(Wc2)}}}\\approx ${rounding((1/(Wc2*Wc2*C)) + (R/Wc2))}\\) H <br>

        \\( \\bullet \\; \\)Using the value of L and the \\(  w_l \\) equation \\(  w_l = - {{${rounding(R)} \\over {2(${rounding(L)})} } + \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)}})})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } }  {rad \\over sec}  \\approx ${rounding( (-R/(2*L)) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )} {rad \\over sec} \\) <br>
        \\( \\bullet \\; f_l =  {{w_l} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_l\\approx ${ rounding(Wc1 /(Math.PI*2))} \\) &nbsp; Hz
  
      </ul>
      `
      }

      else if (R && L && Wc2){
        C = (1/(Wc2*Wc2*L - R*Wc2))
        Wc1 = ( -R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `
        <h5 class ="solnHead" >Lower cut off frequency and Capacitance </h5>

        <p class ="serif"> Given values: Resistance = ${R} \\( \\Omega \\) , Inductance = ${L} H and  \\( w_u = ${rounding(Wc2)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and rearranging it: \\( C = {1 \\over {L{w_u}^2 - Rw_u}}\\)
        \\( = {1 \\over {${rounding(L)}({${Wc2}}^2) - ${rounding(R)}(${rounding(Wc2)}) }} \\approx ${rounding(1/(Wc2*Wc2*L - R*Wc2))}  F\\) <br> 

        \\( \\bullet \\;  \\)Using the value of C and the \\(  w_l \\) equation: \\(  w_l = - {{${rounding(R)} \\over {2(${rounding(L)})} } + \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)}})})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } }  {rad \\over sec}  \\approx ${rounding( (-R/(2*L)) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )} {rad \\over sec} \\) <br>
        \\( \\bullet \\;  f_l =  {{w_l} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_l\\approx ${ rounding(Wc1 /(Math.PI*2))} \\) &nbsp; Hz
  
      </ul>
      `
      }

      else if (C && L && Wc1){
        R = (1/(Wc1*C) - L*Wc1)
        Wc2 = ( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `
        <h5 class ="solnHead" >Upper cut off frequency and Resistance </h5>

        <p class ="serif"> Given values: Capacitance = ${C} F , Inductance = ${L} H and  \\( w_l = ${rounding(Wc1)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\) Using the equation of \\(  w_l \\) and rearranging it: \\( R = { {1 \\over {w_lC}} - w_lL}\\)
        \\( = { {1 \\over {${rounding(Wc1)}(${rounding(C)})}} - ${rounding(Wc1)}(${rounding(L)})} \\approx ${rounding(1/(Wc1*C) - L*Wc1)} \\Omega\\) <br>

        \\( \\bullet \\; \\) Using the value of R and the \\(  w_u \\) equation: \\(  w_u = {{${rounding(R)} \\over {2(${rounding(L)})} }+ \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)})}})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } } { rad \\over sec} \\approx ${ rounding( R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) ) } {rad \\over sec} \\) <br>
        \\( \\bullet \\;  f_u =  {{w_u} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_u \\approx ${ rounding(Wc2 /(Math.PI*2))} \\) &nbsp; Hz
  
      </ul>
      `
      }

      else if (C && L && Wc2){
        R = (-1/(Wc2*C) + L*Wc2)
        Wc1 = ( -R/(2*L) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )

        SolutionElement = `

        <h5 class ="solnHead" >Lower  cut off frequency and Resistance </h5>

        <p class ="serif"> Given values: Capacitance = ${C} F , Inductance = ${L} H and  \\( w_u = ${rounding(Wc2)} {rad \\over sec} \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and rearranging it: \\( R = { w_uL -  {1 \\over {w_uC}} }\\)
        \\( = { ${rounding(Wc2)}(${rounding(L)}) - {1 \\over {${rounding(Wc2)}(${rounding(C)})}} } \\approx ${rounding(-1/(Wc2*C) + L*Wc2)} \\Omega \\) <br> 

        \\( \\bullet \\; \\) Using R and the \\(  w_l \\) equation and rearranging it:  \\(  w_l = - {{${rounding(R)} \\over {2(${rounding(L)})} } + \\sqrt { ({${rounding(R)} \\over {2(${rounding(L)}})})^2 + {1 \\over {(${rounding(L)})(${rounding(C)})} } } }  {rad \\over sec}  \\approx ${rounding( (-R/(2*L)) + math.sqrt( math.square(R/(2*L)) + (1/(L*C))) )} {rad \\over sec} \\) <br>
        \\( \\bullet \\; f_l =  {{w_l} \\over {2\\pi}} \\) &nbsp; Hence  \\( f_l\\approx ${ rounding(Wc1 /(Math.PI*2))} \\) &nbsp; Hz

      </ul>
      `
      }

      else if (R && Wc1 && Wc2){
        L = (R/(Wc2-Wc1))
        C = (1/(Wc2*Wc2*L - R*Wc2))

        SolutionElement = `
        
        <h5 class ="solnHead" >Inductance and Capacitance </h5>

        <p class ="serif"> Given values:  Resistance = ${R} \\( \\Omega \\), \\( w_u = ${rounding(Wc2)} {rad \\over sec}, \\) and \\( w_l = ${rounding(Wc1)} {rad \\over sec}, \\)  </p>

        ${cutoffDerivation}

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and \\(w_l \\) and subtracting them: \\( L = {R \\over {(w_u - w_l)}}\\)
        \\( = {${rounding(R)} \\over {${rounding(Wc2)} - ${rounding(Wc1)}}} \\approx ${rounding(R/(Wc2-Wc1))}\\) H <br>

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and rearranging it: \\( C = {1 \\over {L{w_u}^2 - Rw_u}}\\)
        \\( = {1 \\over { ${rounding(L)}({${rounding(Wc2)}}^2) - ${rounding(R)}(${rounding(Wc2)}) }} \\approx ${rounding(C)} F\\)

      </ul>
      `
      }

      else if (L && Wc1 && Wc2){
        R = L*(Wc2-Wc1)
        C = (1/(Wc2*Wc2*L - R*Wc2))

        SolutionElement = `
        <h5 class ="solnHead" >Resistance and Capacitance </h5>

        <p class ="serif"> Given values:  Inductance = ${L} H, \\( w_u = ${rounding(Wc2)} {rad \\over sec}, \\) and \\( w_l = ${rounding(Wc1)} {rad \\over sec}, \\)  </p>
        
        ${cutoffDerivation}

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and \\( w_l \\) and subtracting them: \\( R =  L(w_u - w_l) \\)
        \\( = {2(${rounding(L)})(${rounding(Wc2)} - ${rounding(Wc1)})} \\approx ${rounding(L*(Wc2-Wc1))} \\Omega \\) <br> 

        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and rearranging it: \\( C = {1 \\over {L{w_u}^2 - Rw_u}}\\)
        \\( = {1 \\over {${rounding(L)}({${rounding(Wc2)}}^2) - ${rounding(R)}(${rounding(Wc2)}) }} \\approx ${rounding(1/(Wc2*Wc2*L - R*Wc2))} F\\)

      </ul>
      `
      }

      
      else if (C && Wc1 && Wc2){
        L =  Math.pow(C*(math.square((Wc1+Wc2)/2) - math.square((Wc2 - Wc1)/2)),-1);
        R = (-1/(Wc2*C) + L*Wc2)
        console.log(L);
        console.log(R);

        SolutionElement = `
        <h5 class ="solnHead" >Resistance and Inductance</h5>

        <p class ="serif"> Given values:  Capacitance = ${C} F, \\( w_u = ${rounding(Wc2)} {rad \\over sec}, \\) and \\( w_l = ${rounding(Wc1)} {rad \\over sec}, \\)  </p>
        ${cutoffDerivation}

        \\( \\bullet \\; \\)  Using the equation of \\(  w_u \\) and \\( w_l \\):  \\( L =  {C({({{w_u + w_l} \\over 2})^2 - ({{w_u - w_l} \\over 2})^2)}}^{-1}   \\)
        \\( = {${rounding(C)}({({{${rounding(Wc2)} + ${rounding(Wc1)}} \\over 2})^2 - ({{${rounding(Wc2)} - ${rounding(Wc1)}} \\over 2})^2)}}^{-1} = ${rounding(L)} \\) H<br>
 
        \\( \\bullet \\; \\) Using the equation of \\(  w_u \\) and rearranging it: \\( R = { w_uL -  {1 \\over {w_uC}} }\\)
        \\( = { ${rounding(Wc2)}(${rounding(L)}) - {1 \\over {${rounding(Wc2)}(${rounding(C)})}} } \\approx ${rounding(R)} F\\)

      </ul>
      `
      }




      //Bode plot values
      numerator = [(1/(L*C)), 0, 1];
      denominator = [(1/(L*C)), (R/L), 1];
      generateBodePlot(numerator, denominator, (Wc1+Wc2)/2); 
      
      //take into account of negative results 

      if ( (R <= 0) || (C <= 0) || (L <= 0) || (Wc1 <= 0) || (Wc2 <= 0)){
        element.innerHTML = `
        <div class = "container-lg mt-5">
          <div class="text-center"> 
            <h4 class ="slogan mb-3" >Solution </h4>
          </div>
          <p class ="serif">A band-stop filter can be designed using a series connection of resistor, capacitor, and inductor. The output voltage is taken across the series connection of the inductor and capacitor. <br> Your inputs result in invalid results such as negative values. Please input correct values. If you want to learn more on how the band-pass filter works, you can get in on content tab. Thanks. </p>
        </div>
        `
      }

      else {
      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
      
        <p class ="serif">A band-stop filter can be designed using a series connection of resistor, capacitor, and inductor. The output voltage is taken across the series connection of the inductor and capacitor. </p>

        <div class="text-center d-none d-xl-block mb-3">
          <span class="tt" data-bs-placement="bottom" title="RLC Notch Filter Schematic">
            <img src="../img/filterdesign/RLCbandstop.PNG" class = "rounded" width = "55%" height = "55%" alt="RLC Notch Filter">
          </span>
          <p class="subtitles">RLC notch filter schematic</p>
        </div>

        ${SolutionElement}


        <h5 class ="solnHead"> Other parameters  </h5>

        <p class ="serif"> Center Frequency \\( (w_o) \\) refers to the midpoint of the stopband. Most of the time the arthimetic mean is used while at times geometric mean is used. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\) Using Arithmetic mean: \\( w_o = {{w_u + w_l} \\over {2}} = {{${rounding(Wc2)} + ${rounding(Wc1)}} \\over {2}} = ${rounding((Wc1+Wc2)/2)} {rad \\over {sec}}, \\) &nbsp;
          \\(  f_o =  {{w_o} \\over {2\\pi}} \\approx ${ rounding( ((Wc1+Wc2)/2) /(Math.PI*2))} \\) &nbsp; Hz <br>
          \\( \\bullet \\; \\) Using Geometric mean: \\( w_o = \\sqrt{w_u \\cdot w_l} = \\sqrt{${rounding(Wc1)} (${rounding(Wc2)})} = ${rounding(math.sqrt(Wc1*Wc2))} {rad \\over {sec}}\\),  &nbsp;
          \\(  f_o =  {{w_o} \\over {2\\pi}} \\approx ${ rounding( (math.sqrt(Wc1*Wc2)) /(Math.PI*2))} \\) &nbsp; Hz <br>
        </ul>
  
        <p class ="serif"> Band width \\( (\\beta) \\) indicates the range of frequencies the filter permits/attenuates. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\beta = w_u - w_l = ${rounding(Wc2)} - ${rounding(Wc1)} = ${rounding(Wc2-Wc1)} {rad \\over sec} \\). &nbsp; In Hz =  \\( {{w_u - w_l} \\over {2\\pi}} = ${rounding((Wc2-Wc1)/(2*Math.PI))}  \\) &nbsp; Hz 
        </ul>

        <p class ="serif"> Quality factor (Q) is a dimensionless parameter indicating the performance of the filter. It is the ratio of the center frequency to the band width. A higher value indicates narrow rejection of frequencies resulting in sharper notch while lower value indicates wider rejection region.  </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
        \\( \\bullet \\; Q = {{f_o} \\over {\\beta}} = {{${rounding ((Wc1+Wc2)/2)} {rad \\over {sec}}} \\over {${rounding(Wc2-Wc1)} } {rad \\over {sec}} } = ${rounding(((Wc1+Wc2)/2)/(Wc2-Wc1))}  \\) 
      </ul>

        <h5 class ="solnHead" >Transfer Function </h5>
  
        <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">  
          \\( \\bullet \\; \\) Using Voltage division
          \\( \\frac{V_o}{V_i} = \\frac{Z_c + Z_L}{Z_R + Z_c + Z_L} = { { {1 \\over {sC}} + sL }  \\over {{1 \\over {sC}} + sL + R} }=  { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } }\\) <br>
          \\( \\bullet \\; \\frac{V_o}{V_i} =   { { {s}^2 + {1 \\over {(${rounding(L)})(${rounding(C)})}} } \\over {{s}^2 + {${rounding(R)} \\over {${rounding(L)}}} s+ {1 \\over {(${rounding(L)})(${rounding(C)})} } } } = { { {s}^2 + ${rounding(1/(L*C))} } \\over {{s}^2 + { ${rounding(R/L)}s+ ${rounding(1/(L*C))} } } }\\) 
        </ul>

        <h5 class ="solnHead" >Gain</h5>
      
        <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert} = {\\lvert { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } } \\rvert = {\\lvert  { { {(jw)}^2 + {1 \\over {LC}} } \\over {{(jw)}^2 + {R \\over {L}} (jw) + {1 \\over {LC} } } }  \\rvert} =
            { \\lvert { { {1 \\over {LC}} - {w_c}^2  } \\over { ({1 \\over {LC}} - {w_c}^2) + {R \\over {L}} (jw_c) } } \\rvert} = } \\) 
            \\( { \\sqrt{ ({1 \\over {LC}} - {w}^2) ^2} \\over \\sqrt { { ({1 \\over {LC}} - {w}^2)^2} + {({R \\over L}w)^2} } } \\)</li>
          <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {{1 \\over {LC}} - {w}^2} \\over \\sqrt { { ({{1 \\over {LC}} - {w}^2 }) ^2} + {({R \\over L}w)^2} } }  \\)
          \\( = { {${rounding(1/(L*C))} - {w}^2} \\over \\sqrt { { ({${rounding(1/(L*C))}- {w}^2 }) ^2} + {({${rounding(R/L)}}w)^2} } } \\)</li>
          <li>The gain plot with respect to frequency can be found below at bode plot section</li>
        </ul> 
  
        <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

        <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\frac{V_o}{V_i} = { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } }= \\)
          \\( { {jw}^2 + {1 \\over {LC}} } \\over {{jw}^2 + {R \\over {L}} (jw) + {1 \\over {LC} } } =\\)
          \\(  { {1 \\over {LC}} - {w}^2  } \\over { ({1 \\over {LC}} - {w}^2) + {R \\over {L}} (jw) }\\)  <br>
          \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
          For \\(  { {1 \\over {LC}} - {w}^2  } > 0 \\) : &nbsp; numerator phase \\( = 0 \\) <br>
          \\( \\bullet \\; \\phi = 0 - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\text{ rad} \\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg = - tan^{-1} ({ {${rounding(R)} \\over ${rounding(L)}}w  \\over {{1 \\over {(${rounding(L)})(${rounding(C)})}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({ {${rounding(R/L)}}w  \\over {{ {${rounding(1/(L*C))}}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg   \\) <br> 
          For \\(  { {1 \\over {LC}} - {w}^2  } < 0 \\) : &nbsp; numerator phase \\( = \\pi \\) <br>
          \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\text{ rad} \\) <br>
          \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg = \\pi - tan^{-1} ({ {${rounding(R)} \\over ${rounding(L)}}w  \\over {{1 \\over {(${rounding(L)})(${rounding(C)})}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br>
          \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({ {${rounding(R/L)}}w  \\over {{ {${rounding(1/(L*C))}}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg   \\) <br> 

          The phase shift plot with respect to frequency can be found below at bode plot section
        </ul>
  
        <h5 class ="solnHead" >Total Impedance</h5>

        <p class ="serif"> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and affects the gain and phase shift of the circuit. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">    
          \\( \\bullet \\; Z = \\sqrt {{X_c}^2 + {X_L}^2 + R^2} \\) &nbsp; where \\( X_L\\) = impedance of the inductor and \\( X_c\\) = impedance of the capacitor <br>
          \\( \\bullet \\; \\lvert {X_L} \\rvert = {(2 \\pi f) \\cdot L} \\) &nbsp; &nbsp; \\( \\lvert {X_c} \\rvert = {1 \\over {(2 \\pi f) \\cdot C}} \\)  &nbsp; &nbsp; 
          \\( Z = \\sqrt {({2 \\pi f \\cdot L})^2 + { ({1 \\over {(2 \\pi f) \\cdot C}})^2} + R^2 } \\)  <br>
          \\( \\bullet \\; Z = \\sqrt {({2 \\pi f \\cdot ${rounding(L)} })^2 + { ({1 \\over {(2 \\pi f) \\cdot ${rounding(C)} }})^2} + ${R}^2 }  \\approx \\sqrt { {${rounding(math.square(L*2*Math.PI))} {f}^2}  +  { {${rounding(1/(math.square(C*2*Math.PI)))} \\over { {f}^2 } }} + ${rounding(R*R)}} \\) &nbsp; \\( \\Omega  \\) 
        </ul>

        <h5 class ="solnHead"> Bode Plot (Magnitude and Phase) </h5>
  
        <div class="row justify-content-center mb-2">
          <div class="col-md-9">
            <div id="MagnitudePlot"></div>
            <div id="PhasePlot"></div>
          </div>
        </div>
      </div>`;
      }
      // Manually trigger MathJax typesetting
      MathJax.typesetPromise([element]).then(() => {
        // Typesetting completed
        console.log('Equations typeset!');
      });
    }

    //if non-positivie input
    else {
      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
  
        <p class ="serif" > You have entered an invalid (negative or non-numeric) value. Please enter a correct input and try again. </p>
      </div>`;
    }

  } 

  //if only one input or all three inputs
  else{
    element.innerHTML = `
    
    <div class = "container-lg mt-5">
      <div class="text-center"> 
        <h4 class ="slogan mb-3" >Solution </h4>
      </div>

      <p class ="serif" > You have entered insufficient or exccess inputs. Please enter only three for successful calculation. </p>
    </div>`;

  }
}


