// Prefix a site path with the deploy base.
// Real domain (thinkaudiovisual.co.za): base is "/" → u('/contact/') === '/contact/'
// GitHub Pages preview: base is "/thinkaudiovisual-website" → '/thinkaudiovisual-website/contact/'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => (path.startsWith('/') && !path.startsWith('//') ? BASE + path : path);
