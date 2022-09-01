<script setup lang="ts">
  import useTournament from "@/composables/useTournament";
  import { useRouter } from "vue-router";
  import Tournament from "./models/tournament";

  const paraTournamentID = useRouter().currentRoute.value.params.tournamentID?.at(0);
  const tournamentID = paraTournamentID ? paraTournamentID : "";

  const { activeTournament, tournamentLoaded, getTournament } = useTournament()
  getTournament(tournamentID);
  
</script>

<template>
  <!-- <p>{{ tournamentID }}</p>
  <p>{{ activeTournament }}</p>
  <p>{{ tournamentLoaded }}</p> -->
  <div class="container tournamentDetail" v-if="activeTournament">
    <h1>TournamentDetails!</h1>
    <h3>{{ activeTournament.id }}</h3>
    <p>{{ activeTournament.author }}</p>
    <p>{{ activeTournament.publishDate }}</p>
    <p>{{ activeTournament.shortDescription }}</p>
    <p>test {{ $route.params.tournamentID }}</p>
  </div>
  <div v-else>
    <p>No tournament found</p>
  </div>
</template>

<style scoped>
  .tournamentDetail {
    margin-top: 120px;
  }
</style>