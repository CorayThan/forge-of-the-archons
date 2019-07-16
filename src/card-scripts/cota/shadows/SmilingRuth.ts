import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 1,
    elusive: () => true,
    onReap: {
        perform: (state, config) => {
            //Add onReap code here
        }
    },

}

cardScripts.scripts.set("smiling-ruth", cardScript)