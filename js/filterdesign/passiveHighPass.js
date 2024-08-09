//Displaying First order High Pass RC filter

document.querySelector('.js-RChighpassbtn').addEventListener('click', firstHighPassRC);

function firstHighPassRC(){
  
  let R = parseFloat(document.querySelector('.js-resistanceHPRC').value)
  let R_unit = document.querySelector('.js-resistanceHPRC-unit').value
  let C = parseFloat(document.querySelector('.js-capacitance-HPRC').value)
  let C_unit = document.querySelector('.js-capacitance-HPRC-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffHPRC').value)
  let Wc_unit = document.querySelector('.js-cutoffHPRC-unit').value

  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" }); 

  //check for only two inputs
  if (((R && Wc) || (R && C) || (Wc && C)) && !(R && C && Wc)) {
    let inputs = [R, C, Wc];
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
      //Cutoff
      if(Wc_unit === 'Hz'){
        Wc = Wc*Math.PI*2;
      }

      let cutoffDerivation = `
      <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_C} \\) <br>
        \\( \\bullet \\; Z_C = {1 \\over {sC}}\\) &nbsp; &nbsp; &nbsp;
        \\( s = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R = R \\) <br>
        \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + {1 \\over {sC}} }} = {RCs \\over {RCs + 1} } \\) <br>  

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert  {RCs \\over {RCs + 1} } \\rvert} = {\\lvert {RC(jw) \\over {RC(jw) + 1} }  \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{(RC(w_c))^2} \\over \\sqrt { {(RC(w_c))^2} + {1^2} } } = { {RC(w_c)} \\over \\sqrt { 1 + (RC(w_c))^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
        \\( ({1 \\over \\sqrt{2}})^2 = ({ {RC(w_c)} \\over \\sqrt { 1 + (RC(w_c))^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} = { ({RC(w_c)})^2 \\over  { 1 + (RC(w_c))^2} } \\) <br>
        \\( \\bullet \\; { 1 + (RC(w_c))^2} =  2 \\cdot ({RC(w_c)})^2, \\) &nbsp; &nbsp; &nbsp; \\( { (RC(w_c))^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({RC})^2 } \\) <br>
        \\( \\bullet \\; w_c =  { 1 \\over {RC} } \\)
      `

      let SolutionElement = ''
      if (R &&  Wc){
        C = 1/(R*Wc);
        SolutionElement = `
        <h5 class ="solnHead" >Capacitance</h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Cutoff Frequency (\\( W_c \\)) = ${rounding(Wc)} \\( rad \\over sec \\) </p>

        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>
        
        ${cutoffDerivation}
           &nbsp;  \\( C = { 1 \\over {Rw_c}} \\) <br>
          \\( \\bullet \\; C = { 1 \\over ${rounding(R*Wc)}} \\approx ${rounding(C)} F\\)
        </ul>
        `
      }

      else if (R && C){
        Wc = 1/(R*C);
        SolutionElement = `
        <h5 class ="solnHead" >Cutoff Frequency </h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Capacitance = ${C} F </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation}
          &nbsp; \\( = { 1 \\over {(${R})(${C})} } \\approx ${rounding(Wc)}\\)  \\( {rad \\over sec} \\) <br>
          \\( \\bullet \\; f_c =  {{w_c} \\over {2\\pi}} \\) \\( \\approx ${ rounding(Wc /(Math.PI*2))} \\)  &nbsp; Hz

        </ul>
        `

      }

      else if (C && Wc) {
        R = 1/(Wc*C);
    
        SolutionElement = `
        <h5 class ="solnHead" >Resistance</h5>

        <p class ="serif"> Given values: Capacitance = ${C} (F) and Cutoff Frequency \\( W_c \\) = ${rounding(Wc)} \\( rad \\over sec \\) </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation}
          &nbsp;   \\( R = {1 \\over {(C)(w_c)}  } \\) <br>
          \\( \\bullet \\; R = { 1 \\over ${rounding(C*Wc)}} \\approx ${rounding(R)} \\Omega \\) 
        </ul>
        `
      }

      //Bode plot values
      numerator = [0, R*C];
      denominator = [1, R*C];
      generateBodePlot(numerator, denominator, Wc); 

      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
      
        <p class ="serif"> A high pass filter can be designed using a resistor and capacitor where the output voltage is on the resistor side. </p>

        <div class="text-center d-none d-xl-block mb-3">
          <span class="tt" data-bs-placement="bottom" title="RC High Pass Filter Schematic">
            <img src="../img/filterdesign/RChighpass.PNG" class = "rounded" width = "55%" height = "55%" alt="RC High Pass Filter">
          </span>
          <p class="subtitles">RC high pass filter schematic</p>
        </div>      

        ${SolutionElement}

        <h5 class ="solnHead" >Transfer Function </h5>
  
        <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">  
          \\( \\bullet \\; \\) Using Voltage division
          \\(  \\frac{V_o}{V_i} = {R \\over {R + {1 \\over {sC}} }} = {RCs \\over {RCs + 1} } \\) <br>
          \\(  \\bullet \\; \\frac{V_o}{V_i} = {(${rounding(R)})(${C})s \\over {(${rounding(R)})(${rounding(C)})s + 1} } = \\frac{${rounding(R*C)}s}{${rounding(R*C)}s+1} \\) 
        </ul>

        <h5 class ="solnHead" >Gain</h5>
      
        <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert = \\lvert {RCs \\over {RCs + 1} } \\rvert} = {\\lvert {RC(jw) \\over {RC(jw) + 1} } \\rvert =} \\) \\({ \\sqrt{(RC(w))^2} \\over \\sqrt { {({RC}(w))}^2  + {1^2} } } \\)</li>
          <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {RC(w)} \\over  \\sqrt{ 1 + {({RC}(w))}^2  } }  = { {(${rounding(R)})(${rounding(C)})(w)} \\over  \\sqrt{ 1 + {((${rounding(R)}) (${rounding(C)})w)}^2 } } = { {${rounding(R*C)}w} \\over  \\sqrt{ 1 + ${rounding(math.square(R*C))}w^2} } \\)</li>
          <li>The gain plot with respect to frequency can be found below at bode plot section</li>
        </ul>
  
        <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

        <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\frac{V_o}{V_i} ={R \\over {R + {1 \\over {sC}} }} = {R \\over {R + {1 \\over {jwC}} }} = {R \\over {R + {-j \\over {wC}} }} \\)  <br>
          \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
          \\( \\bullet \\; \\phi = 0 - tan^{-1} ({{( {-1 \\over {wC}})} \\over R}) = - tan^{-1} ({{-1 \\over {RC(w)}}}) \\text{ rad}\\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({{-1 \\over {RC(w)}}}) \\cdot ({180 \\over \\pi}) = - tan^{-1} ({-1 \\over {(${rounding(R)})(${rounding(C)})(w)} }) \\cdot ({180 \\over \\pi}) &deg \\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({${-rounding(1/(R*C))}w}) \\cdot ({180 \\over \\pi}) &deg \\) <br> 
          The phase shift plot with respect to frequency can be found below at bode plot section
        </ul>
  
        <h5 class ="solnHead" >Total Impedance</h5>

        <p class ="serif"> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and affects the gain and phase shift of the circuit. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">    
          \\( \\bullet \\; Z = \\sqrt {R^2 + {X_c}^2} \\) &nbsp; where \\( X_c\\) = impedance of the capacitor <br>
          \\( \\lvert {X_c} \\rvert = { 1 \\over {(2 \\pi f) \\cdot C}} \\) &nbsp; &nbsp;
          \\( \\bullet \\; Z = \\sqrt {R^2 + ({ 1 \\over {(2 \\pi f) \\cdot C}})^2} \\) <br>
          \\( \\bullet \\; Z = \\sqrt {${rounding(R)}^2 + ({ 1 \\over {(2 \\pi f) \\cdot ${C} }})^2} \\approx \\sqrt {${rounding(math.square(R))} + { {{${rounding(math.square(1/ (2*Math.PI*C)))} \\over {f}^2} } } } &nbsp; \\Omega  \\) 
        </ul>

        <h5 class ="solnHead"> Bode Plot (Magnitude and Phase) </h5>
    
        <div class="row justify-content-center mb-2">
          <div class="col-md-9">
            <div id="MagnitudePlot"></div>
            <div id="PhasePlot"></div>
          </div>
        </div>
      </div>`;
  
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
  
        <p class ="serif" > You have entered an invalid (negative or non-numeric) value. Please enter a correct input and try again.  </p>
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

      <p class ="serif" > You have entered less than two values or all the three values. Please enter only two valid inputs and try again for successful computation. </p>
    </div>`;

  }
}


