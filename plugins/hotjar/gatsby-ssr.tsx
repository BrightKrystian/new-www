import React from 'react'
import { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }, options) => {
  const { id, sv } = options
  if (id && sv) {
    const hotJarInitScript = `
function loadHotjarScript(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={ hjid: ${id}, hjsv: ${sv} };
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
};
window.initHotjar = () => loadHotjarScript(window, document, 'https://static.hotjar.com/c/hotjar-','.js?sv=')
`
    setHeadComponents([<script dangerouslySetInnerHTML={{ __html: hotJarInitScript }} />])
  }
}
