interface CircleElement extends HTMLElement {
  x: number;
  y: number;
}

export function turnCursorAnimation() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll<CircleElement>('.cursorCircle');

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener('mousemove', function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    // check if cursor is on link or button
    const targetElement = e.target as HTMLElement;
    const isOnLink = targetElement.tagName === 'A';
    const isOnButton = targetElement.tagName === 'BUTTON';
    const isParentLink = targetElement.parentElement?.tagName === 'A';
    const isParentButton = targetElement.parentElement?.tagName === 'BUTTON';
    const specialCursor = targetElement.classList.contains('specialCursor');

    if (isOnLink || isOnButton || specialCursor || isParentLink || isParentButton) {
      circles.forEach(function (circle) {
        circle.classList.add('cursorOnLink');
      });
    } else {
      circles.forEach(function (circle) {
        circle.classList.remove('cursorOnLink');
      });
    }
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 20 + 'px';
      circle.style.top = y - 20 + 'px';

      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.8;
      y += (nextCircle.y - y) * 0.8;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
}