export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/404_f0867d4d.mjs').then(n => n._);

export { page };
