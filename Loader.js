// BrowserCheats | Loader Script
const hostname = document.location.hostname;
const url = document.location.href;

// BrowserCheats | StriveMath MyWordle
if (hostname === "mywordle.strivemath.com") {
    const e=Array.from(document.querySelectorAll("[class*='flex items-center justify-center rounded mx-0.5 text-s font-bold cursor-pointer']")),t={};let o="WORDLE";e.forEach((e=>{let o=e.textContent.trim();t[o]=e}));const r=e=>{t[e]&&t[e].click()},n=new URL(window.location.href),c=n.searchParams.get("word");let s="",l=0;if(c&&""!==c.trim()){const e=c.toUpperCase();for(let t=0;t<e.length;t++){const r=e[t];if(/[A-Z]/.test(r)){const e=o[l%o.length],t=(r.charCodeAt(0)-e.charCodeAt(0)+26)%26;s+=String.fromCharCode(t+"A".charCodeAt(0)),l++}else wordDecoded+=r}}const i=(e,t)=>{if(t<e.length){let o=e[t];r(o),setTimeout((()=>{i(e,t+1)}))}else t===e.length&&setTimeout((()=>{r("Enter")}))};i(s,0);
}