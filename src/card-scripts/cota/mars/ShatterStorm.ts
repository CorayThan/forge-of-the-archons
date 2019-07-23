import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { activePlayerState, inactivePlayerState, modifyAmber } from "../../ScriptUtils"

const cardScript: CardScript = {
    // Play: Lose all your <A>. Then, your opponent loses triple the amount of <A> you lost this way.
    onPlay: {
        perform: (state) => {
            const amberLost = modifyAmber(activePlayerState(state), activePlayerState(state).amber)
            modifyAmber(inactivePlayerState(state), amberLost * 3)
        }
    }
}

cardScripts.scripts.set("shatter-storm", cardScript)