'use strict';
(() => {
  const hash=new URLSearchParams(location.hash.slice(1)),query=new URLSearchParams(location.search);
  const id=hash.get('postimage_id')||query.get('postimage_id');
  const message=hash.get('postimage_text')||query.get('postimage_text');
  if(!id||!message||!(id.startsWith('cida_daily_')||id.startsWith('balac_single_')))return;
  const links=message.match(/https:\/\/[^\s"'<>\[\]]+/g)||[];
  if(!links.some(link=>{try{const u=new URL(link);return u.protocol==='https:'&&u.hostname==='postimg.cc'&&u.pathname!=='/'}catch{return false}}))return;
  const namespace=id.startsWith('balac_single_')?'balac':'cida';
  let pending=null;try{pending=JSON.parse(localStorage.getItem(namespace+'-postimages-pending')||'null')}catch{}
  if(!pending||pending.id!==id||Date.now()-pending.createdAt>1800000)return;
  const clean=new URL(location.href);if(hash.has('postimage_id'))clean.hash='';clean.searchParams.delete('postimage_id');clean.searchParams.delete('postimage_text');history.replaceState(null,'',clean.href);
  let delivered=false;
  try{if(window.opener&&!window.opener.closed&&window.opener.location.origin===location.origin&&typeof window.opener.CidaPostimagesReturn==='function'){delivered=window.opener.CidaPostimagesReturn(id,message);if(delivered){window.opener.focus();window.close();return}}}catch{}
  try{localStorage.setItem(namespace+'-postimages-result',JSON.stringify({id,message,createdAt:Date.now()}))}catch{}
})();
