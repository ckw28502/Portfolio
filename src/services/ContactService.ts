import ContactData from '../data/ContactData.json';
import ContactModel from '../models/ContactModel';

function convertContactDataToContactModel(): ContactModel[] {
	return ContactData.map((contact) => new ContactModel(contact.name, contact.url));
}

export default { convertContactDataToContactModel };
