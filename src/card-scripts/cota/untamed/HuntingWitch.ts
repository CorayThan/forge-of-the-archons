import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { activePlayerState, modifyAmber } from "../../ScriptUtils"

const cardScript: CardScript = {
    power: () => 2,
    cardPlayed: {
        perform: (state, config) => {
            const triggerCard = config.triggerCard
            if (activePlayerState(state).player.id !== config.thisCard.ownerId) return
            if (triggerCard.backingCard.cardType === 'Creature') {
                modifyAmber(activePlayerState(state), 1)
            }
        }
    }
}

cardScripts.scripts.set("hunting-witch", cardScript)