import {CardScript} from "../../types/CardScript"
import {enemyCreatures, enemyPlayer, friendlyCreatures, friendlyPlayer} from "../../types/ScriptUtils"

const cardScript: CardScript = {
    amber: () => 1,
    staticEffect: (state, config) => {
        if (config!.thisCard) {
            enemyPlayer(state, config.thisCard).keyCost += friendlyCreatures(state)
                .filter(creature => creature.power >= 5).length
            friendlyPlayer(state, config.thisCard).keyCost += enemyCreatures(state)
                .filter(creature => creature.power >= 5).length
        }
    }
}

//cardScripts.scripts.set("grump-buggy", cardScript)