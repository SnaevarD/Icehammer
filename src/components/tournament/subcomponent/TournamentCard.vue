<script setup lang="ts">
  import Tournament from "../models/tournament";
  
    const props = defineProps<{
      tournament: Tournament,
    }>()
  
    const tournament = props.tournament;
    const tournamentLink = "/tournament/" + tournament.id;
  </script>
  
  <template>
    <div class="card">
      <router-link :to="tournamentLink">
        <div class="img" :style="'background-image: url(' + tournament.imagePath + ')'"></div>
        <!-- <img class="img" :src="tournament.imagePath" /> -->
      </router-link>
      <!-- <h3>{{ tournament.id }}</h3> -->
      <h3 class="title">{{ tournament.author }}</h3>
      <p class="text--small">{{ tournament.publishDate }}</p>
      <p>{{ tournament.shortDescription }}</p>
      <router-link :to="tournamentLink">see more</router-link>
    </div>
  </template>
  
  <style scoped lang="scss">
    .card {
      margin-bottom: 80px;
      p, div, img {
        margin-bottom: 24px;
      };
    }
  
    .img {
      width: 100%;
      max-width: 380px;
      background-color: grey;
      height: 220px;
      border-radius: 10px;
      background-size: cover;
      background-position: 50% 50%;
    }
  
    .title {
      font-size: 24px;
      font-weight: bold;
    }
  
    .text--small {
      font-size: 1rem;
    }
  </style>