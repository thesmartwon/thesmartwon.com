import { h, render } from 'preact';
import Index from './pages/index';

const root = document.getElementById('b');

export default () => {
  render(<Index />, root);
};
