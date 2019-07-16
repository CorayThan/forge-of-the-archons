import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 4,
    armor: () => 1,
    onPlay: {
        perform: (state, config) => {
            //Add onPlay code here
        }
    },
    onReap: {
        perform: (state, config) => {
            //Add onReap code here
        }
    },

}

cardScripts.scripts.set("aubade-the-grim", cardScript)