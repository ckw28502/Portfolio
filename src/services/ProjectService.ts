import ProjectData from '../data/ProjectData.json';
import ProjectModel from "../models/ProjectModel";

function convertProjectDataToAboutModel(): ProjectModel[] {
	return ProjectData.map(project => new ProjectModel(project.title, project.description, project.icon, project.techs, project.link1, project.link2, project.link));
}

export default { convertProjectDataToAboutModel };
