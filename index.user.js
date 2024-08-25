// ==UserScript==
// @name  Bangumi Episode Enhance
// @version 0.0.1
// @description Introduce Sakana-Widget to Bangumi!
// @updateURL
// @downloadURL
// @author Flynn Cao
// @namespace https://flynncao.xyz/
// @match  https://bangumi.tv/*
// @match  https://chii.in/*
// @match  https://bgm.tv/*
// @include /^https?:\/\/(((fast\.)?bgm\.tv)|chii\.in|bangumi\.tv)*/
// @license MIT
// ==/UserScript==

;(async function () {
  if (window.location !== window.parent.location) {
    // if the script is running in an iframe, cancel the execution
    return
  }
  const el = document.createElement('div')
  const script = document.createElement('script')
  const css = document.createElement('link')
  document.styleSheets[0].insertRule(`
	 #sakana-widget {
		  position: fixed;
			bottom: 22px;
			left: 50px;
			z-index: 91;
		}`)
  el.id = 'sakana-widget'

  document.body.appendChild(el)
  css.rel = 'stylesheet'
  css.href = 'https://cdn.jsdelivr.net/npm/sakana-widget-z@1.0.3/lib/sakana.min.css'
  script.type = 'text/javascript'
  script.src = 'https://cdn.jsdelivr.net/npm/sakana-widget-z@1.0.3/lib/sakana.min.js'
  script.async = true
  script.onload = function () {
    const takina = SakanaWidget.getCharacter('takina')
    SakanaWidget.registerCharacter('takina-default', takina)
    new SakanaWidget({ character: 'takina' }).mount('#sakana-widget')
    console.log('SakanaWidget is ready!')
  }
  document.head.appendChild(css)
  document.body.appendChild(script)
})()
