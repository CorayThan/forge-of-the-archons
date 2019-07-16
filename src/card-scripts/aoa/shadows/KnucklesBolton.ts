import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"

const cardScript: CardScript = {
    power: () => 3,
    elusive: () => true,
    skirmish: () => true,

}

cardScripts.scripts.set("knuckles-bolton", cardScript)