import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { friendlyArtifacts, friendlyCreatures, putInArchives } from "../../ScriptUtils"
import { CardInGame } from "../../../shared/gamestate/CardInGame"

const cardScript: CardScript = {
    // Reap: You may archive a friendly creature or artifact from play.
    power: () => 3,
    reap: {
        validTargets: (state) => (friendlyCreatures(state) as CardInGame[]).concat(friendlyArtifacts(state) as CardInGame[]),
        numberOfTargets: () => 1,
        perform: (state, config) => {
            putInArchives(state, config.targets, true)
        }
    }
}

cardScripts.scripts.set("vezyma-thinkdrone", cardScript)