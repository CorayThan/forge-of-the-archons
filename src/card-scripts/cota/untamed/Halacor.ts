import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { friendlyFlankCreatures, giveSkirmish } from "../../ScriptUtils"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    power: () => 4,
    staticEffect: (state) => {
        giveSkirmish(friendlyFlankCreatures(state) as Creature[])
    }
}

cardScripts.scripts.set("halacor", cardScript)