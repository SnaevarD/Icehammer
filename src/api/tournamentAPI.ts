import Tournament from "@/components/tournament/models/tournament";
import { ID } from "@/models/generic";
import TournamentAPIMock from "./mock/tournamentApiMock";

class TournamentService {
    
    /*** GET ***/
    static async getTournament(tournamentID: ID) : Promise<Tournament> {
        // /dwapi/ecommerce/carts/{secret}
        return {} as Tournament;
    }

    static async getTournamentList() : Promise<Tournament[]> {
        return TournamentAPIMock.getTournamentList();
    }
}

export default TournamentService;