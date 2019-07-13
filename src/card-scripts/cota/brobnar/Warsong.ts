import { CardScript, TargetArea, TargetType } from "../../types/CardScript"
import { cardScripts } from "../../types/CardScripts"
import { checkIfHasTargets, dealDamageWithSplash } from "../../types/ScriptUtils"

const cardScript: CardScript = {
    runAfterAnyActionThisTurn: {
        perform: (state, config) => {
            //TODO if action = friendly creature fights
        }
    }
}

cardScripts.scripts.set("warsong", cardScript)