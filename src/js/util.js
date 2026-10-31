'use strict';
/* Shared helpers: safe storage, motion preference, and CSP-friendly event delegation.
   Buttons rendered by the game carry data-act="functionName" data-args="[...]" instead of inline handlers. */

const store = {
  get(key){ try{ return window.localStorage.getItem(key); }catch(e){ return null; } },
  set(key, value){ try{ window.localStorage.setItem(key, value); }catch(e){ /* storage unavailable: preference simply isn't remembered */ } },
  remove(key){ try{ window.localStorage.removeItem(key); }catch(e){ /* nothing to remove */ } }
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-act]');
  if(!el || el.disabled) return;
  const fn = window[el.dataset.act];
  if(typeof fn !== 'function') return;
  let args = [];
  try{ args = JSON.parse(el.dataset.args || '[]'); }catch(err){ args = []; }
  fn(...args);
});
document.addEventListener('change', (e)=>{
  const el = e.target.closest('[data-change]');
  if(!el) return;
  const fn = window[el.dataset.change];
  if(typeof fn === 'function') fn(Number(el.value));
});
/* Starting over removes the saved game first, otherwise it would be offered again after the reload. */
function reloadGame(){ if(typeof clearSave==='function') clearSave(); window.location.reload(); }
