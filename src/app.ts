import { d3clock } from './index';

document.addEventListener('DOMContentLoaded', () => {
  console.log('READY');
  d3clock({ target: '#sbb', width: 600, face: 'sbb' });
  d3clock({ target: '#braun', width: 600, face: 'braun' });
  d3clock({ target: '#classic', width: 600, face: 'classic' });
  d3clock({ target: '#modern', width: 600, face: 'modern' });
});