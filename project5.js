const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(event){  //listener
      h1.textContent = `X: ${event.clientX} Y:${event.clientY}`; // position cursor

      document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 100)`;
})