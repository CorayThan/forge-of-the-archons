import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"
import {activePlayerState, friendlyCreatures, healCreatures, modifyAmber} from "../../ScriptUtils"
import {Creature} from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Play: Gain 1A for each damaged friendly creature.
    // Reap: Heal 2 damage from a friendly creature.
    power: () => 2,
    onPlay: {
        perform: (state) => {
            const damagedFriendlyCreatures = friendlyCreatures(state)
                .filter(creature => (creature as Creature).tokens.damage > 0)
            modifyAmber(activePlayerState(state), damagedFriendlyCreatures.length)
        }
    },
    reap: {
        validTargets: (state) => friendlyCreatures(state)
            .filter(creature => (creature as Creature).tokens.damage > 0),
        numberOfTargets: () => 1,
        perform: (state, config) => {
            healCreatures(config.targets as Creature[], 2)
        }
    }
}

cardScripts.scripts.set("dharna", cardScript)