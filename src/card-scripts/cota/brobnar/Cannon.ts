import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../types/CardScripts"
import { Creature } from "../../../shared/gamestate/Creature"
import { allCreatures , dealDamage } from "../../types/ScriptUtils"

const cardScript: CardScript = {
    action: {
        validTargets: allCreatures,
        numberOfTargets: () => 1,
        perform: (state, config) => {
            const targetedCreature = config.targets[0] as Creature
            dealDamage(targetedCreature, 2)
        }
    }
}

cardScripts.scripts.set("cannon", cardScript)