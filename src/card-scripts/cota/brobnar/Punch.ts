import { CardScript, TargetArea, TargetType } from "../../types/CardScript"
import { cardScripts } from "../../types/CardScripts"
import { checkIfHasTargets, dealDamage } from "../../types/ScriptUtils"

const cardScript: CardScript = {
    amber: () => 1,
    onPlay: {
        perform: (state, config) => {
            if (checkIfHasTargets(config, 1)) {
                const target = config.targets[0] as Creature
                dealDamage(target, 3)
            }
        },
        targetOrder: [{
            types: [TargetType.CREATURE],
            areas: [TargetArea.BOARD]
        }]
    }
}

cardScripts.scripts.set("punch", cardScript)