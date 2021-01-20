export class AppSection {
	public id: number;
	public title: string;
	public content: string;
	public routePath: string;

	constructor(id: number, title: string, content: string, routePath: string) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.routePath = routePath;
	}
}
