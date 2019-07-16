import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 2,
    skirmish: () => true,

}

cardScripts.scripts.set("spyyyder", cardScript)