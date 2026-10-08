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

## Collage delle quattro promo del giorno

1. Crea una locandina e premi **Aggiungi questa locandina**. Ripeti per le quattro promo, oppure carica immagini già pronte.
2. Gli slot seguono l’ordine alto sinistra, alto destra, basso sinistra, basso destra. Puoi sostituire, spostare o rimuovere ogni immagine.
3. Premi **Crea collage ≤ 300 KB**. Il JPG viene compresso verificando un limite rigoroso di 300.000 byte. Se necessario, vengono ridotte le dimensioni; il file non viene reso scaricabile se supera il limite.
4. Premi **Scarica JPG**, oppure **Crea link Postimages**: il collage viene scaricato e si apre la finestra Postimages. Seleziona il JPG scaricato; il link restituito viene inserito nel messaggio broadcast.
5. Premi **Copia messaggio** e incollalo nella lista broadcast WhatsApp.

Il testo broadcast è modificabile. Se Postimages non restituisce automaticamente il link o blocca la finestra, usa il caricamento alternativo e incolla il link nel campo dedicato. L’integrazione segue il protocollo popup/postMessage del plugin ufficiale Postimages; il caricamento esterno completo dipende dal servizio ed è da verificare nel browser.

La raccolta viene salvata localmente in IndexedDB nel browser. Sostituendo una locandina il collage e il link precedente vengono invalidati, così puoi rigenerarli con le immagini aggiornate.

## Sezione BALAC

Usa il selettore CIDA/BALAC in alto, oppure apri `dist/balac.html`.

BALAC usa il format grafico fornito, gli stessi campi e calcoli delle offerte CIDA e bozze separate nel browser. Il prezzo predefinito è indicato IVA inclusa; il calcolo non aggiunge automaticamente IVA, quindi inserisci il prezzo nella base fiscale desiderata e modifica la nota quando necessario.

La sezione BALAC non contiene il collage: **Crea link Postimages** scarica la singola locandina JPG e apre Postimages. Seleziona il JPG appena scaricato e genera il link: viene recuperato nel messaggio broadcast BALAC. È disponibile anche l’inserimento manuale del link. Se modifichi la locandina, il collegamento precedente viene invalidato.
