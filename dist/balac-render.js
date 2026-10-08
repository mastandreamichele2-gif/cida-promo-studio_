'use strict';
function renderBalac(){
 canvas.width=canvas.height=1080;ctx.drawImage(base,0,0,1080,1080);ctx.fillStyle='#fff';ctx.fillRect(0,249,1080,727);ctx.fillRect(765,96,282,138);
 if(images.logo){ctx.fillStyle='#454647';ctx.fillRect(40,38,380,136);contain(images.logo,45,40,370,130)}
 if(images.brandlogo)contain(images.brandlogo,774,105,258,122);else text($('brand').value,788,184,46,'#222','bold',246);
 const t=totals(),mode=$('mode').value,accent=$('color').value;
 const extra=mode==='discount'?`EXTRA ${clamp($('discount').value,0,100)}%`:mode==='quantity'?`${quantityOffer().buy}+${quantityOffer().free} OMAGGIO`:mode==='gift'?'CON OMAGGIO':mode==='price'?'PREZZO SPECIALE':'';
 const title=$('title').value.toUpperCase(),inlineExtra=mode==='discount'?extra:'';
 let titleSize=48,extraSize=30,titleWidth=0,extraWidth=0;const gap=inlineExtra?22:0;
 do{ctx.font=`bold ${titleSize}px Arial`;titleWidth=ctx.measureText(title).width;extraSize=Math.round(titleSize*0.625);ctx.font=`bold ${extraSize}px Arial`;extraWidth=inlineExtra?ctx.measureText(inlineExtra).width:0;if(titleWidth+gap+extraWidth<=970)break;titleSize--}while(titleSize>18);
 const titleX=(1080-titleWidth-gap-extraWidth)/2;
 text(title,titleX,297,titleSize,'#ff0000','bold',titleWidth);
 if(inlineExtra)text(inlineExtra,titleX+titleWidth+gap,297,extraSize,'#2da044','bold',extraWidth);
 else if(extra)text(extra,436,338,25,accent,'bold',592);
 let y=370+wrap($('description').value.toUpperCase(),436,370,32,594,38,3);
 if(products.length===1){text('COD.',436,y,34,'#000','bold',113);text(products[0].code.toUpperCase(),553,y,34,'#ff0000','bold',475);y+=30;if(products[0].qty>1||clamp($('bundles').value,1,999)>1){text(`${products[0].qty} pz × ${clamp($('bundles').value,1,999)} pacchetto/i`,436,y,22,'#333','bold',592);y+=29}}
 else{products.forEach(p=>{text(`${p.code.toUpperCase()} • ${p.qty} PZ${mode==='quantity'?' • '+euro(quantityPromoPrice(p.price)):''}`,436,y,23,'#222','bold',592);y+=29})}
 if(mode==='quantity'){text(`ACQUISTI ${quantityOffer().buy} + ${quantityOffer().free} IN OMAGGIO`,436,y,24,accent,'bold',592);y+=33}
 const label=mode==='quantity'?(products.length===1?euro(quantityPromoPrice(products[0].price)):'PREZZI UNITARI'):t.final!==t.original?`${euro(t.original)} → ${euro(t.final)}`:euro(t.final);let priceSize=36;do{ctx.font=`bold ${priceSize}px Arial`;if(ctx.measureText(label).width<=540)break;priceSize--}while(priceSize>14);const width=ctx.measureText(label).width+22;
 ctx.save();ctx.fillStyle=accent;ctx.shadowColor='#0005';ctx.shadowBlur=9;ctx.shadowOffsetY=5;ctx.beginPath();ctx.moveTo(443,y);ctx.lineTo(443+width,y);ctx.lineTo(443+width+25,y+21);ctx.lineTo(443+width,y+42);ctx.lineTo(443,y+42);ctx.closePath();ctx.fill();ctx.restore();text(label,450,y+33,priceSize,'#fff','bold',width-9);text(mode==='quantity'?'NETTO PROMO':$('tax').value.toUpperCase(),443,y+64,22,accent,'bold',585);
 if(mode==='gift'&&$('gift').value)wrap($('gift').value.toUpperCase(),436,y+111,26,590,32,2,accent,'bold');
 if(images.photo)contain(images.photo,30,370,385,580);else{ctx.strokeStyle='#ddd';ctx.setLineDash([9,7]);ctx.strokeRect(40,550,366,368);ctx.setLineDash([]);text('CARICA FOTO PRODOTTO',65,738,20,'#bbb','normal',320)}
 if($('date').value)text($('date').value,436,946,19,'#555','normal',590);
 const footer=$('footer').value;if(footer!=='www.balac.it • WhatsApp 349 6844916'){ctx.fillStyle='#2da044';ctx.fillRect(0,980,1080,100);text(footer,40,1044,29,'#fff','bold',1000)}
}
