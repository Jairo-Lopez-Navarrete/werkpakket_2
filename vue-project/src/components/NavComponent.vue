<template>
  <nav class="navbar">
    <router-link to="/">Strings Of Fire</router-link>
    <ul class="list">
      <!--<li v-for="navItem in navItems"
          class="nav-list-item">
        <router-link :to="navItem.path" class="nav-list-link">{{ navItem.name }}</router-link>
      </li>-->
      <li class="list-item"></li>
        <router-link to="/overzicht" class="list-link"><i class="user logo fa-solid fa-guitar"></i>Producten</router-link>
      <li class="list-item">
        <router-link to="/login" class="list-link"><i class="user logo fa-solid fa-user"></i></router-link>
      </li>
      <li class="list-item">
        <router-link to="/detail" class="list-link"><i class="user logo fa-brands fa-shopify"></i></router-link>
      </li>
      <!--<li class="list-item"><a class="list-link" href="overzichtspagina.html"><i
          class="dragon logo <i fa-solid fa-guitar"></i>Products</a></li>
      <li class="list-item"><a class="list-link" href="login.html"><i class="user logo fa-solid fa-user"></i></a></li>
      <li class="list-item"><a class="list-link" href="#"><i class="user logo fa-brands fa-shopify"></i></a></li>-->
      <router-view></router-view>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>
</style>