import React from "react";
import styled from "styled-components";
import Layout from "../layouts/main";
import { graphql } from "gatsby";
import { media } from "src/helpers/breakpoints";

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.textMaxWidth};
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  p {
    font-size: 1rem;
    width: clamp(35ch, 100%, 75ch);
    max-width: 100%;
    margin: auto;

    ${media.tablet`
      font-size: 1.125rem;
    `}
    ${media.desktop`
      font-size: 1.5rem;
    `}
  }

  > h1,
  h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
    ${media.tablet`
      font-size: 3rem;
    `}
    ${media.desktop`
      font-size: 4rem;
    `}
  }

  h2 {
    margin-top: 4rem;
    ${media.tablet`
      margin-top: 6rem;
    `}
    ${media.desktop`
      margin-top: 10rem;
    `}
  }

  h3,
  & > p:first-of-type {
    font-size: 1.25rem;
    ${media.tablet`
      font-size: 1.5rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > p ~ p {
    margin-top: 2rem;
  }

  > div {
    margin-top: 2rem;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

    ${media.tablet`
      text-align: left;
    `}

    ${media.desktop`
      margin-top: 6rem;
      justify-content: space-between;
    `}

    > div {
      width: clamp(35ch, 45%, 75ch);

      > h3 {
        margin-top: 2rem;
      }

      > p {
        margin-top: 2rem;
      }
    }
  }
`;

const Strategia = () => {
  return (
    <Wrapper>
      <h1>Strategia. Kluczowy etap świadomego projektowania.</h1>
      <p>
        Przeglądając projekty łatwo je sprowadzić do prostej oceny: ładne -
        nieładne. Dla nas to za mało. My analizujemy je pod wieloma kątami:
        zasadne czy niezasadne, dla kogoś czy dla nikogo, spójne czy chaotyczne,
        o czymś czy o niczym. To, że projekty muszą być warsztatowo dobre jest
        warunkiem koniecznym, ale nie wystarczającym.{" "}
      </p>
      <p>
        Projekty, według nas, powinny być wynikiem świadomego planu, docierać do
        konkretnych odbiorców, spełniać konkretne potrzeby konsumenckie i
        realizować cele biznesowe. Właśnie dlatego prace strategiczne są
        kluczowe w procsie tworzenia marki. To one definiują kierunki w których
        rozwinie się proces projektowy.
      </p>
      <div>
        <div>
          <h3>Proces</h3>
          <p>
            Nie ma jednego scenariusza, bo klienci są różni i ich potrzeby też.
            Często jednak wygląda to tak… Klient przesyła do nas zapytanie,
            załącza brief będący zestawem wytycznych i opisem tego co chciałby
            osiągnąć. My uważnie go czytamy, przyglądamy się komunikacji i
            projektom jego opakowań oraz analizujemy całą kategorię. Jeśli
            uznamy, że ilość informacji o marce jest niewystarczająca sugrujemy
            przeprowadzenie warsztatów strategicznych. Ich wynikiem jest
            pozycjonowanie i dokument wyznaczający zredefioniowane zadania.
          </p>
          <p>
            Wiedząc o czym i dla kogo jest marka możemy rozpocząć projektowanie.
            Wtedy jednak jest to projekowanie świadome, celowe i nieprzypadkowe.
            Wtedy już nie chodzi tylko o to czy jest ładnie, ale czy również z
            sensem.
          </p>
        </div>

        <div>
          <h3>Architektura marki</h3>
          <p>
            Istotą audytu architektury marki jest analiza i rekomendacja
            zależności jakie mają panować w ramach portfolio produktów
            oferowanych przez klienta. Siłą analizy przeprowadzonej przez
            konsultanta zewnętrznego jest niezależność oceny, umiejętność
            przyjmowania perspektywy klienta marki i doświadczenie w
            przeprowadzaniu takich „porządkowań”. Efektem procesu jest
            zrozumiały podział oferty na jej część flagową, linie premium,
            economy, submarki albo wręcz wydzielenie zupełnie nowej marki.
            Czasami efekt jest odwrotny - zalecana jest unifikacja i likwidacja
            zbędnych nic nie wnoszących podziałów. Każdy przypadek jest inny.
            Sensowna architektura pomaga odbiorcom rozumieć markę i uniknąć
            dysonansów poznawczych. Analiza architektury marki stanowi ważny
            wstęp do określenia pozycjonowania komunikacyjnego.{" "}
          </p>
        </div>
      </div>
      <h2>Metoda Tripod™</h2>
      <p>
        W naszej autorskiej metodzie pozycjonowania analizujemy trzy filary,
        które wiodą do esencji marki: koncept biznesowy - to na ile jest
        innowacyjny w metodzie, w produkcie, dostarczaniu rozwiązań; odbiorca
        marki - jego świat, potrzeby i przekonania o kategorii; sama marka -
        jakie odbicie ma kształtować u odbiorcy, jaki jest jej styl, język,
        wartości i historia jaką opowiada. Jaki archetyp bohatera ozwierciedla
        markę. Warsztaty strategiczne stanowią podstawę opracowania
        pozycjonowania. Ono zaś wytycza ramy komunikacji - jej język i styl.
      </p>
    </Wrapper>
  );
};

export default Strategia;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    translations: allLocale(filter: { ns: { eq: "routes" } }) {
      edges {
        node {
          id
          ns
          language
          data
        }
      }
    }
  }
`;
