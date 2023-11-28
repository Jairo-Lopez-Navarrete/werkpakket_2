<template>
  <article>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">ESP era5S11</h1>
            <p class="card-overlay-paragraph">Prijs: €15 000</p>
            <button class="card-overlay-button">Meer info</button>
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
            <button class="card-overlay-button">Meer info</button>
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
            <button class="card-overlay-button">Meer info</button>
          </div>
          <img src="@/guitar-T-3.png" alt=" guitar8" class="card-image">
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
          <img src="@/assets/guitar-T-4.png" alt="guitar9" class="card-image">
        </div>
      </div>
    </section>
  </article>
</template>

<script>

//import producten from '@/json/producten.json';

export default {

  data(){
    return {
      data: producten
    }
  },

  /*props: [
      'name',
      'price'
  ],
  name: "PopularProductsComponent"*/
}
</script>

<style scoped>

</style>