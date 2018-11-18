export default src => {
  const videoEl = document.createElement('video');

  videoEl.controls = true;
  videoEl.src = src;
  
  return videoEl;
};
