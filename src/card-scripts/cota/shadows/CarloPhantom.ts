import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 1,
    elusive: () => true,
    skirmish: () => true,

}

cardScripts.scripts.set("carlo-phantom", cardScript)