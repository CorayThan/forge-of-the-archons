import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { captureAmber } from "../../ScriptUtils"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Fight: Capture 1<A>.
    power: () => 6,
    armor: () => 2,
    fight: {
        perform: (state: GameState, config: CardActionConfig) => {
            captureAmber(state, config.thisCard as Creature, 1)
        }
    }
}

cardScripts.scripts.set("champion-tabris", cardScript)