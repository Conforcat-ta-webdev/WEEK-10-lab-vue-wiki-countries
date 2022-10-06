<template>
    <div class="nav-container">
        <RouterLink class="nav-h1" to="/">WikiCountries</RouterLink>
    </div>
</template>
<script setup>
</script>
<style scoped>
.nav-container {
    height: 50px;
    background-color: rgb(43, 126, 250);
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    align-items: center;
}

.nav-h1 {
    color: white;
    font-size: 26px;
    font-weight: 200;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.nav-h1 :hover {
    text-decoration: underline;
}
</style>
  