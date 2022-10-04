<script setup>
import countries from "./../countries.json";
const codeToName = (code) => {
  let countryName;
  countries.forEach((country) => {
    if (code === country.alpha3Code) {
      countryName = country.name.common;
    }
  });
  return countryName;
};
</script>

<template>
  <div class="col-7">
    <div v-for="country in countries" :key="country.alpha3Code">
      <div v-if="$route.params.id === country.alpha3Code">
        <img
          :src="
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toLowerCase() +
            '.png'
          "
          style="width: 150px"
        />
        <h1>{{ country.name.common }}</h1>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td>{{ country.capital.toString() }}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{{ country.area }} km <sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li v-for="border in country.borders">
                    <a :href="'/' + border" class="text-decoration-none">{{
                      codeToName(border)
                    }}</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
