export default content => {
  const el = document.createElement('p');

  el.innerHTML = content;

  return el;
};
