import tabData from '../data/TabData.json';
import TabModel from '../models/TabModel';

function createTabObjectsFromJson(): TabModel[] {
	return tabData.map((tab) => new TabModel(tab.name, tab.link));
}

export default { createTabObjectsFromJson };
