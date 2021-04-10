<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Tłumaczenia**

    Tłumaczenie urli stron jest oparte na pliku  ```src/intl/routeTranslations.json```
    Klucze muszą odpowiadać stronom w ```src/pages```. Jeśli w danym kluczu nie ma odpowiednika
    w innym języku, brana jest wartość domyślna.
    
    Tłumaczenie projektów z portfolio odbywa się ```gatsby-node.js``` i wymagana jest określona
    struktura plików *.md. default.md zawiera informacje powtarzalne w innych językach, jak 
    na przykład klucze tagów. Warianty językowe są odczytywane z nazwy pliku. Np. ```en.md```
    
    W graph query w ProjectTemplate podajemy tylko te pola, które są dostępne we wszystkich
    wariantach językowych. Jeśli chcemy, odnieść się do pola, które jest uniwersalne dla wszystkich
    wariantów językowych robimy to w query w ```gatsby-node.js```
    
    **Projekty**

    Wygląd poszczególnych projektów bazuje na tekście i zdjęciach. Na różnych projektach jest
    różna ułożenie tekstu i zdjęć między sobą. Dlatego w plikach md podawana jest informacja
    przed którym zdjęciem ma być wstawiony paragraf. 