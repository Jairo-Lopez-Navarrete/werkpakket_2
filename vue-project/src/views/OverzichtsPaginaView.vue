<template>

  <NavComponent/>

  <header class="overzichts_titel">
    <h1>Elektrische gitaren</h1>
  </header>

  <section>
    <div class="filter">
      <form class="filter-form">
        <label for="filter-item">St-model</label>
        <input id="filter-item" type="checkbox">
      </form>
      <form>
        <label for="filter-item-2">T-model</label>
        <input id="filter-item-2" type="checkbox">
      </form>
    </div>
  </section>

  <div class="pagination">
    <a href="#" class="page-link active">1</a>
    <a href="#" class="page-link">2</a>
    <a href="#" class="page-link">3</a>
    <a href="#" class="page-link">4</a>
    <a href="#" class="page-link">5</a>
  </div>

  <article>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Ibanez 3500X (small)</h1>
            <p class="card-overlay-paragraph">Prijs: €500</p>
            <a href="detailpagina.html">
              <button class="card-overlay-button">Koop nu</button>
            </a>
          </div>
          <img src="@/assets/guitar.png" alt="guitar1" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Pacifica Eg350</h1>
            <p class="card-overlay-paragraph">Prijs: €300</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-2.png" alt="guitar2" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Squier stratocaster</h1>
            <p class="card-overlay-paragraph">Prijs: €450</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-3.png" alt="guitar3" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Ibanez XRI 1 (Gold)</h1>
            <p class="card-overlay-paragraph">Prijs: €4500</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-4.png" alt="guitar5" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">ESP 3AgL3</h1>
            <p class="card-overlay-paragraph">Prijs: €1100</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-T.png" alt="guitar6" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Gibson E-455</h1>
            <p class="card-overlay-paragraph">Prijs: €11 000</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-T-2.png" alt="guitar7" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Fender stratocaster Er-5</h1>
            <p class="card-overlay-paragraph">Prijs: €20 000</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-T-3.png" alt="guitar8" class="card-image">
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Fender Stratocaster Er-10</h1>
            <p class="card-overlay-paragraph">Prijs: €20 000</p>
            <button class="card-overlay-button">Koop nu</button>
          </div>
          <img src="@/assets/guitar-T-4.png" alt="guitar9" class="card-image">
        </div>
      </div>
    </section>
  </article>

 <FooterComponent/>

</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import NavComponent from "../components/NavComponent.vue";
export default {
  name: "OverzichtsPaginaView",
  components: {

    NavComponent,

    FooterComponent
  }
}
</script>

<style scoped>

</style>