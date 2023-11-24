<script>
//script was eerst leeg gwn en de components in src was er ook niet
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavComponent from './components/NavComponent.vue';
import PopularProductsComponent from "./components/PopularProductsComponent.vue";
import DetailPaginaView from "./views/DetailPaginaView.vue";
import LoginView from "./views/LoginView.vue";
import OverzichtsPaginaView from "./views/OverzichtsPaginaView.vue";
import data from './json/data.json';

export default{

  views: {
    DetailPaginaView,
    LoginView,
    OverzichtsPaginaView
  },

  components: {
    NavComponent,
    HeaderComponent,
    PopularProductsComponent,
    FooterComponent,
  },
}
</script>

<template>
  <div class="body_elements">
    <!--<nav class="navbar">
      <a href="index.html">Strings Of Fire</a>
      <ul class="list">
        <li class="list-item"><a class="list-link" href="overzichtspagina.html"><i
            class="dragon logo <i fa-solid fa-guitar"></i>Products</a></li>
        <li class="list-item"><a class="list-link" href="login.html"><i class="user logo fa-solid fa-user"></i></a></li>
        <li class="list-item"><a class="list-link" href="#"><i class="user logo fa-brands fa-shopify"></i></a></li>
      </ul>
    </nav>-->
    <NavComponent/>

    <!--<header class="main_header">
      <div class="text-background">
        <h2>Over Strings Of Fire</h2>
        <p>Welkom bij Strings of Fire, jouw online bestemming voor gitaren en muziekaccessoires. Wij zijn toegewijd
          aan het leveren van hoogwaardige gitaren en deskundige begeleiding, of je nu een beginner bent of een
          ervaren muzikant. Ontdek onze selectie en laat de muziek beginnen!</p>
        <p>Onze online winkel is ontworpen met jouw muzikale reis in gedachten. We bieden een zorgvuldig samengestelde
          selectie van gitaren, variërend van beginnersmodellen tot professionele instrumenten, evenals accessoires
          die je helpen jouw geluid te vormen. Ons team van gepassioneerde gitaristen staat klaar om hun kennis te
          delen en je te helpen bij het maken van de juiste keuzes.</p>
        <p>Dank je wel dat je Strings Of Fire hebt gekozen als jouw partner in muziek. Samen willen we jouw muzikale
          visie realiseren en een blijvende verbinding opbouwen met onze gemeenschap van muzikanten. Ontdek onze
          collectie en laat de muziek samenkomen!</p>
      </div>
    </header>-->

    <HeaderComponent/>

    <section class="reclame">
      <div class="layout">
        <div class="background-div">
          <h2>Bestseller!</h2>
          <h2>Ibanez 3500X</h2>
        </div>
      </div>
    </section>

    <PopularProductsComponent/>
    <!--<article>
      <section class="gallery">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Gibson E-455</h1>
              <p class="card-overlay-paragraph">Prijs: €11 000</p>
              <button class="card-overlay-button">Meer info</button>
            </div>
            <img src="assets/guitar-T-2.png" alt="guitar7" class="card-image">
          </div>
        </div>
      </section>
      <section class="gallery">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Fender stratocaster Er-5</h1>
              <p class="card-overlay-paragraph">Prijs: €20 000</p>
              <button class="card-overlay-button">Meer info</button>
            </div>
            <img src="assets/guitar-T-3.png" alt="guitar8" class="card-image">
          </div>
        </div>
      </section>
      <section class="gallery">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Fender Stratocaster Er-10</h1>
              <p class="card-overlay-paragraph">Prijs: €20 000</p>
              <button class="card-overlay-button">Meer info</button>
            </div>
            <img src="assets/guitar-T-4.png" alt="guitar9" class="card-image">
          </div>
        </div>
      </section>
    </article>-->

    <FooterComponent/>
    <!--<footer>
      <div class="div1">
        <a href="#"><i class="fa-brands fa-facebook"></i>Strings Of Fire</a>
        <a href="#"><i class="fa-brands fa-instagram"></i>Strings Of Fire</a>
        <a href="#"><i class="fa-solid fa-square-envelope"></i>StringsOfFire@hotmail.com</a>
      </div>
      <div class="div2">
        <p>Contactgegevens:</p>
        <ul>
          <li>Telefoonnummer: 0488571245</li>
          <li>Adress: Dennenstraat</li>
          <li>Nummer: 46</li>
          <li>Postcode: 2050</li>
        </ul>
      </div>
      <div class="div3">
        <p class="openingsuren">Openingsuren:</p>
        <ul>
          <li>Maandag: 08:00-15:00</li>
          <li>Dinsdag: 08:00-15:00</li>
          <li>Woensdag: 08:00-15:00</li>
          <li>Donderdag: 08:00-15:00</li>
          <li>Vrijdag: 08:00-15:00</li>
          <li>Zaterdag: 10:00-17:00</li>
          <li>Zondag: Gesloten</li>
        </ul>
      </div>
    </footer>-->
  </div>
</template>

<style>

</style>
