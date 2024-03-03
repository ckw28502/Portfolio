import AboutModel from "../models/AboutModel";
import AboutData from "../data/AboutData.json";

function convertAboutDataToAboutModel(): AboutModel[] {
    return AboutData.map((about,index) => new AboutModel(index+1, about.title, about.description));
}

export default {convertAboutDataToAboutModel};