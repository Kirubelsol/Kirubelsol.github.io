
//Rounding
function rounding(num){
  if (num > 0.0001 ){
    return math.round(num,4);
  }
  else{
    return (num);
  }
}

function calculateBodePlot(numerator, denominator, cutoff) {
    const frequencyStart = cutoff/100; 
    const frequencyEnd = cutoff*100; 
    const numPoints = 1000; // 
  
    const frequencies = [];
    const magnitudes = [];
    const phases = [];
  
  
    // Find the magnitude and phase at each frequency
    for (let i = 0; i < numPoints; i++) {
      //Frequency
      const frequency = frequencyStart * Math.pow(frequencyEnd / frequencyStart, i / (numPoints - 1));
  
      // Magnitude
      const s_complex = math.complex(0,frequency);
      const numeratorEvaluated = evaluatePolynomials(numerator,s_complex);
      const denominatorEvaluated = evaluatePolynomials(denominator,s_complex);
      const magnitude = 20 * Math.log10(math.abs(numeratorEvaluated) / math.abs(denominatorEvaluated));
      
      //Phase
      const divided = math.divide(numeratorEvaluated,denominatorEvaluated);
      const phase = math.arg(divided)*(180 / Math.PI);
  
      //add values
      frequencies.push(frequency);
      magnitudes.push(magnitude);
      phases.push(phase);
    }
    return {
      frequencies: frequencies,
      magnitudes: magnitudes,
      phases: phases
    };
  }
  
  
  //Calculate polynomial result from cofficients 
  function evaluatePolynomials(coefficients, x) {
    var result = math.complex(0);
  
    for (var i = 0; i < coefficients.length; i++) {
        var power = math.pow(x, i);
        var term = math.multiply(coefficients[i], power);
        result = math.add(result, term);
    }
    return result;
  }
  
  
  // Generate Bode plot using Plotly.js
  function generateBodePlot(numerator, denominator, cutoff) {   
    setTimeout(function() {
      // Your function code here that includes Plotly
      const bodeData = calculateBodePlot(numerator, denominator, cutoff);
    
    //Plot gain
    const plotDataMag = [
      {
        x: bodeData.frequencies,
        y: bodeData.magnitudes,
        type: 'scatter',
        name: 'Magnitude'
      },
    ];
  
    const plotLayoutMag = {
      title: 'Bode Plot',
      titlefont: {
        family: 'Georgia, serif',
        size: 18,
        color: '#000000'
      },
      xaxis: {
        type: 'log',
        title: 'Frequency (rad/s)',
        titlefont: {
          family: 'Georgia, serif',
          size: 16,
          color: '#000000'
        },
        tickfont: {
          family: 'Georgia, serif',
          size: 13,
          color: '#000000'
        }
      },
      yaxis: {
        title: 'Magnitude (dB)',
        titlefont: {
          family: 'Georgia, serif',
          size: 16,
          color: '#000000'
        },
        tickfont: {
          family: 'Georgia, serif',
          size: 13,
          color: '#000000'
        }
      },
      responsive: true
    };
  
    Plotly.newPlot('MagnitudePlot', plotDataMag, plotLayoutMag);
  
    const plotData = [
      {
        x: bodeData.frequencies,
        y: bodeData.phases,
        type: 'scatter',
        name: 'Phase'
      }
    ];
  
    const plotLayout = {
      xaxis: {
        type: 'log',
        title: 'Frequency (rad/s)',
        titlefont: {
          family: 'Georgia, serif',
          size: 16,
          color: '#000000'
        },
        tickfont: {
          family: 'Georgia, serif',
          size: 13,
          color: '#000000'
        }
      },
      yaxis: {
        title: 'Phase (deg)',
        titlefont: {
          family: 'Georgia, serif',
          size: 16,
          color: '#000000'
        },
        tickfont: {
          family: 'Georgia, serif',
          size: 13,
          color: '#000000'
        }
      }, 
      responsive: true
    };
  
    Plotly.newPlot('PhasePlot', plotData, plotLayout);
    }, 100); // Delay in milliseconds
  
  }