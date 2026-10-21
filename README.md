# PG1 - cvičenie 5: Three.js

Štartovací projekt k cvičeniu. Funkcie init() a render() v js/ThreeScene.js doplníte podľa úloh cvičenia. Prázdna stránka pri prvom spustení je očakávaná.

## Spustenie vo WebStorme alebo VS Code

Nainštalujte Node.js **24.21.0 LTS**, ktorý obsahuje npm **11.19.0**. Otvorte celý priečinok projektu v editore. V termináli prejdite do priečinka s package.json a spustite:

```sh
npm ci
npm run dev
```

Vite otvorí index5.html v predvolenom prehliadači. Ak sa neotvorí alebo chcete použiť Firefox, otvorte adresu vypísanú v termináli a doplňte /index5.html. Terminál nechajte bežať; server zastavíte Ctrl+C. Po stiahnutí projektu alebo zmene package-lock.json znovu použite npm ci.

Node.js spúšťa vývojové nástroje na počítači. npm nainštaluje knižnice podľa package-lock.json. Vite poskytuje súbory prehliadaču cez lokálny HTTP server; Three.js beží v prehliadači. HTML neotvárajte dvojklikom a nepoužívajte samostatný server editora pre importy z npm.

Používame **three 0.186.1** a **Vite 8.3.4**. Jadro aj OrbitControls pochádzajú z rovnakého balíka three. Importy sú už na začiatku js/ThreeScene.js; nie sú globálnymi premennými window.THREE. Aktuálny WebGLRenderer potrebuje WebGL 2.

## Textúry a úlohy

Súbory carbon.png, sky.jpg, box.jpg a lirkis.jpg sú v public/texture/. V kóde majú cesty /texture/carbon.png, /texture/sky.jpg, /texture/box.jpg a /texture/lirkis.jpg; /public/ nie je súčasťou adresy v prehliadači. Farebné PNG/JPEG textúry načítané cez TextureLoader označte SRGBColorSpace podľa opravených pokynov.

Pre textúru kocky použite pribalený box.jpg a cestu /texture/box.jpg. Obrázok drevenej debny pochádza z podkladov predchádzajúceho cvičenia; carbon.png ho nenahrádza.

Pre úlohu s logom LIRKIS použite pribalený lirkis.jpg a cestu /texture/lirkis.jpg. Je to obrázok z podkladov predchádzajúceho cvičenia, teraz priložený aj k tomuto štartovaciemu projektu. Zrkadlený variant lirkis_i.jpg nie je pre úlohy cvičenia 5 potrebný.

Žiadna scéna, kamera, objekty, animácia ani ovládanie nie sú doplnené za študenta. Premennú cube4 deklarujte na začiatku ThreeScene.js vedľa ostatných objektov, mimo funkcií, aby ju mohli používať addObjects() aj render(). Samotná lokálna deklarácia v addObjects() ju nesprístupní funkcii render(). Pri vytvorení OrbitControls použite importovaný konštruktor a controls.screenSpacePanning = false podľa pokynov cvičenia.

Priečinky node_modules, dist a nastavenia editora nie sú súčasťou odovzdávaného projektu. Závislosti obnovíte príkazom npm ci.
