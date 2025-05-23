import { proxy } from 'valtio';

const state = proxy({
  shirtColor: '#ffffff',    // default shirt color
  decalTexture: '',         // URL for custom decal texture
});

export default state;
