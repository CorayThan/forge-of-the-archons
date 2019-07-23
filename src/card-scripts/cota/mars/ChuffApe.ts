import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { destroyCards, friendlyCreatures, stunCreatures } from "../../ScriptUtils"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    // Chuff Ape enters play stunned.
    // Fight/Reap: You may sacrifice another friendly creature. If you do, fully heal Chuff Ape.
    power: () => 11,
    taunt: () => true,
    onPlay: {
        perform: (state, config) => {
            stunCreatures([config.thisCard] as Creature[])
        }
    },
    reap: {
        validTargets: friendlyCreatures,
        numberOfTargets: () => 1,
        perform: (state, config) => {
            (config.thisCard as Creature).tokens.power = 0
            destroyCards(state, config.targets)
        }
    },
    fight: {
        validTargets: friendlyCreatures,
        numberOfTargets: () => 1,
        perform: (state, config) => {
            (config.thisCard as Creature).tokens.power = 0
            destroyCards(state, config.targets)
        }
    }
}

cardScripts.scripts.set("chuff-ape", cardScript)