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
            <button class="card-overlay-button">Meer info</button>
          </div>
          <img src="@/assets/guitar-T-4.png" alt="guitar9" class="card-image">
        </div>
      </div>
    </section>
  </article>
</template>

<script>

import data from '@/json/data.json';

export default {

   data(){
     return {
       myJson: json
     }
   },

  producten: [
    {
      id: 1,
      titel: 'Ibanez 3500X',
      omschrijving: 'Dit gitaar is een zekere aanrader voor gevorderde gitaar spelers, Het heeft een hele dunne en soepele nek waarmee je snel en makkelijk kan shredden.',
      afbeelding: '@/assets/guitar.png',
      price: '€500',
      btw: '25%',
      stock: 12
    },
    {
      id: 2,
      titel: 'Pacifica Eg350',
      omschrijving: 'de Pacifica Eg350 is altijd een aanrader voor beginners, dit gitaar is gemaakt met het eikenhout, waardoor de gitaar zo licht als een veertje is. Dit gitaar heeft 26 frets wat meer is dan de gemiddelde.',
      afbeelding: '@/assets/guitar-2.png',
      price: '€300',
      btw: '40%',
      stock: 20
    },
    {
      id: 2,
      titel: 'Pacifica Eg350',
      omschrijving: 'de Pacifica Eg350 is altijd een aanrader voor beginners, dit gitaar is gemaakt met het eikenhout waardoor de gitaar zo licht als een veertje is. Dit gitaar heeft 26 frets wat meer is dan de gemiddelde.',
      afbeelding: '@/assets/guitar-3.png',
      price: '€300',
      btw: '40%',
      stock: 20
    },
    {
      id: 4,
      titel: 'Ibanez XRI 1 (gold)',
      omschrijving: 'De Ibanez XRI 1 (gold) heeft niet alleen de juiste sounds maar ook de looks van een echte rockgitaar. dit gitaar is speciaal gemaakt voor als je in verschillende tunes wilt kunnen spelen zoals drop #C, drop #D, drop #A, de snaren zijn gemaakt van zilver in plaats van metaal en ze zijn dikker aangelegt als de meeste snaren waardoor je ze makkelijk anders kan afstemmen zonder dat ze kapot springen!',
      afbeelding: '@/assets/guitar-4.png',
      price: '€4500',
      btw: '10%',
      stock: 2
    }
  ]
  /*props: [
      'name',
      'price'
  ],
  name: "PopularProductsComponent"*/
}
</script>

<style scoped>

</style>