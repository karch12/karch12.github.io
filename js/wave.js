const canv = document.getElementById('wave');
const ctx = canv.getContext('2d');

const drawGraph = (e) => {
  const form = new FormData(document.querySelector('form'));
  if (e) {
    e.preventDefault();
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  
  for (let x = 0; x <= 360; x+=1) { 
      const y1 = 180 - Math.sin(form.get('freq1')*x*Math.PI/180)*30*form.get('amp1');
      const y2 = 180 - Math.sin(form.get('freq2')*x*Math.PI/180)*30*form.get('amp2');
      const y = y1*y2/(y1+y2);
      ctx.lineTo(x,y+100);
  }
  ctx.stroke();
};

drawGraph();