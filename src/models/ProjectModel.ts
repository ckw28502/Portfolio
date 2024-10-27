class ProjectModel {
	private title: string;
	private description: string;
    private icon: string;
	private link1: string | null;
	private link2: string | null;
	private link: string | null;
    private techs : string[];

	constructor(title: string, description: string, icon: string, techs : string[], link1: string | undefined, link2: string | undefined, link: string | undefined) {
		this.title = title;
		this.description = description;
        this.icon = icon;
        this.link1 = (link1) ? link1 : null;
        this.link2 = (link2) ? link2 : null;
        this.link = (link) ? link : null;
        this.techs = techs;
	}

	public getTitle(): string {
		return this.title;
	}

    // Return project's description while highlighting the technology
	public getDescription(): string {
        const escapedWords = this.techs.map(word => word.replace(/[-/\\^$.*+?()[\]{}|]/g, '\\$&'));
        const pattern = escapedWords.join("|");
        const regex = new RegExp(`(${pattern})`, "gi");

        return this.description.replace(regex, `<strong class="text-violet-400">$1</strong>`);
	}

    public getIcon(): string {
        return this.icon;
    }

    public checkLinkAmount(): number {
        if (this.link1) {
            return 2;
        }
        if (this.link) {
            return 1;
        }
        return 0;
    }

    public getLink() {
        return this.link;
    }

    public getLink1() {
        return this.link1;
    }

    public getLink2() {
        return this.link2;
    }

    public getTechs(): string[] {
        return this.techs;
    }
}

export default ProjectModel;
