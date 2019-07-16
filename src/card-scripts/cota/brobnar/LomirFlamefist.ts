import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 5,
    onPlay: {
        perform: (state, config) => {
            //Add onPlay code here
        }
    },

}

cardScripts.scripts.set("lomir-flamefist", cardScript)