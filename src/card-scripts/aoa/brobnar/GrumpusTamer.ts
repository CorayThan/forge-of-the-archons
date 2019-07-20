import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"
import {activePlayerState, putInHand, shuffleDeck} from "../../ScriptUtils"


const cardScript: CardScript = {
    power: () => 4,
    reap: {
        validTargets: (state) => {
            return activePlayerState(state).library.concat(activePlayerState(state).discard)
                .filter(card => card.backingCard.cardTitle === "War Grumpus")
        },
        numberOfTargets: () => 1,
        perform: (state, config) => {
            putInHand(state, config.targets)
            shuffleDeck(state)
        }
    }
}

cardScripts.scripts.set("grumpus-tamer", cardScript)