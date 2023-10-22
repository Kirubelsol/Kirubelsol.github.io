//Displaying Active first order RRC low pass filter

document.querySelector('.js-RRClowpassbtn').addEventListener('click', firstLowPassRRC);
//use double
function firstLowPassRRC(){

  let Ri = parseFloat(document.querySelector('.js-resistanceiLPRRC').value)
  let Ri_unit = document.querySelector('.js-resistanceiLPRRC-unit').value
  let Rf = parseFloat(document.querySelector('.js-resistancefLPRRC').value)
  let Rf_unit = document.querySelector('.js-resistancefLPRRC-unit').value
  let C = parseFloat(document.querySelector('.js-capacitanceLPRRC').value)
  let C_unit = document.querySelector('.js-capacitanceLPRRC-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffLPRRC').value)
  let Wc_unit = document.querySelector('.js-cutoffLPRRC-unit').value
  
  //Bode plot values 
  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });

  //check for only two inputs
  if (((Ri && C && Wc) || (Rf && C && Wc) || (Ri && Rf && C) || (Ri && Rf && Wc)) && !(Ri && Rf && C && Wc)) {
    let inputs = [Ri, Rf, C, Wc];
    let invalid = inputs.filter(inputs => inputs <= 0 );
    console.log(invalid);
    //check for a positive input only 
    if(invalid.length === 0){

      //Unit converting
      //Ri
      if (Ri_unit === 'kΩ'){
        Ri = Ri*1000;
      }
      else if (Ri_unit === 'MΩ'){
        Ri = Ri*(10**6);
      }
      else if (Ri_unit === 'mΩ'){
        Ri = Ri/(1000);
      }
      else if (Ri_unit === 'µΩ'){
        Ri = Ri/(10**6);
      }
      //Rf
      if (Rf_unit === 'kΩ'){
        Rf = Rf*1000;
      }
      else if (Rf_unit === 'MΩ'){
        Rf = Rf*(10**6);
      }
      else if (Rf_unit === 'mΩ'){
        Rf = Rf/(1000);
      }
      else if (Rf_unit === 'µΩ'){
        Rf = Rf/(10**6);
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

      <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\). Kirchhoff's Laws and general rules of operational amplifiers can be used to find find the cutoff frequency. <p>

      <ul style="list-style-type:none; line-height: 3;" class = "mb-4 georgia-font fst-italic">
        \\( \\bullet \\; \\) Using the general rule of Op-Amps that potentional different between the inputs is zero  \\( V^{-} = V^{+} = 0\\) <br>
        \\( \\bullet \\; Z_c = {1 \\over {sC}}\\) &nbsp; &nbsp; &nbsp; \\(  Z_R = R \\) &nbsp; &nbsp; &nbsp;
        \\( s = jw \\) <br>
        \\( \\bullet \\; i_1 = { {V_i - V^{-}} \\over {R_i} } = { {V_i - 0} \\over {R_i} } = { {V_i} \\over {R_i} }\\) <br>
        \\( \\bullet \\; \\) From the figure we can see that \\( R_f \\) and \\( C \\) are parallel. <br> 
        \\( \\bullet \\; Z_{R_{f}C} = { {R_f \\cdot Z_{C} } \\over {R_f + Z_{C} } } = { {R_f ({1 \\over {sC}}) } \\over {R_f + {1 \\over {sC}} } }  \\)
        \\( = {R_f \\over {sC}}({sC \\over {1 + R_fsC} }) = {R_f \\over {1 + R_fCs}}  \\) <br>
        \\( \\bullet \\; i_2 = { {V_o - V^{-}} \\over {Z_{R_{f}C}} } = { {V_o} \\over {Z_{R_{f}C_{f}}} } = V_o ({{1+R_fCs} \\over {R_f}})\\) <br>
        \\( \\bullet \\;\\)Using Kirchhoff's current law (KCL) and the fact that no current flows through both inputs of the op-Amp: \\( i_1 + i_2 = 0\\) &nbsp; \\( i_1 = -i_2\\) <br>
        \\( \\bullet \\; { {V_i \\over {R_i}} = -V_o ({{1+R_fCs} \\over {R_f}})  } \\) &nbsp; &nbsp; \\( { {V_o \\over {V_i}} = {-R_f \\over {R_i}} ({{1} \\over {1+R_fCs}})  } \\) <br>

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fCs}}) \\rvert} = {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fC(jw_c)}}) \\rvert} = {\\lvert {-R_f \\over {R_i}} \\rvert} {\\lvert {{1} \\over {1+R_fC(jw_c)}} \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz. \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { {R_f \\over {R_i}} ( { \\sqrt{ {1} ^2} \\over \\sqrt { { (1)^2} + {({R_fCw_c})^2} } } }) =  { {R_f \\over {R_i}} ( { 1 \\over \\sqrt { { (1)^2} + {({R_fCw_c})^2} } } })\\) <br>

        \\( \\bullet \\; ({1 \\over \\sqrt{2}})^2 =  ( {{ {R_f \\over {R_i}} ( { {1}  \\over \\sqrt { { 1} + {({R_fCw_c})^2} } } })} )^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} =  { ({R_f \\over {R_i}})^2 {( {1 \\over { { 1 } + {({R_fCw_c} })^2} } } )} \\) <br>
        \\( \\bullet \\; 2({R_f \\over {R_i}})^2 = {1 + ({R_fCw_c})^2}  \\) &nbsp; , &nbsp; &nbsp; \\( \\sqrt {2({R_f \\over {R_i}})^2 - 1} = w_cR_fC, \\) &nbsp; &nbsp; &nbsp; \\( w_c = { {\\sqrt {2({R_f \\over {R_i}})^2 - 1} } \\over {R_fC} }\\) <br>

    `

      let SolutionElement = ''
      if (Ri && Rf && C){
        Wc = math.sqrt(( (2*Math.pow((Rf/Ri),2)) -1)) /(Rf*C) 
        console.log((( (2*Math.pow((Rf/Ri),2)) -1)) /(Rf*C));
        SolutionElement = `
        <h5 class ="solnHead" > Cutoff Frequency</h5>

        <p class ="serif"> Given values: \\( R_i \\) = ${Ri} \\( \\Omega \\) , \\( R_f \\) = ${Rf} \\( \\Omega \\) and  C = ${C} F  </p>

        ${cutoffDerivation}
        \\( \\bullet \\; w_c = { {\\sqrt {2( {{${rounding(Rf)} \\over {${rounding(Ri)}} })}^2 - 1} } \\over {${rounding(Rf)}(${rounding(C)})} } \\approx 
        ${Wc} { rad \\over {sec} } \\) <br> 
        \\( \\bullet \\; f_c =  {{w_c} \\over {2\\pi}} \\). &nbsp; Hence  \\( f_c\\approx ${ rounding(Wc /(Math.PI*2))} \\) &nbsp; Hz

      </ul> 
        `
      }

      else if (Ri && C && Wc){
        Rf = math.sqrt(1/ ((2/(Ri*Ri)) - Math.pow((C*Wc),2)))
        SolutionElement = `
        <h5 class ="solnHead" >Resistance \\( (R_f) \\) </h5>

        <p class ="serif"> Given values: \\( R_i \\) = ${Ri} \\( \\Omega \\) , C = ${C} F and  \\( w_c = ${rounding(Wc)} {rad \\over {sec} }\\)  </p>
        ${cutoffDerivation}
        \\( \\bullet \\; \\) After rearranging the cutoff frequency equation: \\( R_f = \\sqrt { ({1 \\over { {2 \\over {R_i}^2} - ({Cw_c})^2   }} ) } \\) <br> 
        \\( \\bullet \\; R_f = \\sqrt{ ({1 \\over { {2 \\over {${Ri}}^2} - {${C}(${rounding(Wc)})}^2   }} ) } \\approx  ${rounding(math.sqrt(1/ ((2/(Ri*Ri)) - Math.pow((C*Wc),2))))} \\Omega \\)
        `
      }

      else if (Rf && C && Wc){
        Ri = math.sqrt( (2*Rf*Rf)/ (1 + math.pow((Rf*C*Wc),2)))
        SolutionElement = `
        <h5 class ="solnHead" >Resistance \\( (R_i) \\) </h5>

        <p class ="serif"> Given values: \\( R_f \\) = ${Rf} \\( \\Omega \\) , C = ${C} F and  \\( w_c = ${rounding(Wc)} {rad \\over {sec} }\\)  </p>
        ${cutoffDerivation}
        \\( \\bullet \\; \\) After rearranging the cutoff frequency equation: \\( R_i = \\sqrt { ({ {2({R_f})^2} \\over { 1 + ({R_fCW_c})^2  }} ) } \\) <br>
        \\( \\bullet \\; R_i = \\sqrt { ({ {2({${rounding(Rf)}})^2} \\over { 1 + ({${rounding(Rf)}(${rounding(C)})(${rounding(Wc)})})^2  }} } \\approx  ${rounding(math.sqrt( (2*Rf*Rf)/ (1 + math.pow((Rf,C,Wc),2))))} \\Omega \\)
        `
      }

      else if (Ri && Rf && Wc){
        C = math.sqrt( (2*math.pow((Rf/Ri),2) - 1)/ math.pow((Rf*Wc),2))
        SolutionElement = `
        <h5 class ="solnHead" >Resistance (R_i) </h5>

        <p class ="serif"> Given values: \\( R_i \\) = ${Ri} \\( \\Omega \\),  \\( R_f \\) = ${Rf} \\( \\Omega \\) , and (\\ w_c = ${Wc} rad \\over {sec}\\)  </p>
        ${cutoffDerivation}
        \\( \\bullet \\; \\) After rearranging the cutoff frequency equation: \\( C = \\sqrt{ {2({R_f \\over {Ri}})^2 -1} \\over {R_fw_c}^2 } \\) <br> 
        \\( \\bullet \\; C = \\sqrt{ {2({${rounding(Rf)} \\over { ${rounding(Ri)} }})^2 -1} \\over {${rounding(Rf)}(${rounding(Wc)})}^2 } \\approx  ${rounding(math.sqrt( (2*math.pow((Rf/Ri),2) - 1)/ math.pow((Rf*Wc),2)))} F \\)
        `
      }

      
      //Bode plot values
      numerator = [-Rf];
      denominator = [Ri, Rf*Ri*C];
      generateBodePlot(numerator, denominator, Wc); 

      if ( !(Ri > 0) || !(Rf > 0) || !(C > 0) || !(Wc > 0) ){
        element.innerHTML = `
        <div class = "container-lg mt-5">
          <div class="text-center"> 
            <h4 class ="slogan mb-3" >Solution </h4>
          </div>
          <p class ="serif"> The inputs that you have given have resulted in invalid (negative result). Please insert valid inputs. </p>
        </div>
      `  
      }
      
      else{
        element.innerHTML = `
        <div class = "container-lg mt-5">
          <div class="text-center"> 
            <h4 class ="slogan mb-3" >Solution </h4>
          </div>
        
          <p class ="serif"> An active low pass filter can be designed using an op-amp, two resistors, and a capacitor with configuration shown below. </p>

          <div class="text-center d-none d-xl-block mb-3">
            <span data-bs-placement="bottom" title="Active RC Low Pass Filter Schematic">
              <img src="images/ActiveRLCLowPass.PNG" class = "rounded" width = "55%" height = "55%" alt="Active Low Pass Filter">
            </span>
            <p class="fst-italic">Active RC low pass filter schematic</p>
          </div>
          
          ${SolutionElement}

          <h5 class ="solnHead mt-4" >Transfer Function </h5>
    
          <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
          <ul style="list-style-type:none; line-height: 2.5;" class = " georgia-font fst-italic mb-4 ">  
            \\( \\bullet \\; \\) Using Kirchhoff's laws and general op-amp laws: \\(  { {V_i \\over {R_i}} = -V_o ({{1+R_fsC} \\over {R_f}})  } \\);  &nbsp; &nbsp; \\( { {V_o \\over {V_i}} = {-R_f \\over {R_i}} ({{1} \\over {1+R_fsC}})  } \\) <br> 

            \\( \\bullet \\; \\frac{V_o}{V_i} = {-${rounding(Rf)} \\over {${rounding(Ri)}}} ({{1} \\over {1+(${rounding(Rf)})(${rounding(C)})s} }) \\) 
            \\(  = {-${rounding(Rf/Ri)}} ({{1} \\over {1+ ${rounding(Rf*C)}s} })\\) 
          </ul>

          <h5 class ="solnHead" >Gain</h5>
        
          <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
          <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
            <li> \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fsC}})  \\rvert} = {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fC(jw)}})  \\rvert} \\)</li>
            <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  {  {R_f \\over {R_i}} ( { 1 \\over \\sqrt { {1} + {({R_fCw})^2} } } ) } = {
            {${rounding(Rf/Ri)}} ( { 1 \\over \\sqrt { {1} + {({${rounding(Rf*C)}w})^2} }  }) }\\)</li>
            <li>The gain plot with respect to frequency can be found below at bode plot section. </li>
          </ul>
    
          <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

          <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

          <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
            \\(  \\bullet \\; \\frac{V_o}{V_i} = {-R_f \\over {R_i}} ({{1} \\over {1+R_fCs}}) \\) <br>
            \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
            \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({R_fC(w) \\over 1}) = \\pi - tan^{-1} ({R_fC(w)}) \\) <br>
            \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({R_fC(w) }) \\cdot ({180 \\over \\pi}) &deg \\) <br>
            \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({${Rf*C}w}) \\cdot ({180 \\over \\pi}) &deg \\) <br> 
            The phase shift plot with respect to frequency can be found below at bode plot section.
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

      <p class ="serif" > You have entered less than three or all of the values. Please enter only three for successful calculation. </p>
    </div>`;

  }

}


//Displaying Active first order RCC high pass filter

document.querySelector('.js-RCChighpassbtn').addEventListener('click', firstHighPassRCC);
//use double
function firstHighPassRCC(){

  let R = parseFloat(document.querySelector('.js-resistanceHPRCC').value)
  let R_unit = document.querySelector('.js-resistanceHPRCC-unit').value
  let Ci = parseFloat(document.querySelector('.js-capacitanceiHPRCC').value)
  let Ci_unit = document.querySelector('.js-capacitanceiHPRCC-unit').value
  let Cf = parseFloat(document.querySelector('.js-capacitancefHPRCC').value)
  let Cf_unit = document.querySelector('.js-capacitancefHPRCC-unit').value
  let Wc = parseFloat(document.querySelector('.js-cutoffHPRCC').value)
  let Wc_unit = document.querySelector('.js-cutoffHPRCC-unit').value
  
  //Bode plot values 
  var element = document.querySelector('.js-solution');
  element.scrollIntoView({ behavior: "smooth" });

  //check for only two inputs
  if (((Ci && R && Wc) || (Ci && Cf && Wc) || (Ci && Cf && R) || (Cf && R && Wc)) && !(Ci && Cf && R && Wc)) {
    let inputs = [Ci, Cf, R, Wc];
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

      //Ci
      if (Ci_unit === 'kF'){
        Ci = Ci*1000;
      }
      else if (Ci_unit === 'MF'){
        Ci = Ci*(10**6);
      }
      else if (Ci_unit === 'mF'){
        Ci = Ci/(1000);
      }
      else if (Ci_unit === 'µF'){
        Ci = Ci/(10**6);
      }

      //Cf
      if (Cf_unit === 'kF'){
        Cf = Cf*1000;
      }
      else if (Cf_unit === 'MF'){
        Cf = Cf*(10**6);
      }
      else if (Cf_unit === 'mF'){
        Cf = Cf/(1000);
      }
      else if (Cf_unit === 'µF'){
        Cf = Cf/(10**6);
      }
      //Cutoff
      if(Wc_unit === 'Hz'){
        Wc = Wc*Math.PI*2;
      }

      let cutoffDerivation = `

      <p class ="serif"> The cutoff frequency is the frequency at which the magnitude of \\( Vout \\over Vin \\) is often defined to be below \\( {-3dB =} {1 \\over \\sqrt{2}} \\). Kirchhoff's Laws and general rules of operational amplifiers can be used to find find the cutoff frequency. <p>

      <ul style="list-style-type:none; line-height: 3;" class = "mb-4 georgia-font fst-italic">
        \\( \\bullet \\; \\) Using the general rule of Op-Amps that potentional different between the inputs is zero:  \\( V^{-} = V^{+} = 0\\) <br>
        \\(  \\bullet \\; Z_c = {1 \\over {sC}}\\) &nbsp; &nbsp; &nbsp; \\(  Z_R = R \\) &nbsp; &nbsp; &nbsp; \\( s = jw \\) <br>
        \\( \\bullet \\; i_1 = { {V_i - V^{-}} \\over {Z_{C_i}} } = { {V_i - 0} \\over {1 \\over {sC_i}} } = { V_i(sC_i) }\\) <br>
        From the figure we can see that \\( R \\) and \\( C_f \\) are parallel. <br> 
        \\( \\bullet \\; Z_{RC_f} = { {R \\cdot Z_{C_f} } \\over {R + Z_{C_f} } } = { {R ({1 \\over {sC_f}}) } \\over {R + {1 \\over {sC_f}} } }  \\)
        \\( = {R \\over {sC_f}}({sC_f \\over {1 + R(sC_f)} }) = {R \\over {1 + RC_fs}}  \\) <br>
        \\( \\bullet \\; i_2 = { {V_o - V^{-}} \\over {Z_{RC_f}} } = { {V_o} \\over {Z_{RC_{f}}} } = V_o ({{1+RC_fs} \\over {R}})\\) <br>
        \\( \\bullet \\; \\) Using Kirchhoff's current law (KCL) and the fact that no current flows through both inputs of the op-Amp: \\( i_1 + i_2 = 0\\),  &nbsp; \\( i_1 = -i_2\\) <br>
        \\( \\bullet \\; { {V_i(sC_i)} = -V_o ({{1+RC_fs} \\over {R}})  } \\) &nbsp; &nbsp; \\( { {V_o \\over {V_i}} = { {-RC_is} \\over {1 + RC_fs} }  } \\) <br>

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert { {-RC_is} \\over {1 + RC_fs} }  \\rvert} = {\\lvert { {-RC_i(jw_c)} \\over {1 + RC_f(jw_c)} }  \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}=   { \\sqrt{ {(RC_iw_c)} ^2} \\over \\sqrt { { (1)^2} + {({RC_fw_c})^2} } }  = { RC_iw_c \\over \\sqrt { { 1 } + {({RC_fw_c})^2} } }  \\) <br>

        \\( \\bullet \\; ({1 \\over \\sqrt{2}})^2 = ({ RC_iw_c \\over \\sqrt { { 1 } + {({RC_fw_c})^2} } })^2 , \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} =  { {(RC_iw_c)}^2 \\over { { 1 } + {({RC_fw_c})^2} } }  \\) <br>
        \\( \\bullet \\; 2({RC_iw_c})^2 = 1 + ({RC_fw_c})^2 \\) &nbsp; , &nbsp; &nbsp; \\( 2({RC_iw_c})^2 - ({RC_fw_c})^2 = 1 \\) <br>
        \\( \\bullet \\; 1 = {w_c}^2( 2({RC_i})^2 - ({RC_f})^2) \\) , &nbsp; &nbsp; &nbsp; \\( w_c = { 1 \\over \\sqrt{ { 2({RC_i})^2 - ({RC_f})^2} } }\\)<br>

    `

      let SolutionElement = ''
      if (Ci && Cf && R){
        Wc = 1 / (math.sqrt((2*math.square(R*Ci)) - math.square(R*Cf)));
        SolutionElement = `
        <h5 class ="solnHead" > Cutoff Frequency \\( (w_c) \\) </h5>

        <p class ="serif"> Given values: \\( R \\) = ${R} \\( \\Omega \\) , \\( C_i \\) = ${Ci} F and  \\( C_f  \\)= ${Cf} F  </p>

        ${cutoffDerivation}
        \\( \\bullet \\; w_c = { 1 \\over \\sqrt{ { 2({${rounding(R)}(${rounding(Ci)})})^2 - ({${rounding(R)}(${rounding(Cf)})})^2} } } \\approx 
        ${rounding(1 / (math.sqrt((2*math.square(R*Ci)) - math.square(R*Cf))))} { rad \\over {sec} } \\) <br> 
        \\( \\bullet \\; f_c =  {{w_c} \\over {2\\pi}} \\). &nbsp; Hence  \\( f_c\\approx ${ rounding(Wc /(Math.PI*2))} \\) &nbsp; Hz

      </ul> 
        `
      }

      else if (Ci && R && Wc){
        Cf = math.sqrt (((2*math.square(R*Ci*Wc)) - 1)/(R*Wc))
        SolutionElement = `
        <h5 class ="solnHead" > Capacitance  \\( (C_f) \\) </h5>

        <p class ="serif"> Given values: \\( R \\) = ${R} \\( \\Omega \\) , \\( C_i \\) = ${Ci} F and  \\( w_c = ${rounding(Wc)} {rad \\over {sec} }\\)  </p>
        ${cutoffDerivation}
        \\( \\bullet \\; \\) After rearranging the cutoff frequency equation: \\( C_f = \\sqrt { { 2({RC_iw_c})^2 - 1 } \\over {Rw_c} } \\) <br> 
        \\( \\bullet \\; C_f = \\sqrt { { 2({(${rounding(R)})(${rounding(Ci)})(${rounding(Wc)})})^2 - 1 } \\over {${rounding(R)}(${rounding(Wc)})} }  \\approx  ${rounding(Cf)} F \\)
        `
      }

      else if (Cf && R && Wc){
        Ci = math.sqrt( (1 + math.pow((R*Cf*Wc),2))/ (2*math.square(R*Wc)))
        SolutionElement = `
        <h5 class ="solnHead" > Capacitance \\( (C_i) \\) </h5>

        <p class ="serif"> Given values: \\( R \\) = ${R} \\( \\Omega \\) , \\( C_f \\) = ${Cf} F and  \\( w_c = ${rounding(Wc)} {rad \\over {sec} }\\)  </p>
        ${cutoffDerivation}
        \\( \\\\bullet \\; \\) After rearranging the cutoff frequency equation: \\( C_i = \\sqrt{ {1+ {(RC_f)w_c}^2 } \\over {2{(Rw_c)}^2} } \\) <br>
        \\( \\bullet \\; C_i = \\sqrt{ {1+ {(${rounding(R)})(${rounding(Cf)})(${rounding(Wc)})}^2 } \\over {2{(${rounding(R)}(${rounding(Wc)}))}^2} }\\approx  ${rounding(math.sqrt( (1 + math.pow((R*Cf*Wc),2))/ (2*math.square(R*Wc))))} F\\)
        `
      }

      else if (Ci && Cf && Wc){
        R = 1 / (math.sqrt((2*math.square(Wc*Ci)) - math.square(Wc*Cf)));
        SolutionElement = `
        <h5 class ="solnHead" >Resistance (R) </h5>

        <p class ="serif"> Given values: \\( C_i \\) = ${Ci} F ,  \\( C_f \\) = ${Cf} F , and (\\ w_c = ${Wc} rad \\over {sec}\\)  </p>
        ${cutoffDerivation}
        \\( \\bullet \\; \\)After rearranging the cutoff frequency equation: \\( R = { 1 \\over \\sqrt{ { 2({C_iw_c})^2 - ({C_fw_c})^2} } } \\) <br> 
        \\( \\bullet \\; R = { 1 \\over \\sqrt{ { 2({${rounding(Ci)}(${rounding(Wc)})})^2 - ({${rounding(Cf)}(${rounding(Wc)})})^2} } } \\approx  ${rounding(1 / (math.sqrt((2*math.square(Wc*Ci)) - math.square(Wc*Cf))))} \\Omega \\)
        `
      }

      
      //Bode plot values
      numerator = [0, -(R*Ci)];
      denominator = [1, R*Cf];
      generateBodePlot(numerator, denominator, Wc); 

      if ( !(R > 0) || !(Ci > 0) || !(Cf > 0) || !(Wc > 0) ){
        element.innerHTML = `
        <div class = "container-lg mt-5">
          <div class="text-center"> 
            <h4 class ="slogan mb-3" >Solution </h4>
          </div>
          <p class ="serif"> The inputs that you have given have resulted in invalid (negative result). Please insert valid inputs. </p>
        </div>
      `  
      }

      else {
        element.innerHTML = `
        <div class = "container-lg mt-5">
          <div class="text-center"> 
            <h4 class ="slogan mb-3" >Solution </h4>
          </div>
        
          <p class ="serif"> An active high pass filter can be designed using an op-amp, two capacitors, and a resistor with configuration shown below. </p>

          <div class="text-center d-none d-xl-block mb-3">
            <span data-bs-placement="bottom" title="Active RC high Pass Filter Schematic">
              <img src="images/ActiveRLCHighPass.PNG" class = "rounded" width = "55%" height = "55%" alt="Active High Pass Filter">
            </span>
            <p class="fst-italic">Active RC High pass filter schematic</p>
          </div>
          
          ${SolutionElement}

          <h5 class ="solnHead mt-4" >Transfer Function </h5>
    
          <p class ="serif"> A transfer functions describes the relationship between output and input voltage as ratio in terms of frequency domain. </p>
          <ul style="list-style-type:none; line-height: 2.5;" class = " georgia-font fst-italic mb-4 ">  
            \\( \\bullet \\; \\)Using Kirchhoff's laws and general op-amp laws \\(  { {V_i(sC_i)} = -V_o ({{1+RC_fs} \\over {R}}) }  \\)  &nbsp; &nbsp; \\(  { {V_o \\over {V_i}} = { {-RC_is} \\over {1 + RC_fs} }  } \\) <br> 

            \\( \\bullet \\;  { {V_o \\over {V_i}} = { {-(${rounding(R)}(${rounding(Ci)}))s} \\over {1 + (${rounding(R)}(${rounding(Cf)}))s} }  } \\) 
            \\(  = { {-${rounding(R*Ci)}s} \\over {1 + ${rounding(R*Cf)}s} }  \\) 
          </ul>

          <h5 class ="solnHead" >Gain</h5>
        
          <p class ="serif"> Voltage gain is the ratio of magnitude of output voltage to input voltage indicating attenuation or amplification.</p>
          <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">
            <li> \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert { {-RC_is} \\over {1 + RC_fs} } \\rvert} = {\\lvert { {-RC_i(jw)} \\over {1 + RC_f(jw)} }  \\rvert} \\)</li>
            <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { (RC_i)w \\over \\sqrt { { 1 } + {({(RC_f)w})^2} } }  = 
            { (${rounding(R)}(${rounding(Ci)}))w \\over \\sqrt { { 1 } + {({(${rounding(R)}(${rounding(Cf)}))w})^2} } } = { ${rounding(R*Ci)}w \\over \\sqrt { { 1 } + {({${rounding(R*Cf)}w})^2} } } \\)</li>
            <li>The gain plot with respect to frequency can be found below at bode plot section</li>
          </ul>
    
          <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

          <p class ="serif"> Phase shift describes the difference in phase between the output and input voltage waveform. </p>

          <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font fst-italic">   
            \\(  \\bullet \\; \\frac{V_o}{V_i} = { {-RC_is} \\over {1 + RC_fs} } = { {-RC_i(jw)} \\over {1 + RC_f(jw)} } \\) <br>
            \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
            \\( \\bullet \\; \\phi = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w) \\over 1}) = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w)}) \\) <br>
            \\( \\bullet \\; \\phi = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w)}) \\cdot ({180 \\over \\pi}) &deg \\) <br>
            \\( \\bullet \\; \\phi = - {\\pi \\over {2}} - tan^{-1} ({${rounding(R*Cf)}w})\\cdot ({180 \\over \\pi}) &deg \\) <br> 
            The phase shift plot with respect to frequency can be found below at bode plot section
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

    }

    //if non-positivie input
    else {
      element.innerHTML = `
      <div class = "container-lg mt-5">
        <div class="text-center"> 
          <h4 class ="slogan mb-3" >Solution </h4>
        </div>
  
        <p class ="serif" >You have entered an invalid (negative or non-numeric) value. Please enter a correct input and try again. </p>
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

      <p class ="serif" > You have entered less than three or all of the values. Please enter only three for successful calculation. </p>
    </div>`;

  }

}
