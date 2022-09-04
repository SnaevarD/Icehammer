import Tournament from "@/components/tournament/models/tournament";
import TournamentAPI from "../api/tournamentAPI";
import { ID } from "@/models/generic";
import { computed, ComputedRef } from "vue";
import { useTournamentsStore } from "@/store/tournament";

interface useTournament {
  activeTournamentList: ComputedRef<Tournament[]>
  tournamentListLoaded: ComputedRef<boolean>
  activeTournament: ComputedRef<Tournament | undefined | null>
  tournamentLoaded: ComputedRef<boolean>
  getTournamentList() : Promise<Tournament[]>,
  getTournament(tournamentID : ID) : Promise<Tournament | undefined | null>,
}

export default function useTournament() : useTournament {
  const tournamentStore = useTournamentsStore();
  const activeTournamentList = computed(() => tournamentStore.activeTournamentList);
  const tournamentListLoaded = computed(() => tournamentStore.tournamentListLoaded);
  const activeTournament = computed(() => tournamentStore.activeTournament);
  const tournamentLoaded = computed(() => tournamentStore.tournamentLoaded);

  const getTournament = async(tournamentID : ID) : Promise<Tournament | undefined | null> => {
    const response = await TournamentAPI.getTournamentList();
    console.log("response", response);
    console.log("tournamentID", tournamentID);
    let selectedTournament = response.find((data : Tournament) => { return data.id == tournamentID })
    console.log("selectedTournament", selectedTournament);
    if( selectedTournament ) {
      tournamentStore.tournamentLoaded = true;
      tournamentStore.activeTournament = selectedTournament;
    }
    else {
      tournamentStore.tournamentLoaded = false;
      tournamentStore.activeTournament = null;
    }
    return selectedTournament;
  }

  const getTournamentList = async() : Promise<Tournament[]> => {
    const response = await TournamentAPI.getTournamentList();
    tournamentStore.tournamentListLoaded = true;
    tournamentStore.activeTournamentList = response;
    return response;
  }

  return {
    activeTournamentList,
    tournamentListLoaded,
    activeTournament,
    tournamentLoaded,
    getTournamentList,
    getTournament,
  }
}