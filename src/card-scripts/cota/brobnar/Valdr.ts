import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"
import {activePlayerState, friendlyPlayer, enemyCreatures, onFlank} from "../../types/ScriptUtils"
import {Creature} from "../../../shared/gamestate/Creature";

const cardScript: CardScript = {
    power: () => 6,
    fightingDamageDealt: (state, config) => {
        if (activePlayerState(state) === friendlyPlayer(state, config.thisCard)
            && onFlank(enemyCreatures(state), config.targets[0] as Creature)) {
            return (config.thisCard as Creature).power + 2
        } else {
            return (config.thisCard as Creature).power
        }
    }
}

cardScripts.scripts.set("valdr", cardScript)