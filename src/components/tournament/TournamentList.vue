<script setup lang="ts">
  import TournamentCard from "./subcomponent/TournamentCard.vue";
  import Tournament from "./models/tournament";
  import useTournament from "@/composables/useTournament";
  import { ref } from "vue";
  import { computed } from "@vue/reactivity";

  const { activeTournamentList, tournamentListLoaded, getTournamentList } = useTournament()
  getTournamentList();

</script>

<template>
  <div class="container container--medium">
    <h1 class="title">Latest Tournaments!</h1>
    <!-- <p>activeTournament: {{ activeTournamentList }}</p>
    <p>tournamentsLoaded: {{ tournamentListLoaded }}</p> -->
    <div class="tournament-list" v-if="tournamentListLoaded">
      <TournamentCard
        v-for="(tournament, index) in activeTournamentList"
        :tournament="tournament"
        :key="index"
      >
    </TournamentCard>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-size: 3.2rem;
    margin: 100px 0 80px 0;
  }

  .tournament-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px 48px;
  }
</style>