import type { NextConfig } from 'next';
const config: NextConfig = {
  async rewrites() {
    return [
      {source:'/index.html',destination:'/'},
      {source:'/services.html',destination:'/services'},
      {source:'/gallery.html',destination:'/gallery'},
      {source:'/booking.html',destination:'/booking'},
      {source:'/about.html',destination:'/about'},
    ];
  },
};
export default config;
