import P from './components/p';

let pComponent = P();
document.body.appendChild(pComponent);
const input = document.createElement('input');
input.type = 'text';

document.body.appendChild(input);

if(module.hot) {
  module.hot.accept('./components/p.js', () => {
    const newComponent = P();
    document.body.replceChild(newComponent, pComponent);

    pComponent = newComponent;
  });
}
