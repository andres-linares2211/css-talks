document.addEventListener('DOMContentLoaded', () => {

  /**
   * Agrega una animación a los puntos suspensivos.
   */
  (function() {
    const loadingDots = document.querySelectorAll('.loading-dots');
    let points = 0;

    setInterval(() => {
      points = points % 3;
      points++;

      [...loadingDots].forEach(element => {
        element.innerHTML = ".".repeat(points);
      });
    }, 333);
  })();

  
}, false);