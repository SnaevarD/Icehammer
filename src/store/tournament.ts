import Tournament from "@/components/tournament/models/tournament";
import { defineStore } from "pinia";


interface TournamentsState {
  activeTournamentList: Tournament[];
  tournamentListLoaded: boolean;
  activeTournament: Tournament | null;
  tournamentLoaded: boolean;  
};


export const useTournamentsStore = defineStore('tournaments', {
  state: (): TournamentsState => ({
    activeTournamentList: [],
    tournamentListLoaded: false,
    activeTournament: null,
    tournamentLoaded: false,
  }),
  actions: {
    setActiveTournamentList(tournaments: Tournament[]) {
      this.tournamentListLoaded = true;
      this.activeTournamentList = tournaments;
    },
    setActiveTournament(tournaments: Tournament) {
      this.tournamentLoaded = true;
      this.activeTournament = tournaments;
    },
  }
});
