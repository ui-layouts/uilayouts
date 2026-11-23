import { single } from '../layouts.js';

export default {
  ...({ ...single((s) => ({ w: 1.05, h: 0.82 })), cloth: true }),
  activate: true,
};
