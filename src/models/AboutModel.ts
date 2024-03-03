class AboutModel{
    private id: number;
    private title: string;
    private description: string;

    constructor(id: number, title: string, description: string){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }
}

export default AboutModel;