//Displaying First order High Pass RL filter

document.querySelector('.js-RLhighpassbtn').addEventListener('click', firstHighPassRL);

function firstHighPassRL(){
  
  let R = parseFloat(document.querySelector('.js-resistanceHPRL').value)
  let R_unit = document.querySelector('.js-resistanceHPRL-unit').value
  let L = parseFloat(document.querySelector('.js-inductance-HPRL').value)
  let L_unit = document.querySelector('.js-inductance-HPRL-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffHPRL').value)
  let Wc_unit = document.querySelector('.js-cutoffHPRL-unit').value
  

  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });

  //check for only two inputs
  if (((R && Wc) || (R && L) || (Wc && L)) && !(R && L && Wc)) {
    let inputs = [R, L, Wc];
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
      //Cutoff
      if(Wc_unit === 'Hz'){
        Wc = Wc*Math.PI*2;
      }

      
      let cutoffDerivation = `
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          \\( \\bullet \\; \\) Using Voltage division
          \\(  \\frac{V_o}{V_i} = \\frac{Z_L}{Z_L + Z_R} \\) <br>
          \\( \\bullet \\; Z_L = {sL}\\) &nbsp; &nbsp; &nbsp;
          \\( s = jw \\)  &nbsp; &nbsp; &nbsp;
          \\(  Z_R = R \\) <br>
          \\( \\bullet \\;  \\frac{V_o}{V_i} = {sL \\over {R + sL}} \\) <br>  

          \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert {sL \\over {R + sL}} \\rvert} = {\\lvert {(jw_c)L \\over {R + (jw_c)L}}  \\rvert} \\) <br> 
          \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
          \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{(L(w_c))^2} \\over \\sqrt { {(L(w_c))^2} + {R^2} } } = { {L(w_c)} \\over \\sqrt { (L(w_c))^2 + {R^2} } } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
          \\( ({1 \\over \\sqrt{2}})^2 = ({ {L(w_c)} \\over \\sqrt { (L(w_c))^2 + {R^2} } })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
          \\( {1 \\over 2} = { ({L(w_c)})^2 \\over  { (L(w_c))^2 + {R^2} } } \\) <br>
          \\( \\bullet \\; { (L(w_c))^2 + {R^2} } =  2 \\cdot ({L(w_c)})^2, \\) &nbsp; &nbsp; &nbsp; \\( ({L(w_c)})^2 =  {R^2}, \\) &nbsp; &nbsp; &nbsp; \\( {L(w_c)} = R \\) <br>
          \\( \\bullet \\;  w_c =  { R \\over L } \\)
    `

      let SolutionElement = ''
      if (R &&  Wc){
        L = R/Wc;
        SolutionElement = `
        <h5 class ="solnHead" >Inductance</h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Cutoff Frequency (\\( W_c \\)) = ${rounding(Wc)} \\( rad \\over sec \\) </p>

        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

          ${cutoffDerivation}
           &nbsp;  \\( L = { R \\over w_c} \\) <br>
          \\( \\bullet \\; L = { ${rounding(R)} \\over ${rounding(Wc)}} \\approx ${rounding(L)}  H\\)
        </ul>
        `
      }

      else if (R && L){
        Wc = R/L;
        SolutionElement = `
        <h5 class ="solnHead" >Cutoff Frequency </h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Inductance (L) = ${L} H </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

          ${cutoffDerivation}
          &nbsp; \\( = { ${R} \\over {(${L})} } \\approx ${rounding(R/L)}\\)  \\( {rad \\over sec} \\) <br>
          \\( f_c =  {{w_c} \\over {2\\pi}} \\) \\( \\approx ${ rounding(Wc /(Math.PI*2))} \\)  &nbsp; Hz

        </ul>
        `

      }

      else if (L && Wc) {
        R = Wc*L;
    
        SolutionElement = `
        <h5 class ="solnHead" >Resistance</h5>

        <p class ="serif"> Given values: Capacitance = ${L} (H) and Cutoff Frequency \\( W_c \\) = ${rounding(Wc)} \\( rad \\over sec \\) </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

          ${cutoffDerivation}
          &nbsp; &nbsp; \\( R = {w_c \\cdot L}  \\) <br>
          \\( R = { (${rounding(Wc)})(${rounding(L)})} \\approx ${rounding(Wc*L)} \\Omega \\) 
        </ul>
        `
      }

      //Bode plot values
      numerator = [0, L];
      denominator = [R, L];
      generateBodePlot(numerator, denominator, Wc); 
      
      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
      
        <p class ="serif"> A high pass filter can be designed using a resistor and an inductor where the output voltage is across the inductor. </p>

        <div class="text-center d-none d-xl-block mb-3">
          <span class="tt" data-bs-placement="bottom" title="RL High Pass Filter Schematic">
            <img src="../img/filterdesign/RLhighpass.PNG" class = "rounded" width = "55%" height = "55%" alt="RL High Pass Filter">
          </span>
          <p class="subtitles">RL high pass filter schematic</p>
        </div>

        ${SolutionElement}

        <h5 class ="solnHead" >Transfer Function </h5>
  
        <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">  
          \\( \\bullet \\; \\) Using Voltage division:
          \\( \\frac{V_o}{V_i} = \\frac{Z_L}{Z_L + Z_R} = {sL \\over {R + sL}} \\) <br>
          \\( \\bullet \\; \\frac{V_o}{V_i} = {${rounding(L)}s \\over {${rounding(L)}s + ${rounding(R)}} }  \\) 
        </ul>

        <h5 class ="solnHead" >Gain</h5>
      
        <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert = {\\lvert {sL \\over {R + sL}} \\rvert} = {\\lvert {(jw)L \\over {R + (jw)L}}  \\rvert} =} \\) \\({ \\sqrt{(L(w))^2} \\over \\sqrt { {(L(w))^2} + {R^2} } } \\)</li>
          <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {L(w)} \\over \\sqrt { (L(w))^2 + {R^2} } }  = { {(${rounding(L)})(w)} \\over  \\sqrt{{((${rounding(L)}) (w))}^2 + (${rounding(R)})^2 } } = { {${rounding(L)}(w)} \\over  \\sqrt{ ${rounding(math.square(L))}w^2} +${rounding(math.square(R))} } \\)</li>
          <li>The gain plot with respect to frequency can be found below at bode plot section</li>
        </ul>
  
        <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

        <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\frac{V_o}{V_i} = {sL \\over {R + sL}} = {(jw)L \\over {R + (jw)L}} \\)  <br>
          \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
          \\( \\bullet \\; \\phi = {\\pi \\over 2} - tan^{-1} ({ {wL} \\over R}) \\text{ rad} \\) <br>
          \\( \\bullet \\; \\phi = ({ {\\pi \\over 2} - tan^{-1} ({ {wL} \\over R}) }) \\\cdot ({180 \\over \\pi}) &deg =  ({ {\\pi \\over 2} - tan^{-1} ({ {${rounding(L)}w} \\over ${rounding(R)}}) }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br>
          \\( \\bullet \\; \\phi = ({ {\\pi \\over 2} - tan^{-1} ({ ${rounding(L/R)}w})  }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br> 
          The phase shift plot with respect to frequency can be found below at bode plot section.
        </ul>
  
        <h5 class ="solnHead" >Total Impedance</h5>

        <p class ="serif"> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit, and it affects the gain and phase shift of the circuit. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">    
          \\( \\bullet \\; Z = \\sqrt {R^2 + {X_L}^2} \\) &nbsp; where \\( X_L\\) = impedance of the inductor <br>
          \\( \\bullet \\; \\lvert {X_L} \\rvert = {(2 \\pi f) \\cdot L} \\) &nbsp; &nbsp;
          \\( Z = \\sqrt {R^2 + ({ {(2 \\pi f) \\cdot L}})^2} \\) <br>
          \\( \\bullet \\; Z = \\sqrt {${rounding(R)}^2 + ({ {(2 \\pi f) \\cdot ${rounding(L)} }})^2} \\approx \\sqrt {${rounding(math.square(R))} + { {{${rounding(math.square(L*2*Math.PI))} {f}^2} } } } \\) &nbsp; \\( \\Omega  \\) 
        </ul>

        <h5 class ="solnHead"> Bode Plot (Magnitude and Phase) </h5>
        <div class="row justify-content-center mb-2">
          <div class="col-md-9">
            <div id="MagnitudePlot"></div>
            <div id="PhasePlot"></div>
          </div>
        </div>
      </div>`;
  
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

      <p class ="serif" > You have entered less than two values or all the three values. Please enter only two valid inputs and try again for successful computation.</p>
    </div>`;

  }
}