import tabData from "../data/TabData.json";
import TabModel from "../components/models/TabModel";


function createTabObjectsFromJson(): TabModel[] {
    return tabData.map(tab => new TabModel(tab.name, tab.link));
}

export default { createTabObjectsFromJson };