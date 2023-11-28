<template>
  <div class="body_elements">
    <NavComponent/>

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

    <FooterComponent/>

  </div>
</template>

<script>
//script was eerst leeg gwn en de components in src was er ook niet
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
import producten from '@/json/producten.json';

export default{
  name: "HomeView",
   data(){
     return {
     data: producten
    }
   },

  components: {
    NavComponent,
    HeaderComponent,
    PopularProductsComponent,
    FooterComponent,
  }
}
</script>

<style scoped>

</style>