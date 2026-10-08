# CIDA Promo Studio

Programma web per creare locandine CIDA nel formato 1080×1080.

## Utilizzo

Apri `dist/index.html` in un browser moderno oppure avvia un server locale dalla cartella del progetto:

```bash
python3 -m http.server 8000 --directory dist
```

Apri http://localhost:8000. Non sono richieste installazioni o compilazione.

## Funzioni

- Anteprima in tempo reale sul format CIDA fornito.
- Testi, codici, quantità, immagini e loghi modificabili.
- Extra sconto, omaggio, prezzo speciale e solo prezzo a web.
- Formule quantità + omaggio personalizzabili (10+1, 10+2, 11+1, 5+1).
- Netto promo unitario = prezzo × quantità senza omaggio ÷ quantità con omaggio, arrotondato a due decimali.
- Cartellino del prezzo adattato alla lunghezza dell’importo.
- Esportazione PNG/JPG e stampa o PDF tramite il browser.
- Bozze salvate nel browser, importazione ed esportazione progetti JSON.

Le bozze restano nel browser del dispositivo utilizzato. Esporta il progetto JSON per conservarle o trasferirle.

## File

- `dist/index.html`: interfaccia.
- `dist/style.css`: stile.
- `dist/app.js`: generazione grafica, calcoli e salvataggio.
- `dist/template.jpg`: format CIDA originale.

La grafica e i marchi del template restano di proprietà dei rispettivi titolari.
