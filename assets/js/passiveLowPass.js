
//Displaying First order RC low pass filter
document.querySelector('.js-RClowpassbtn').addEventListener('click', firstLowPassRC);

function firstLowPassRC(){

  //get inputs
  let R = parseFloat(document.querySelector('.js-resistanceLPRC').value)
  let R_unit = document.querySelector('.js-resistanceLPRC-unit').value
  let C = parseFloat(document.querySelector('.js-capacitanceLPRC').value)
  let C_unit = document.querySelector('.js-capacitanceLPRC-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffLPRC').value)
  let Wc_unit = document.querySelector('.js-cutoffLPRC-unit').value
  
  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });

  //check for only two inputs
  if (((R && Wc) || (R && C) || (Wc && C)) && ! (R && C && Wc) ){
    let inputs = [R,C,Wc];

    let invalid = inputs.filter(inputs => inputs <= 0  );
    console.log(invalid);
    //check for a positive input only 
    if(invalid.length === 0){

      //Unit conversion
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
          \\( \\bullet \\; \\) Using Voltage division: 
          \\(  \\frac{V_o}{V_i} = \\frac{Z_C}{Z_C + Z_R} \\) <br> 
          \\(  \\bullet \\; Z_c = {1 \\over sc}\\) &nbsp; &nbsp; &nbsp;
          \\( s = jw \\)  &nbsp; &nbsp; &nbsp;
          \\(  Z_R = R \\) <br>
          \\( \\bullet \\; \\frac{V_o}{V_i} = \\frac{1 \\over sc}{ 1 \\over sc + R} = \\frac{1}{RCs+1} \\) <br>  

          \\(  \\bullet \\; {V_o \\over V_i} = {1 \\over \\sqrt{2}}= {\\lvert {1 \\over {RCs+1} } \\rvert} = {\\lvert {1 \\over {RC(jw_c)+1} } \\rvert}\\) <br>
          \\(  w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
          \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{1^2} \\over \\sqrt {{(RCw_c)^2} + {1^2}} } = { 1 \\over \\sqrt { 1 + (RCw_c)^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
          \\( ({1 \\over \\sqrt{2}})^2 = ({ 1 \\over \\sqrt { 1 + (RCw_c)^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
          \\( {1 \\over 2} = { 1 \\over  { 1 + (RCw_c)^2} } \\) <br>
          \\( \\bullet \\; { 1 + (RCw_c)^2} =  2, \\) &nbsp; &nbsp; &nbsp; \\( { (RCw_c)^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({RC})^2 } \\) <br>
          \\( \\bullet \\; w_c =  { 1 \\over {RC} } \\) 
      `

      let SolutionElement = ''
      if (R &&  Wc){
        C = 1/(R*Wc);
        SolutionElement = `
        <h5 class ="solnHead" >Capacitance</h5>

        <p class ="serif"> Given values: Resistance (R) = ${rounding(R)} \\( \\Omega \\) and Cutoff Frequency (\\( W_c \\)) = ${rounding(Wc)} \\( rad \\over sec \\) </p>

        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation}
          &nbsp; &nbsp; &nbsp;  \\(C = { 1 \\over {Rw_c}} \\) <br>
          \\(\\bullet \\; C = { 1 \\over (${rounding(R)})(${rounding(Wc)})} = { 1 \\over {${rounding(R*Wc)}}} \\approx ${rounding(C)} F\\)
        </ul>
        `
      }

      else if (R && C){
        Wc = (1/(R*C));
        SolutionElement = `
        <h5 class ="solnHead" >Cutoff Frequency </h5>

        <p class ="serif"> Given values: Resistance (R) = ${rounding(R)} \\( \\Omega \\) and Capacitance (C) = ${rounding(C)} F </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation};
          \\({ 1 \\over (${rounding(R)})(${rounding(C)}) } = { 1 \\over {${rounding(R*C)}} } \\approx ${rounding(Wc)} \\) &nbsp; 
          \\({rad \\over sec} \\) <br> \\( \\bullet \\; f_c =  {{w_c} \\over {2\\pi}} \\) \\( \\approx ${rounding(Wc /(Math.PI*2))} \\)  &nbsp; Hz
        </ul>
        `

      }

      else if (C && Wc) {
        R = (1/(C*Wc));
        SolutionElement = `
        <h5 class ="solnHead" >Resistance</h5>

        <p class =""serif"> Given values: Capacitance (C) = ${rounding(C)} (F) and Cutoff Frequency \\( W_c \\) = ${rounding(Wc)} \\( rad \\over sec \\) </p>
        <p class =""serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation};
          &nbsp; &nbsp; &nbsp; \\( R = { 1 \\over {Cw_c}} \\) <br>
          \\( \\bullet \\; R = { 1 \\over (${rounding(C)})(${rounding(Wc)})} = { 1 \\over {${rounding(C*Wc)}}} \\approx ${rounding(R)} \\Omega\\) 
        </ul>
        `
      }

      //Bode plot values
      numerator = [1];
      denominator = [1, R*C];
      generateBodePlot(numerator, denominator, Wc); 

      //update the innerHTML
      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
      
        <p class ="serif"> A low pass filter can be designed using a resistor and capacitor where the output voltage is taken across the capacitor side. </p>

        <div class="text-center d-none d-xl-block mb-3 georgia-font">
          <span data-bs-placement="bottom" title="RC Low Pass Filter Schematic">
          <img src="images/RClowpass.PNG" class = "rounded" width = "40%" height = "40%" alt="RC Low Pass Filter">
          </span>
          <p class="subtitles">RC low pass filter schematic</p>
        </div>        
        
        ${SolutionElement}

        <h5 class ="solnHead" >Transfer Function </h5>
  
        <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">  
          \\( \\bullet \\; \\) Using Voltage division

          \\(  \\frac{V_o}{V_i} = \\frac{1 \\over sc}{ 1 \\over sc + R} = \\frac{1}{RCs+1} \\) <br>
          \\(  \\bullet \\; \\frac{V_o}{V_i} = \\frac{1}{(${rounding(R)})(${rounding(C)})s+1} = \\frac{1}{${rounding(R*C)}s+1} \\) 
        </ul>

        <h5 class ="solnHead" >Gain</h5>
      
        <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification at different frequencies.</p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          <li>  \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert {1 \\over {RCs+1} } \\rvert} = {\\lvert {1 \\over {RC(jw)+1} } \\rvert =} \\) \\({ \\sqrt{1^2} \\over \\sqrt {{(RCw)^2} + {1^2} }} \\)</li>
          <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { 1 \\over  \\sqrt{ 1 + (RC(w))^2} } = { 1 \\over  \\sqrt{ 1 + ${rounding(math.square(R*C))}w^2}} \\)</li>
          <li>The gain plot with respect to frequency can be found below at bode plot section</li>
        </ul>
  
        <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

        <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\( \\bullet \\; \\frac{V_o}{V_i} = {1 \\over {RCs+1} } = {1 \\over {1+ jRC(w)} }\\) <br>
          \\( \\bullet \\;  \\phi = \\) phase shift numberator - phase shift denominator <br>
          \\( \\bullet \\;  \\phi = 0 - tan^{-1} ({RC(w) \\over 1}) = - tan^{-1} ({RC(w)}) \\text{ rad}\\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({RC(w)}) \\cdot ({180 \\over \\pi}) &deg \\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({${rounding(R*C)}w}) \\cdot ({180 \\over \\pi}) &deg \\) <br> 
          The phase shift plot with respect to frequency can be found below at bode plot section
        </ul>
  
        <h5 class ="solnHead" >Total Impedance</h5>

        <p class ="serif"> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">    
          \\( \\bullet \\; Z = \\sqrt {R^2 + {X_c}^2} \\) where &nbsp; \\( X_c \\) = impedance of the capacitor <br>
          \\( \\bullet \\; X_c = {1 \\over {2 \\pi fC}} \\) &nbsp; &nbsp;
          \\( Z = \\sqrt {R^2 + ({1 \\over {2 \\pi fC}})^2} \\) <br>
          \\( \\bullet \\; Z = \\sqrt {${rounding(R)}^2 + ({1 \\over {2 \\pi f (${rounding(C)})}})^2} \\approx \\sqrt {${rounding(math.square(R))} + { 1 \\over {${rounding(1/(math.square(C)))}f^2 } } }  \\text{ } \\Omega  \\) 
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

      <p class ="serif" > You have entered less than two values or all the three values. Please enter only two valid inputs and try again for successful computation. </p>
    </div>`;

  }

}


//Displaying First order RL low pass filter

document.querySelector('.js-RLlowpassbtn').addEventListener('click', firstLowPassRL);

function firstLowPassRL(){

  //get inputs
  let R = parseFloat(document.querySelector('.js-resistanceLPRL').value)
  let R_unit = document.querySelector('.js-resistanceLPRL-unit').value
  let L = parseFloat(document.querySelector('.js-inductance-LPRL').value)
  let L_unit = document.querySelector('.js-inductance-LPRL-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffLPRL').value)
  let Wc_unit = document.querySelector('.js-cutoffLPRL-unit').value
  

  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });
  //check for only two inputs
  if (((R && Wc) || (R && L) || (Wc && L)) && !(R && L && Wc)) {
    let inputs = [R, L, Wc];
    let invalid = inputs.filter(inputs => inputs <= 0);

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
          \\( \\bullet \\; \\)Using Voltage division
          \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_L} \\) <br>
          \\( \\bullet \\; Z_L = {sL}\\) &nbsp; &nbsp; &nbsp;
          \\( s = jw \\)  &nbsp; &nbsp; &nbsp;
          \\(  Z_R = R \\) <br>
          \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} \\) <br>  

          \\( \\bullet \\; {V_o \\over V_i} = {1 \\over \\sqrt{2}}= {\\lvert  {1 \\over {1 + s{L \\over R}}} \\rvert} = {\\lvert {1 \\over {1 + {L \\over R}(jw_c)}}  \\rvert} \\) <br> 
          \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
          \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{1^2} \\over \\sqrt { {({L \\over R}w_c)^2} + {1^2} } } = { 1 \\over \\sqrt { 1 + ({L \\over R}w_c)^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
          \\( ({1 \\over \\sqrt{2}})^2 = ({ 1 \\over \\sqrt { 1 + ({L \\over R}w_c)^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
          \\( {1 \\over 2} = { 1 \\over  { 1 + ({L \\over R}w_c)^2} } \\) <br>
          \\( \\bullet \\; { 1 + ({L \\over R}w_c)^2} =  2, \\) &nbsp; &nbsp; &nbsp; \\( { ({L \\over R}w_c)^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({L \\over R})^2 } \\) <br>
          \\( \\bullet \\; w_c =  { R \\over {L} } \\)
    `
    

      let SolutionElement = ''
      if (R &&  Wc){
        L = R/Wc;
        SolutionElement = `
        <h5 class ="solnHead" >Inductance</h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Cutoff Frequency (\\( W_c \\)) = ${rounding(Wc)} \\( rad \\over sec \\) </p>

        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>
          
        ${cutoffDerivation}
          &nbsp; &nbsp; &nbsp; \\( L = { R \\over {w_c}} \\) <br>
          \\( \\bullet \\; L = { ${R} \\over ${rounding(Wc)}} \\approx ${rounding(L)} H\\)
        </ul>
        `
      }

      else if (R && L){
        Wc = rounding(R/L);
        SolutionElement = `
        <h5 class ="solnHead" >Cutoff Frequency </h5>

        <p class ="serif"> Given values: Resistance (R) = ${R} \\( \\Omega \\) and Inductance = ${L} H </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation}
          \\(  = { ${R} \\over ${L}} \\approx ${rounding(Wc)} &nbsp; {rad \\over sec} \\) <br>
          \\( \\bullet \\; f_c =  {{w_c} \\over {2\\pi}} \\) \\( \\approx ${ rounding(Wc /(Math.PI*2))} \\)  &nbsp; Hz
        </ul>
        `

      }

      else if (L && Wc) {
        R = rounding(Wc*L);
    
        SolutionElement = `
        <h5 class ="solnHead" >Resistance</h5>

        <p class ="serif"> Given values: Inductance = ${L} (H) and Cutoff Frequency \\( W_c \\) = ${rounding(Wc)} \\( rad \\over sec \\) </p>
        <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\) <p>

        ${cutoffDerivation}
           &nbsp; &nbsp; &nbsp; \\( R = { w_c \\cdot L} \\) <br>
          \\( \\bullet \\; R = { (${rounding(Wc)}) \\cdot (${L})} \\approx ${rounding(R)} \\text{ } \\Omega\\)
        </ul>
        `
      }

      //Bode plot values
      numerator = [1];
      denominator = [1, L/R];
      generateBodePlot(numerator, denominator, Wc); 
      

      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
      
        <p class ="serif"> A low pass filter can be designed using a resistor and inductor where the output voltage is taken across the resistor. </p>

        <div class="text-center d-none d-xl-block mb-3">
          <span class="tt" data-bs-placement="bottom" title="RL Low Pass Filter Schematic">
            <img src="images/RLlowpass.PNG" class = "rounded" width = "55%" height = "55%" alt="RL Low Pass Filter">
          </span>
          <p class="subtitles">RL low pass filter schematic</p>
        </div>      

        ${SolutionElement}

        <h5 class ="solnHead" >Transfer Function </h5>
  
        <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">  
          \\( \\bullet \\; \\) Using Voltage division
          \\(  \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} \\) <br>
          \\(  \\bullet \\; \\frac{V_o}{V_i} = \\frac{1}{ 1 + {s {${rounding(L)} \\over ${rounding(R)}}} } = \\frac{1}{${rounding(L/R)}s+1} \\) 
        </ul>

        <h5 class ="solnHead" >Gain</h5>
      
        <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
          <li> \\( \\bullet \\; \\) Gain  \\( = {\\lvert {V_o \\over V_i} \\rvert = \\lvert {1 \\over {1 + s{L \\over R}}} \\rvert} = {\\lvert {1 \\over {1 + (jw){L \\over R}}} \\rvert =} \\) \\({ \\sqrt{1^2} \\over \\sqrt { {(w){L \\over R}}^2  + {1^2} } } \\)</li>
          <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { 1 \\over  \\sqrt{ 1 + {(w){L \\over R}}^2 } } = { 1 \\over  \\sqrt{ 1 + {(w)({${rounding(L)} \\over ${rounding(R)}})}^2 } } = { 1 \\over  \\sqrt{ 1 + ${rounding(math.square(L/R))}w^2} } \\)</li>
          <li>The gain plot with respect to frequency can be found below at bode plot section</li>
        </ul>
  
        <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

        <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
          \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} = {1 \\over {1 + jw{L \\over R}}}  \\)  <br>
          \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
          \\( \\bullet \\; \\phi = 0 - tan^{-1} ({{( {Lw \\over R})} \\over 1}) = - tan^{-1} ({{Lw \\over R}}) \\text{ rad}\\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({{Lw \\over R}}) \\cdot ({180 \\over \\pi}) = - tan^{-1} ({{${rounding(L)}w \\over ${rounding(R)}}}) \\cdot ({180 \\over \\pi}) &deg \\) <br>
          \\( \\bullet \\; \\phi = - tan^{-1} ({${rounding(L/R)}w}) \\cdot ({180 \\over \\pi}) &deg \\) <br> 
          The phase shift plot with respect to frequency can be found below at bode plot section
        </ul>
  
        <h5 class ="solnHead" >Total Impedance</h5>

        <p class ="serif"> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and affects the gain and phase shift of the circuit. </p>
        <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">    
          \\( \\bullet \\; Z = \\sqrt {R^2 + {X_L}^2} \\) where \\( X_L\\) = impedance of the inductor <br>
          \\( \\bullet \\; \\lvert {X_L} \\rvert = {{(2 \\pi f) \\cdot L}} \\) &nbsp; &nbsp;
          \\( Z = \\sqrt {R^2 + ({{(2 \\pi f) \\cdot L}})^2} \\) <br>
          \\( \\bullet \\; Z = \\sqrt {${rounding(R)}^2 + ({{2 \\pi f (${rounding(L)})}})^2} \\approx \\sqrt {${rounding(math.square(R))} + {{${rounding(math.square(L))}(f^2) } } } \\text{ } \\Omega  \\) 
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
  
        <p class ="serif" >  You have entered an invalid (negative or non-numeric) value. Please enter a correct input and try again. </p>
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

      <p class ="serif" > You have entered less than two values or all the three values. Please enter only two valid inputs and try again for successful computation.  </p>
    </div>`;

  }
}








