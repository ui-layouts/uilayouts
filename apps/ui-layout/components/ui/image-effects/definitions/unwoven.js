import { gallery } from '../layouts.js';

export default {
    ...gallery(s=>({x:s.offset*.524,w:.465,h:.62})),
    ribbons:true, background:"#f7f6f3",
  };
