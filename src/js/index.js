import Chart from 'chart.js/auto';




function init(){
 

const grafico1 = document.getElementById("grafico1")
  new Chart(grafico1, {
    type: 'doughnut',
    data: {
      labels: ['China', 'EEUU', 'Rusia', 'Alemania', 'India', 'Brasil'],
      datasets: [{
        label: 'cantidad Personas',
        
        data: [4500000,250000 ,3000000 ,24000000 ,60000000 ,1500000 ],
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: [
        "rgb(0, 123, 177)",
        "rgb(74, 136, 162)",
        "rgb(176, 211, 228)",
        "rgb(250, 172, 130)",
        "rgb(187, 90, 44)",
        "rgb(127, 90, 44)"
      ]
      
      }]
    }
  });
  const grafico2 = document.getElementById("grafico2")
  new Chart(grafico2, {
    type: 'doughnut',
    data: {
      labels: ['China', 'EEUU', 'Rusia', 'Alemania', 'India', 'Brasil'],
      datasets: [{
        label: 'cantidad Personas',
        
        data: [4500000,250000 ,3000000 ,24000000 ,60000000 ,1500000 ],
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: [
        "rgb(0, 123, 177)",
        "rgb(74, 136, 162)",
        "rgb(176, 211, 228)",
        "rgb(250, 172, 130)",
        "rgb(187, 90, 44)",
        "rgb(127, 90, 44)"
      ]
      
      }]
    }
  });
  
  }

  init()



