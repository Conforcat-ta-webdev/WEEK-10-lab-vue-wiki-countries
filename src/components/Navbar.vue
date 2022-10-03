<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>
    <img src="../../public/example.jpeg" alt="world of flags" /> WikiCountries
  </h1>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/countries" class="nav-link">Countries</RouterLink>
          </li>
          <li>
            <RouterLink
              v-for="country in countries"
              :key="country.code"
              :to="{ name: 'user', params: { id: country.code } }"
            >
              {{ country.code }}
            </RouterLink>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
h1 {
  margin-top: 35px;
  text-align: center;
  color: #61dafb;
}
.navbar {
  margin-bottom: 20px;
  padding: 0px 35px;
}
img {
  width: 50px;
}
</style>
