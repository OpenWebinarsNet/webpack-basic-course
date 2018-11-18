import Component from './components/component';
import Image from './components/image';
import Video from './components/video';
import Logo from './images/logo-small.png';
import SampleVideo from './videos/video.mp4';
//import './styles/styles.css';
//import './styles/styles.scss';
import './styles/styles.less';

document.body.appendChild(Component('Hello world'));
document.body.appendChild(Image(Logo));
document.body.appendChild(Video(SampleVideo));


