import {CardScript, TargetArea, TargetType} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    runAfterAnyActionThisTurn: {
    	perform: (state, config) => {
    		//TODO if action = enemy creature destroyed
    	}
    }
}

//cardScripts.scripts.set("loot-the-bodies", cardScript)