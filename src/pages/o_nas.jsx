import React from "react";
import styled from "styled-components";
import Layout from "../layouts/main";
import { graphql } from "gatsby";
import { media } from "src/helpers/breakpoints";

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.textMaxWidth};
  margin: 5rem auto 10rem;
  padding: 0 1rem;
  text-align: center;
  p {
    font-size: 1rem;
    width: clamp(35ch, 100%, 75ch);
    max-width: 100%;
    margin: auto;

    ${media.tablet`
      font-size: 1.75rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > h1,
  h2 {
    font-size: 2rem;

    ${media.tablet`
      font-size: 3rem;
      padding: 0 2rem;
      margin-bottom: 4rem;
    `}
    ${media.desktop`
      font-size: 4rem;
      padding: 0;
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

  h3 {
    font-size: 1.25rem;
    ${media.tablet`
      font-size: 1.5rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > p {
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
      text-align: center;

      > h3 {
        margin-top: 2rem;
      }

      > p {
        margin-top: 1rem;
      }
    }
  }
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <h1>
        Brandwell to agencja brandingowa. Od 12 lat tworzymy lub odświeżamy
        marki, projektujemy identyfikacje i opakowania.{" "}
      </h1>
      <h2>Co robimy?</h2>
      <div>
        <div>
          <h3>Strategia marki</h3>
          <p>Audyt portfolio marki</p>
          <p>Architektura marki</p>
          <p>Pozycjonowanie marki</p>
        </div>
        <div>
          <h3>Projektowanie marki</h3>
          <p>Projektowanie Logo</p>
          <p>Identyfikacja Wizualna</p>
        </div>
        <div>
          <h3>Projektowanie opakowań</h3>
          <p>Kreacja Nazw</p>
          <p>Projektowanie opakowań</p>
          <p>DTP. Przygotowanie do druku</p>
        </div>
        <div>
          <h3>Projektowanie strukturalne</h3>
          <p>Projektowanie kształtów opakowań</p>
          <p>Opracowanie dokumentacji produkcyjnej</p>
        </div>
      </div>
      <h2>Jak to robimy?</h2>
      <p>
        Ściśle współpracujemy z naszymi klientami. Uważamy, że partnerstwo
        i wzajemne zaufanie jest fundamentem w budowaniu prawdziwych wartości.
        Klienci przekazują nam wiedzę o swojej branży, specyfice swoich klientów
        i kluczowych parametrach jakimi kierują się w procesie wyboru. My
        wskazujemy jak do nich dotrzeć.
      </p>
      <p>
        Projektujemy marki ze świadomością celu – tak, by komunikowały się ze
        swoimi odbiorcami w adekwatny i atrakcyjny dla nich spostób. Nie
        tworzymy jedynie kolorowych obrazków. Nasze projekty to przemyślane
        narzędzia do skutecznej rywalizacji o klienta.
      </p>
      <h2>Proces</h2>
      <p>
        Rozpoczynamy od prac strategicznych. Zaczynamy od zdefiniowania miejsca
        w którym znajduje się marka. Określamy jej grupę kluczowych odbiorców.
        Odtwarzamy ich świat, by łatwiej zrozumieć ich prawdziwe potrzeby.
        Szukamy unikalnych cech marki, by zbudować w jej oparciu przewagę
        rynkową.{" "}
      </p>
      <p>
        Dzięki poprzedzeniu prac kreatywnych analizami strategicznymi tworzymy
        świadomie. Jesteśmy artystami, ale nie oderwanymi od biznesowej
        rzeczywistości. Według nas projekty mają odzwierciedlać zawarte
        w strategii cele i być dopasowane dla grupy docelowej.
      </p>
      <p>
        Realizacja. Łączymy kompetencje wielu osób, tak by uzyskać jak najlepszy
        efekt. Organizujemy sesje fotograficzne, zatrudniamy najlepszych
        ilustratorów, zdolnych copywriterów, art directorów i typografów.
        Finalnie przygotowujemy prace do druku.
      </p>
      <h2>Czego nie robimy?</h2>
      <p>
        <strong>Nie bierzemy udziału w bezpłatnych przetargach.</strong> Nie
        stronimy od udziału w konkursach, ale bierzemy w nich udział pod
        warunkiem, że nasza praca zostanie opłacona.
      </p>
    </Wrapper>
  );
};

export default AboutUs;

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
