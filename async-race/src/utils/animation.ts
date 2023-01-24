export const findDistance = () => {
  const road = document.querySelector('.road') as HTMLDivElement;
  const launch = document.querySelector('.launch') as HTMLDivElement;

  return road.clientWidth - launch.clientWidth;
};

export const animatePosition = (id: number, offset: number, duration: number) => {
  const car = document.querySelector(`#car-${id}`) as HTMLDivElement;
  const frontWheel = document.querySelector(`#front-wheel-${id}`) as SVGElement;
  const rearWheel = document.querySelector(`#rear-wheel-${id}`) as SVGElement;

  let currentX = car.offsetLeft;
  let currentR = 0;
  const framesCount = (duration / 1000) * 60;
  const dX = offset / framesCount;
  const rX = ((offset / 77.5) * 360) / framesCount;

  const tick = () => {
    currentX += dX;
    currentR += rX;
    car.style.transform = `translateX(${currentX}px)`;
    frontWheel.style.transform = rearWheel.style.transform = `rotate(${currentR}deg)`;
    if (currentX < offset) {
      requestAnimationFrame(tick);
    }
  };
  tick();
};
