//RC Low pass filter
var RCLPFelement = document.querySelector('.js-RCLPF');
RCLPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RC low pass filter </h4>
    </div>
    <p class ="serif"> An RC low pass filter can be designed using a resistor and capacitor where the output voltage is taken across the capacitor side.</p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        \\( \\bullet \\; \\) Using Voltage division: 
        \\(  \\frac{V_o}{V_i} = \\frac{Z_C}{Z_C + Z_R} \\) <br> 
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>
        \\( \\bullet \\; \\frac{V_o}{V_i} = \\frac{1 \\over sc}{ 1 \\over sc + R} = \\frac{1}{RCs+1} \\) <br>  

        \\(  \\bullet \\; {V_o \\over V_i} = {1 \\over \\sqrt{2}}= {\\lvert {1 \\over {RCs+1} } \\rvert} = {\\lvert {1 \\over {RC(jw_c)+1} } \\rvert}\\) <br>
        \\(  w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{1^2} \\over \\sqrt {{(RCw_c)^2} + {1^2}} } = { 1 \\over \\sqrt { 1 + (RCw_c)^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
        \\( ({1 \\over \\sqrt{2}})^2 = ({ 1 \\over \\sqrt { 1 + (RCw_c)^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} = { 1 \\over  { 1 + (RCw_c)^2} } \\) <br>
        \\( \\bullet \\; { 1 + (RCw_c)^2} =  2, \\) &nbsp; &nbsp; &nbsp; \\( { (RCw_c)^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({RC})^2 } \\) <br>
        \\( \\bullet \\; w_c =  { 1 \\over {RC} } \\)   &nbsp; &nbsp; &nbsp;  \\(C = { 1 \\over {Rw_c}} \\) &nbsp; &nbsp; &nbsp; \\( R = { 1 \\over {Cw_c}} \\)
    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{1 \\over sc}{ 1 \\over sc + R} = \\frac{1}{RCs+1} \\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        <li>  \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert {1 \\over {RCs+1} } \\rvert} = {\\lvert {1 \\over {RC(jw)+1} } \\rvert =} \\) \\({ \\sqrt{1^2} \\over \\sqrt {{(RCw)^2} + {1^2} }} \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { 1 \\over  \\sqrt{ 1 + (RC(w))^2} } \\)</li>
        The equation indicates that as the frequency increases, the gain decreases conforming that it is low pass filter.
    </ul>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">   
        \\( \\bullet \\; \\frac{V_o}{V_i} = {1 \\over {RCs+1} } = {1 \\over {1+ jRC(w)} }\\) <br>
        \\( \\bullet \\;  \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\;  \\phi = 0 - tan^{-1} ({RC(w) \\over 1}) = - tan^{-1} ({RC(w)}) \\text{ rad}\\) <br>
        \\( \\bullet \\; \\phi = - tan^{-1} ({RC(w)}) \\cdot ({180 \\over \\pi}) &deg \\) <br>
        The equation indicates that the phase will change from \\(0 &deg \\) to \\( -90 &deg \\) as the frequency increases. 
    </ul>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p class ="serif" style="padding-left: 35px; "> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit. </p>
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {R^2 + {X_c}^2} \\) &nbsp; where &nbsp; \\( X_c \\) = impedance of the capacitor <br>
        \\( \\bullet \\; X_c = {1 \\over {2 \\pi fC}} \\) <br>
        \\( \\bullet \\; Z = \\sqrt {R^2 + ({1 \\over {2 \\pi fC}})^2} \\Omega  \\) <br>
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p class ="serif " style="padding-left: 35px; "> The figure below is an example of bode plot of RC low pass filter having cutoff frequency of \\( w_c = 100 {rad \\over sec} \\) . </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="RC Low Pass Filter Schematic">
            <img src="images/RCLPF100.PNG" class = "rounded" alt="RC Low Pass Filter">
        </span>
        <p class="subtitles">RC low pass filter bode plot  \\( ( w_c = 100 {rad \\over sec} ) \\)  </p>
    </div>

</div>
`  

//RL low pass filter

var RLLPFelement = document.querySelector('.js-RLLPF');
RLLPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RL low pass filter </h4>
    </div>
    <p class ="serif"> An RL low pass filter can be designed using a resistor and inductor where the output voltage is taken across the resistor.</p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        \\( \\bullet \\; \\)Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_L} \\) <br>
        \\(  \\bullet \\; Z_L = \\) impedance of inductor in Laplace domain \\( = {sL}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R = R \\) <br>
        \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} \\) <br>  

        \\( \\bullet \\; {V_o \\over V_i} = {1 \\over \\sqrt{2}}= {\\lvert  {1 \\over {1 + s{L \\over R}}} \\rvert} = {\\lvert {1 \\over {1 + {L \\over R}(jw_c)}}  \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{1^2} \\over \\sqrt { {({L \\over R}w_c)^2} + {1^2} } } = { 1 \\over \\sqrt { 1 + ({L \\over R}w_c)^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
        \\( ({1 \\over \\sqrt{2}})^2 = ({ 1 \\over \\sqrt { 1 + ({L \\over R}w_c)^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} = { 1 \\over  { 1 + ({L \\over R}w_c)^2} } \\) <br>
        \\( \\bullet \\; { 1 + ({L \\over R}w_c)^2} =  2, \\) &nbsp; &nbsp; &nbsp; \\( { ({L \\over R}w_c)^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({L \\over R})^2 } \\) <br>

        \\( \\bullet \\; w_c =  { R \\over {L} } \\)  &nbsp; &nbsp; &nbsp; \\( L = { R \\over {w_c}} \\)  &nbsp; &nbsp; &nbsp; \\( R = { w_c \\cdot L} \\) 

    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} \\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        <li> \\( \\bullet \\; \\) Gain  \\( = {\\lvert {V_o \\over V_i} \\rvert = \\lvert {1 \\over {1 + s{L \\over R}}} \\rvert} = {\\lvert {1 \\over {1 + (jw){L \\over R}}} \\rvert =} \\) \\({ \\sqrt{1^2} \\over \\sqrt { {(w){L \\over R}}^2  + {1^2} } } \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { 1 \\over  \\sqrt{ 1 + {(w){L \\over R}}^2 } }  \\)</li>
        The equation indicates that as the frequency increases, the gain decreases conforming that it is low pass filter.
    </ul>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">   
        \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + sL}} = {1 \\over {1 + s{L \\over R}}} = {1 \\over {1 + jw{L \\over R}}}  \\)  <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = 0 - tan^{-1} ({{( {Lw \\over R})} \\over 1}) = - tan^{-1} ({{Lw \\over R}}) \\text{ rad}\\) <br>
        \\( \\bullet \\; \\phi = - tan^{-1} ({{Lw \\over R}}) \\cdot ({180 \\over \\pi}) \\) <br>
        The equation indicates that the phase will change from \\(0 &deg \\) to \\( -90 &deg \\) as the frequency increases. 
    </ul>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p class ="serif" style="padding-left: 35px; "> Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit. </p>
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {R^2 + {X_L}^2} \\) where \\( X_L\\) = impedance of the inductor <br>
        \\( \\bullet \\; \\lvert {X_L} \\rvert = {{(2 \\pi f) \\cdot L}} \\) &nbsp; &nbsp;
        \\( Z = \\sqrt {R^2 + ({{(2 \\pi f) \\cdot L}})^2} \\Omega \\) <br>
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of RL low pass filter having cutoff frequency of \\( w_c = 100 {rad \\over sec} \\) .   </p>


    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="RL Low Pass Filter ">
            <img src="images/RLLPF100.PNG" class = "rounded"  alt="RL Low Pass Filter">
        </span>
        <p class="subtitles">RL low pass filter bode plot  \\( ( w_c = 100 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  

//RC high pass filter

var RCHPFelement = document.querySelector('.js-RCHPF');
RCHPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RC high pass filter </h4>
    </div>
    <p class ="serif"> An RC high pass filter can be designed using a resistor and capacitor where the output voltage is on the resistor side. </p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_C} \\) <br>
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>
        \\(  \\bullet \\; \\frac{V_o}{V_i} = {R \\over {R + {1 \\over {sC}} }} = {RCs \\over {RCs + 1} } \\) <br>  

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert  {RCs \\over {RCs + 1} } \\rvert} = {\\lvert {RC(jw) \\over {RC(jw) + 1} }  \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{(RC(w_c))^2} \\over \\sqrt { {(RC(w_c))^2} + {1^2} } } = { {RC(w_c)} \\over \\sqrt { 1 + (RC(w_c))^2} } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
        \\( ({1 \\over \\sqrt{2}})^2 = ({ {RC(w_c)} \\over \\sqrt { 1 + (RC(w_c))^2} })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} = { ({RC(w_c)})^2 \\over  { 1 + (RC(w_c))^2} } \\) <br>
        \\( \\bullet \\; { 1 + (RC(w_c))^2} =  2 \\cdot ({RC(w_c)})^2, \\) &nbsp; &nbsp; &nbsp; \\( { (RC(w_c))^2} =  1, \\) &nbsp; &nbsp; &nbsp; \\(  (w_c)^2 =  { 1 \\over ({RC})^2 } \\) <br>
        \\( \\bullet \\; w_c =  { 1 \\over {RC} } \\) &nbsp; &nbsp; &nbsp;  \\( C = { 1 \\over {Rw_c}} \\)  &nbsp; &nbsp; &nbsp; \\( R = {1 \\over {(C)(w_c)}  } \\) 

    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = {R \\over {R + {1 \\over {sC}} }} = {RCs \\over {RCs + 1} } \\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert = \\lvert {RCs \\over {RCs + 1} } \\rvert} = {\\lvert {RC(jw) \\over {RC(jw) + 1} } \\rvert =} \\) \\({ \\sqrt{(RC(w))^2} \\over \\sqrt { {({RC}(w))}^2  + {1^2} } } \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {RC(w)} \\over  \\sqrt{ 1 + {({RC}(w))}^2  } }  \\)</li>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" >  The equation indicates that as the frequency increases, the gain also increases since usually RC is significantly less than 1 conforming that it is high pass filter. </p>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\( \\bullet \\; \\frac{V_o}{V_i} ={R \\over {R + {1 \\over {sC}} }} = {R \\over {R + {1 \\over {jwC}} }} = {R \\over {R + {-j \\over {wC}} }} \\)  <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = 0 - tan^{-1} ({{( {-1 \\over {wC}})} \\over R}) = - tan^{-1} ({-{1 \\over {RC(w)}}}) \\text{ rad}\\) <br>
        \\( \\bullet \\; \\phi = - tan^{-1} ({{-1 \\over {RC(w)}}}) \\cdot ({180 \\over \\pi}) \\) <br>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The equation indicates that the phase will change from \\( 90 &deg \\) to \\( 0 &deg \\) as the frequency increases. This is because tan inverse function goes from \\( 0 &deg \\) to \\( -90 &deg \\) as its input increases. Here, since the input is \\( {-1 \\over {RC(w)}}\\) meaning as frequency increases the input becomes less negative meaning the inverse tan goes from \\( -90 &deg \\) to \\( 0 &deg \\). Since the tan inverse is multiplied by negative, the plot should go from \\( 90 &deg \\) to \\( 0 &deg \\) </p>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p style="padding-left: 35px; " class ="mb-4" > Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit.  </p>
    
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {R^2 + {X_c}^2} \\) &nbsp; where \\( X_c\\) = impedance of the capacitor <br>
        \\( \\lvert {X_c} \\rvert = { 1 \\over {(2 \\pi f) \\cdot C}} \\) &nbsp; &nbsp;
        \\( \\bullet \\; Z = \\sqrt {R^2 + ({ 1 \\over {(2 \\pi f) \\cdot C}})^2} \\Omega \\) <br>
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of RC high pass filter having cutoff frequency of \\( w_c = 100 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="RC high pass filter">
            <img src="images/RCHPF100.PNG" class = "rounded"  alt="RC high Pass Filter">
        </span>
        <p class="subtitles">RC high pass filter bode plot  \\( ( w_c = 100 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  


//RL high pass filter

var RLHPFelement = document.querySelector('.js-RLHPF');
RLHPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RL high pass filter </h4>
    </div>
    <p class ="serif"> An RC high pass filter can be designed using a resistor and an inductor where the output voltage is across the inductor. </p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_L}{Z_L + Z_R} \\) <br>
        \\(  \\bullet \\; Z_L = \\) impedance of inductor in Laplace domain \\( = {sL}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R = R \\) <br>
        \\( \\bullet \\;  \\frac{V_o}{V_i} = {sL \\over {R + sL}} \\) <br>  

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert {sL \\over {R + sL}} \\rvert} = {\\lvert {(jw_c)L \\over {R + (jw_c)L}}  \\rvert} \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{(L(w_c))^2} \\over \\sqrt { {(L(w_c))^2} + {R^2} } } = { {L(w_c)} \\over \\sqrt { (L(w_c))^2 + {R^2} } } , \\) &nbsp; &nbsp; &nbsp; &nbsp; 
        \\( ({1 \\over \\sqrt{2}})^2 = ({ {L(w_c)} \\over \\sqrt { (L(w_c))^2 + {R^2} } })^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} = { ({L(w_c)})^2 \\over  { (L(w_c))^2 + {R^2} } } \\) <br>
        \\( \\bullet \\; { (L(w_c))^2 + {R^2} } =  2 \\cdot ({L(w_c)})^2, \\) &nbsp; &nbsp; &nbsp; \\( ({L(w_c)})^2 =  {R^2}, \\) &nbsp; &nbsp; &nbsp; \\( {L(w_c)} = R \\) <br>
        \\( \\bullet \\;  w_c =  { R \\over L } \\) &nbsp; &nbsp; &nbsp;  \\( L = { R \\over w_c} \\) &nbsp; &nbsp; &nbsp;  \\( R = {w_c \\cdot L}  \\)

    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division:
        \\( \\frac{V_o}{V_i} = \\frac{Z_L}{Z_L + Z_R} = {sL \\over {R + sL}} \\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert = {\\lvert {sL \\over {R + sL}} \\rvert} = {\\lvert {(jw)L \\over {R + (jw)L}}  \\rvert} =} \\) \\({ \\sqrt{(L(w))^2} \\over \\sqrt { {(L(w))^2} + {R^2} } } \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {L(w)} \\over \\sqrt { (L(w))^2 + {R^2} } }  \\)</li>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" >  The equation indicates that as the frequency increases, the gain also increases since usually L is significantly less than 1 conforming that it is high pass filter. </p>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\( \\bullet \\; \\frac{V_o}{V_i} = {sL \\over {R + sL}} = {(jw)L \\over {R + (jw)L}} \\)  <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = {\\pi \\over 2} - tan^{-1} ({ {wL} \\over R}) \\text{ rad} \\) <br>
        \\( \\bullet \\; \\phi = ({ {\\pi \\over 2} - tan^{-1} ({ {wL} \\over R}) }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The equation indicates that the phase will change from \\( 90 &deg \\) to \\( 0 &deg \\) as the frequency increases. This is because tan inverse function goes from \\( 0 &deg \\) to \\( 90 &deg \\) as its input increases. Here, since the input is \\( { {wL} \\over R}\\) meaning as frequency increases the inverse tan goes from \\( 0 &deg \\) to \\( 90 &deg \\). Since the tan inverse is subtracted from \\( {\\pi \\over 2} \\), the plot should go from \\( 90 &deg \\) to \\( 0 &deg \\) </p>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p style="padding-left: 35px; " class ="mb-4" > Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit.  </p>
    
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {R^2 + {X_L}^2} \\) &nbsp; where \\( X_L\\) = impedance of the inductor <br>
        \\( \\bullet \\; \\lvert {X_L} \\rvert = {(2 \\pi f) \\cdot L} \\) &nbsp; &nbsp;
        \\( Z = \\sqrt {R^2 + ({ {(2 \\pi f) \\cdot L}})^2} \\Omega \\) <br>
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of RL high pass filter having cutoff frequency of \\( w_c = 100 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="RL high pass filter">
            <img src="images/RLHPF100.PNG" class = "rounded"  alt="RL high Pass Filter">
        </span>
        <p class="subtitles">RL high pass filter bode plot  \\( ( w_c = 100 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  

//Active RRC low pass filter

var RRCLPFelement = document.querySelector('.js-RRCLPF');
RRCLPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RC low pass filter </h4>
    </div>
    <p class ="serif"> An active low pass filter can be designed using an op-amp, two resistors, and a capacitor with configuration shown above.</p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">
        \\( \\bullet \\; \\) Using the general rule of Op-Amps that potentional different between the inputs is zero  \\( V^{-} = V^{+} = 0\\) <br>
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>
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
        \\( \\bullet \\; 2({R_f \\over {R_i}})^2 = {1 + ({R_fCw_c})^2}  \\) &nbsp; , &nbsp; &nbsp; \\( \\sqrt {2({R_f \\over {R_i}})^2 - 1} = w_cR_fC, \\) &nbsp; &nbsp; &nbsp; \\( w_c = { {\\sqrt {2({R_f \\over {R_i}})^2 - 1} } \\over {R_fC} }\\)  &nbsp; &nbsp; &nbsp; <br>
        We can rearrange the equation to find the other parameters given the cutoff frequency and two other passive elements' values. <br> 
        \\( \\bullet \\;  R_f = \\sqrt { ({1 \\over { {2 \\over {R_i}^2} - ({Cw_c})^2   }} ) } \\) &nbsp; &nbsp; &nbsp;   \\( R_i = \\sqrt { ({ {2({R_f})^2} \\over { 1 + ({R_fCW_c})^2  }} ) } \\) &nbsp; &nbsp; &nbsp;  \\( C = \\sqrt{ {2({R_f \\over {Ri}})^2 -1} \\over {R_fw_c}^2 } \\)

    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Kirchhoff's laws and general op-amp laws: \\(  { {V_i \\over {R_i}} = -V_o ({{1+R_fsC} \\over {R_f}})  } \\);  &nbsp; &nbsp; \\( { {V_o \\over {V_i}} = {-R_f \\over {R_i}} ({{1} \\over {1+R_fsC}})  } \\) <br> 
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fsC}})  \\rvert} = {\\lvert {-R_f \\over {R_i}} ({{1} \\over {1+R_fC(jw)}})  \\rvert} \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  {  {R_f \\over {R_i}} ( { 1 \\over \\sqrt { {1} + {({R_fCw})^2} } } ) } \\)</li>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" >  The equation indicates that as the frequency increases, the gain decreases conforming that it is a low pass filter. The coefficient \\( {R_f \\over {R_i}} \\) indicates that it can allow for signal amplification, which is one property of active filter. </p>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\(  \\bullet \\; \\frac{V_o}{V_i} = {-R_f \\over {R_i}} ({{1} \\over {1+R_fCs}}) \\) <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({R_fC(w) \\over 1}) = \\pi - tan^{-1} ({R_fC(w)}) \\) <br>
        \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({R_fC(w) }) \\cdot ({180 \\over \\pi}) &deg \\) <br>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The equation indicates that the phase will change from \\( 180 &deg \\) to \\( 90 &deg \\) as the frequency increases. This is because tan inverse function goes from \\( 0 &deg \\) to \\( 90 &deg \\) as its input increases. Here, the input is \\( {R_fC(w)} \\) meaning as frequency increases the inverse tan goes from \\( 0 &deg \\) to \\( 90 &deg \\). Since the tan inverse is subtracted from \\( {\\pi} \\), the plot should go from \\( 180 &deg \\) to \\( 90 &deg \\) </p>


    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of an active RC low pass filter having cutoff frequency of \\( w_c = 1000 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="Active RC low pass filter">
            <img src="images/ActiveRRCLPF.PNG" class = "rounded"  alt="Active RC low Pass Filter">
        </span>
        <p class="subtitles">Active RC low pass filter bode plot  \\( ( w_c = 1000 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  

//Active RCC high pass filter

var RCCHPFelement = document.querySelector('.js-RCCHPF');
RCCHPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on Active RC high pass filter </h4>
    </div>
    <p class ="serif"> An active high pass filter can be designed using an op-amp, two capacitors, and a resistor with configuration shown above. </p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">

        \\( \\bullet \\; \\) Using the general rule of Op-Amps that potentional different between the inputs is zero:  \\( V^{-} = V^{+} = 0\\) <br>
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>
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

        We can rearrange the equation to find the other parameters given the cutoff frequency and two other passive elements' values. <br> 
        \\( \\bullet \\; C_f = \\sqrt { { 2({RC_iw_c})^2 - 1 } \\over {Rw_c} } \\) &nbsp; &nbsp; &nbsp;  \\( C_i = \\sqrt{ {1+ {(RC_f)w_c}^2 } \\over {2{(Rw_c)}^2} } \\) &nbsp; &nbsp; &nbsp;  \\( R = { 1 \\over \\sqrt{ { 2({C_iw_c})^2 - ({C_fw_c})^2} } } \\) 

    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\)Using Kirchhoff's laws and general op-amp laws &nbsp; \\(  { {V_i(sC_i)} = -V_o ({{1+RC_fs} \\over {R}}) }  \\)  <br> \\(  { {V_o \\over {V_i}} = { {-RC_is} \\over {1 + RC_fs} }  } \\) <br> 
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = \\lvert {V_o \\over V_i} \\rvert = {\\lvert { {-RC_is} \\over {1 + RC_fs} } \\rvert} = {\\lvert { {-RC_i(jw)} \\over {1 + RC_f(jw)} }  \\rvert} \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { (RC_i)w \\over \\sqrt { { 1 } + {({(RC_f)w})^2} } } \\)</li>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" >  The equation indicates that as the frequency increases, the gain also increases since \\( RC_f \\) is usually a significantly smaller value than 1 conforming that it is a high pass filter. </p>

    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\(  \\bullet \\; \\frac{V_o}{V_i} = { {-RC_is} \\over {1 + RC_fs} } = { {-RC_i(jw)} \\over {1 + RC_f(jw)} } \\) <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w) \\over 1}) = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w)}) \\) <br>
        \\( \\bullet \\; \\phi = - {\\pi \\over {2}} - tan^{-1} ({RC_f(w)}) \\cdot ({180 \\over \\pi}) &deg \\) <br>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The equation indicates that the phase will change from \\( -90 &deg \\) to \\( -180 &deg \\) as the frequency increases. This is because tan inverse function goes from \\( 0 &deg \\) to \\( 90 &deg \\) as its input increases. Here, the input is \\( {RC_f(w)} \\) meaning as frequency increases the inverse tan goes from \\( 0 &deg \\) to \\( 90 &deg \\). Since the tan inverse is subtracted from \\( - {\\pi \\over {2}} \\) after being multiplied by negative, the plot should go from \\( -90 &deg \\) to \\( -180 &deg \\). </p>


    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of an active RC high pass filter having cutoff frequency of \\( w_c = 100 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="Active RC high pass filter">
            <img src="images/ActiveRCCHPF.PNG" class = "rounded"  alt="Active RC high Pass Filter">
        </span>
        <p class="subtitles">Active RC high pass filter bode plot  \\( ( w_c = 100 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  

//Band-pass filter

var BPFelement = document.querySelector('.js-BPF');
BPFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on band-pass filter </h4>
    </div>
    <p class ="serif"> A band-pass filter can be designed using a series connection of resistor, capacitor, and inductor. The output voltage is taken across the resistor. </p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">

        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_c + Z_L} \\) <br>
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\(  \\bullet \\; Z_L = \\) impedance of inductor in Laplace domain \\( = {sL}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>

        \\( \\bullet \\; \\frac{V_o}{V_i} = { R \\over {{1 \\over {sC}} + sL + R} } =  { R \\over {{1 \\over {sC}} + sL + R} } ({s \\over s}) =  { Rs \\over {{s}^2L + Rs + {1 \\over {C}}  } } \\) <br>  
        \\( \\bullet \\; \\frac{V_o}{V_i} = { Rs \\over {{s}^2L + Rs + {1 \\over {C}}  } } ({{1 \\over L} \\over {1 \\over L}}) =  { {R \\over L}s \\over { {s}^2 + {R \\over L} s + {1 \\over {LC}} } }\\) <br>

        \\( \\bullet \\; { \\lvert {V_o \\over V_i} \\rvert } = {1 \\over \\sqrt{2}}= {\\lvert { {R \\over L}s \\over { {s}^2 + {R \\over L} s + {1 \\over {LC}} } } \\rvert} = {\\lvert { {R \\over L}(jw_c) \\over { ({jw_c})^2 + {R \\over L}(jw_c) + {1 \\over {LC}} } } \\rvert} = {\\lvert { {R \\over L}(jw_c) \\over { (-{w_c}^2  + {1 \\over {LC}}) + {R \\over L}(jw_c) } } \\rvert}  \\) <br> 
        \\( w_c =  2\\pi f_c\\) &nbsp; where \\( w_c = \\)  cutoff frequency in \\( rad \\over sec  \\) and \\( f_c = \\) cutoff frequency in \\( Hz \\) <br> 
        \\( \\bullet \\; {1 \\over \\sqrt{2}}= { \\sqrt{ ({R \\over L}w_c) ^2} \\over \\sqrt { { ({{1 \\over {LC}} - {w_c}^2 }) ^2} + {({R \\over L}w_c)^2} } } =  { { {R \\over L}w_c} \\over \\sqrt { { ({{1 \\over {LC}} - {w_c}^2 }) ^2} + {({R \\over L}w_c)^2} } }  \\) <br>
        \\( \\bullet \\; \\) Divide both numerator and denominator by \\( {R \\over L}w_c = 
        { 1 \\over \\sqrt { { ({ { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c })^2} + 1 } }  \\) <br> 
        \\( \\bullet \\; ({1 \\over \\sqrt{2}})^2 = ( { 1 \\over \\sqrt { { ( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c } )^2} + 1 } } )^2, \\) &nbsp; &nbsp; &nbsp; &nbsp;
        \\( {1 \\over 2} =  { 1 \\over { { ({ { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c })^2} + 1 } } \\) <br>
        \\( \\bullet \\; 2 = { { ({ { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c })^2} + 1 } \\) &nbsp; , &nbsp; &nbsp; \\( 1 =  { ({ { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c })^2 }, \\) &nbsp; &nbsp; &nbsp; \\( { { {{1 \\over {LC}} - {w_c}^2 } } \\over {R \\over L}w_c }= \\pm 1\\) <br>
        \\( \\bullet \\; \\) There are two quadratic equations: &nbsp; &nbsp; \\( {w_c}^2 + {R \\over L}w_c - {1 \\over {LC}} = 0\\) and \\( {w_c}^2 - {R \\over L}w_c - {1 \\over {LC}} = 0\\) <br>
        \\( \\bullet \\; \\) Solving the equation using quadratic equation formula: &nbsp; &nbsp;  \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) &nbsp; and &nbsp;  \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) &nbsp; where \\( \\boldsymbol{w_l} \\) is the lower cutoff frequency and \\( \\boldsymbol{w_c} \\) is the upper cutoff frequency <br> 
        Given three values from combination of the three passive element's values and the two cutoff frqeuencies, the remaining two values can also be found. <br>
        
        \\( \\bullet \\; \\) Given R, \\( w_u \\) , and \\( w_l\\) :&nbsp; \\( L = {R \\over {(w_u - w_l)}} \\) &nbsp; &nbsp; &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) <br> 

        \\( \\bullet \\; \\) Given L, \\( w_u \\) , and \\( w_l\\) : &nbsp;\\( R =  L(w_u - w_l) \\) &nbsp; &nbsp; &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) <br>

        \\( \\bullet \\; \\) Given C, \\( w_u \\) , and \\( w_l\\) :&nbsp; \\( L =  {C({({{w_u + w_l} \\over 2})^2 - ({{w_u - w_l} \\over 2})^2)}}^{-1}  \\) &nbsp; &nbsp; &nbsp; \\(R = { w_uL -  {1 \\over {w_uC}} } \\) <br>

        \\( \\bullet \\; \\) Given R, C, and \\( w_l\\) : &nbsp; \\( L = {1 \\over {{w_l}^2C} } - {R \\over {w_l}}\\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\) Given R, L, and \\( w_l\\) : &nbsp; \\( C = {1 \\over {L{w_l}^2 + Rw_l}} \\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\) Given R, C, and  \\( w_u \\) : &nbsp; \\( L = {1 \\over {{w_u}^2C} } + {R \\over {w_u}} \\) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>

        \\( \\bullet \\; \\) Given R, L, and  \\( w_u \\) : &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>

        \\( \\bullet \\; \\) Given C, L, and \\( w_l\\): &nbsp; \\( R = { {1 \\over {w_lC}} - w_lL} \\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\)  Given C, L, and  \\( w_u \\) : &nbsp; \\( R = { w_uL -  {1 \\over {w_uC}} } \\) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>


    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division
        \\( \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_c + Z_L}  = { R \\over {{1 \\over {sC}} + sL + R} } =   { {R \\over L}s \\over { {s}^2 + {R \\over L} s + {1 \\over {LC}} } } \\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert = {\\lvert { {R \\over L}s \\over { {s}^2 + {R \\over L} s + {1 \\over {LC}} } } \\rvert} = 
            {\\lvert  { {R \\over L}(jw) \\over { {(jw)}^2 + {R \\over L} (jw) + {1 \\over {LC}} } } \\rvert} =
            {\\lvert  { {R \\over L}(jw) \\over { {R \\over L} (jw) + ({1 \\over {LC}} - {w}^2) } } \\rvert} = } \\) 
            \\({ \\sqrt{ ({{R \\over L}w})^2} \\over \\sqrt { {({{R \\over L}w})^2} + ({{1 \\over {LC}} - {w}^2})^2} } \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {R \\over L}w \\over \\sqrt { {({{R \\over L}w})^2} +  ({{1 \\over {LC}} - {w}^2})^2 }} \\)
    </ul>


    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\(  \\bullet \\; \\frac{V_o}{V_i} = { {R \\over L}s \\over { {s}^2 + {R \\over L} s + {1 \\over {LC}} } }= \\)
        \\( { {R \\over L}(jw) \\over { {(jw)}^2 + {R \\over L} (jw) + {1 \\over {LC}} } } =\\)
        \\(  { {R \\over L}(jw) \\over { {R \\over L} (jw) + ({1 \\over {LC}} - {w}^2)   } } \\)  <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        \\( \\bullet \\; \\phi = {\\pi \\over {2}} - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\text{ rad} \\) <br>
        \\( \\bullet \\; \\phi = {\\pi \\over {2}} - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg  \\) <br>
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The phase shift and gain change over frequency can be visualized in the bode plot example in the end. </p>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p style="padding-left: 35px; " class ="mb-4" > Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit.  </p>
    
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {{X_c}^2 + {X_L}^2 + R^2} \\) &nbsp; where \\( X_L\\) = impedance of the inductor and \\( X_c\\) = impedance of the capacitor <br>
        \\( \\bullet \\; \\lvert {X_L} \\rvert = {(2 \\pi f) \\cdot L} \\) &nbsp; &nbsp; \\( \\lvert {X_c} \\rvert = {1 \\over {(2 \\pi f) \\cdot C}} \\)  &nbsp; &nbsp; 
        \\( Z = \\sqrt {({2 \\pi f \\cdot L})^2 + { ({1 \\over {(2 \\pi f) \\cdot C}})^2} + R^2 } \\)  <br>
    </ul>

    <h5 class ="solnHead" >Other Parameters</h5>
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\;\\) Center frequency \\( (w_o) \\) using arithmetic mean: \\( w_o = {{w_u + w_l} \\over {2}} \\)  <br>
        \\( \\bullet \\;\\) Center frequency \\( (w_o) \\)using geometric mean: \\( w_o = \\sqrt{w_u \\cdot w_l} \\)  <br>
        \\( \\bullet \\;\\) Band width \\( (\\beta) \\) : \\( w_u - w_l \\) <br>
        \\( \\bullet \\;\\)  Quality factor (Q) = \\( w_o \\over \\beta \\)
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of a band pass filter having cutoff frequencies of \\( w_l = 100 {rad \\over sec} \\) and \\( w_u = 500 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="Band-pass filter">
            <img src="images/BandPass.PNG" class = "rounded"  alt="Band-pass Filter">
        </span>
        <p class="subtitles">A band-pass filter bode plot  \\( ( w_l = 100 {rad \\over sec} \\) and \\( w_u = 500 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  


//Band-stop filter

var BSFelement = document.querySelector('.js-BSF');
BSFelement.innerHTML = `
<div class = "container-lg mt-5">
    <div class="text-center"> 
        <h4 class ="slogan mb-3" > Details on RL band-stop filter </h4>
    </div>
    <p class ="serif"> A band-stop filter can be designed using a series connection of resistor, capacitor, and inductor. The output voltage is taken across the series connection of the inductor and capacitor. </p>

    <h5 class ="solnHead" >Cutoff Frequency </h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">

        \\( \\bullet \\; \\) Using Voltage division
        \\(  \\frac{V_o}{V_i} = \\frac{Z_c + Z_L}{Z_R + Z_c + Z_L} \\) <br>
        \\(  \\frac{V_o}{V_i} = \\frac{Z_R}{Z_R + Z_c + Z_L} \\) <br>
        \\(  \\bullet \\; Z_c = \\) impedance of capacitor in Laplace domain \\( = {1 \\over sc}\\) <br>
        \\(  \\bullet \\; Z_L = \\) impedance of inductor in Laplace domain \\( = {sL}\\) <br>
        \\( \\bullet \\; s = \\) complex frequency \\( = jw \\)  &nbsp; &nbsp; &nbsp;
        \\(  Z_R =  R \\) <br>
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

        Given three values from combination of the three passive element's values and the two cutoff frqeuencies, the remaining two values can also be found. <br>
        
        \\( \\bullet \\; \\) Given R, \\( w_u \\) , and \\( w_l\\) :&nbsp; \\(  L = {R \\over {(w_u - w_l)}} \\) &nbsp; &nbsp; &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) <br> 

        \\( \\bullet \\; \\) Given L, \\( w_u \\) , and \\( w_l\\) : &nbsp;\\( R =  L(w_u - w_l) \\) &nbsp; &nbsp; &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) <br>

        \\( \\bullet \\; \\) Given C, \\( w_u \\) , and \\( w_l\\) :&nbsp; \\( L =  {C({({{w_u + w_l} \\over 2})^2 - ({{w_u - w_l} \\over 2})^2)}}^{-1}  \\) &nbsp; &nbsp; &nbsp; \\(R = { w_uL -  {1 \\over {w_uC}} } \\) <br>

        \\( \\bullet \\; \\) Given R, C, and \\( w_l\\) : &nbsp; \\( L = {1 \\over {{w_l}^2C} } - {R \\over {w_l}} \\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\) Given R, L, and \\( w_l\\) : &nbsp; \\( C = {1 \\over {L{w_l}^2 + Rw_l}} \\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\) Given R, C, and  \\( w_u \\) : &nbsp; \\( L = {1 \\over {{w_u}^2C} } + {R \\over {w_u}} \) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>

        \\( \\bullet \\; \\) Given R, L, and  \\( w_u \\) : &nbsp; \\( C = {1 \\over {L{w_u}^2 - Rw_u}} \\) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>

        \\( \\bullet \\; \\) Given C, L, and \\( w_l\\): &nbsp; \\( R = { {1 \\over {w_lC}} - w_lL} \\) &nbsp; &nbsp; &nbsp; \\( w_u = {{R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } }\\) <br>

        \\( \\bullet \\; \\)  Given C, L, and  \\( w_u \\) : &nbsp; \\(  R = { w_uL -  {1 \\over {w_uC}} } \\) &nbsp; &nbsp; &nbsp; \\(  w_l = - { {R \\over {2L}} + \\sqrt { ({R \\over {2L}})^2 + {1 \\over {LC} } } } \\) <br>


    </ul>

    <h5 class ="solnHead" >Transfer Function </h5>
  
<ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">  
        \\( \\bullet \\; \\) Using Voltage division
        \\( \\frac{V_o}{V_i} = \\frac{Z_c + Z_L}{Z_R + Z_c + Z_L} = { { {1 \\over {sC}} + sL }  \\over {{1 \\over {sC}} + sL + R} }=  { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } }\\) <br>
        This equation describes how the magnitude and phase of the input signal changes with different frequencies and can be visualised in bode plot.
    </ul>

    <h5 class ="solnHead" >Gain</h5>
      
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">
        <li> \\( \\bullet \\; Gain = {\\lvert {V_o \\over V_i} \\rvert} = {\\lvert { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } } \\rvert = {\\lvert  { { {(jw)}^2 + {1 \\over {LC}} } \\over {{(jw)}^2 + {R \\over {L}} (jw) + {1 \\over {LC} } } }  \\rvert} =
        { \\lvert { { {1 \\over {LC}} - {w_c}^2  } \\over { ({1 \\over {LC}} - {w_c}^2) + {R \\over {L}} (jw_c) } } \\rvert} = } \\) 
        \\( { \\sqrt{ ({1 \\over {LC}} - {w}^2) ^2} \\over \\sqrt { { ({1 \\over {LC}} - {w}^2)^2} + {({R \\over L}w)^2} } } \\)</li>
        <li>\\( \\bullet \\; \\lvert {V_o \\over V_i} \\rvert =  { {{1 \\over {LC}} - {w}^2} \\over \\sqrt { { ({{1 \\over {LC}} - {w}^2 }) ^2} + {({R \\over L}w)^2} } }  \\) </li>
    </ul>


    <h5 class ="solnHead"> Phase Shift \\( (\\phi)  \\)</h5>

    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-2 georgia-font ">   
        \\( \\bullet \\; \\frac{V_o}{V_i} = { { {s}^2 + {1 \\over {LC}} } \\over {{s}^2 + {R \\over {L}} s+ {1 \\over {LC} } } }= \\)
        \\( { {jw}^2 + {1 \\over {LC}} } \\over {{jw}^2 + {R \\over {L}} (jw) + {1 \\over {LC} } } =\\)
        \\(  { {1 \\over {LC}} - {w}^2  } \\over { ({1 \\over {LC}} - {w}^2) + {R \\over {L}} (jw) }\\)  <br>
        \\( \\bullet \\; \\phi = \\) phase shift numberator - phase shift denominator <br>
        For \\(  { {1 \\over {LC}} - {w}^2  } > 0 \\) : &nbsp; numerator phase \\( = 0 \\) <br>
        \\( \\bullet \\; \\phi = 0 - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\text{ rad} \\) <br>
        \\( \\bullet \\; \\phi = - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg   \\) <br>
        For \\(  { {1 \\over {LC}} - {w}^2  } < 0 \\) : &nbsp; numerator phase \\( = \\pi \\) <br>
        \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\text{ rad} \\) <br>
        \\( \\bullet \\; \\phi = \\pi - tan^{-1} ({ {R \\over L}w  \\over {{1 \\over {LC}} - {w}^2} }) \\\cdot ({180 \\over \\pi}) &deg   \\) <br> 
    </ul>

    <p style="padding-left: 35px; " class ="mb-4" > The phase shift and gain change over frequency can be visualized in the bode plot example in the end. </p>

    <h5 class ="solnHead" >Total Impedance</h5>

    <p style="padding-left: 35px; " class ="mb-4" > Total impedance indicates the combined effect of the passive elements (capacitors, resistors, and inductors) in a circuit and it affects the gain and phase shift of the circuit.  </p>
    
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\; Z = \\sqrt {{X_c}^2 + {X_L}^2 + R^2} \\) &nbsp; where \\( X_L\\) = impedance of the inductor and \\( X_c\\) = impedance of the capacitor <br>
        \\( \\bullet \\; \\lvert {X_L} \\rvert = {(2 \\pi f) \\cdot L} \\) &nbsp; &nbsp; \\( \\lvert {X_c} \\rvert = {1 \\over {(2 \\pi f) \\cdot C}} \\)  &nbsp; &nbsp; 
        \\( Z = \\sqrt {({2 \\pi f \\cdot L})^2 + { ({1 \\over {(2 \\pi f) \\cdot C}})^2} + R^2 } \\)  <br>
    </ul>

    <h5 class ="solnHead" >Other Parameters</h5>
    <ul style="list-style-type:none; line-height: 2.5;" class = "mb-4 georgia-font ">    
        \\( \\bullet \\;\\) Center frequency \\( (w_o) \\) using arithmetic mean: \\( w_o = {{w_u + w_l} \\over {2}} \\)  <br>
        \\( \\bullet \\;\\) Center frequency \\( (w_o) \\) using geometric mean: \\( w_o = \\sqrt{w_u \\cdot w_l} \\)  <br>
        \\( \\bullet \\;\\) Band width \\( (\\beta) \\) : \\( w_u - w_l \\) <br>
        \\( \\bullet \\;\\)  Quality factor (Q) = \\( w_o \\over \\beta \\)
    </ul>

    <h5 class ="solnHead" >Bode Plot</h5>
    <p style="padding-left: 35px; " class ="mb-4" > The figure below is an example of bode plot of a band stop filter having cutoff frequencies of \\( w_l =  { 300 rad \\over sec} \\) and \\( w_u = 500 {rad \\over sec} \\) .  </p>

    <div class="text-center d-none d-xl-block mb-3">
        <span class="tt" data-bs-placement="bottom" title="Band-stop filter">
            <img src="images/Bandstop.PNG" class = "rounded"  alt="Band-stop Filter">
        </span>
        <p class="subtitles">A band-stop filter bode plot  \\( ( w_l = 300 {rad \\over sec} \\) and \\( w_u = 500 {rad \\over sec} ) \\)  </p>
    </div>
</div>
`  