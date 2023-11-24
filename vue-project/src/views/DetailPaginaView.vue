<template>

<NavComponent/>


  <header>
    <div class="picture-section">
      <div class="items">
        <img class="image" src="@/assets/img_3.png" alt="gitaar1">
        <img class="image" src="@/assets/img_4.png" alt="gitaar2">
        <img class="image" src="@/assets/img_5.png" alt="gitaar3">
      </div>
      <div class="picture-item">
        <h1 class="card-overlay-heading">Ibanez 3500X (small)</h1>
        <img src="@/assets/guitar.png" alt="guitar1" class="card-image">
      </div>
      <div class="text-number">
        <p><b>De Ibanez 3500X(small)</b> is een zwarte elektrische gitaar met een "Flat Black" finish. Deze gitaar
          behoort tot de
          Ibanez GIO-serie, die bekend staat om zijn betaalbare prijs en goede speelbaarheid. De GRG121DX-BKF
          heeft
          een
          dubbele cutaway bodyvorm, wat zorgt voor gemakkelijke toegang tot de hogere frets. De gitaar heeft een
          agressieve uitstraling en is geschikt voor verschillende muziekstijlen, vooral rock en metal.</p>
        <p class="price">499.99 euro</p>
        <form>
          <input id="hoeveelheid" type="number">
          <label for="hoeveelheid">Hoeveelheid</label>
        </form>
        <button class="buybutton">Koop product</button>
      </div>
    </div>
  </header>


</template>

<script>
import NavComponent from "../components/NavComponent";
export default {
  name: "DetailPaginaView",
  components: {
    NavComponent
  }
}
</script>

<style scoped>

</style>