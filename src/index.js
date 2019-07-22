import { h, render } from 'preact';
import Index from './pages/index';

const root = document.getElementById('main-app-container');

export default () => {
  render(<Index />, root);
};
