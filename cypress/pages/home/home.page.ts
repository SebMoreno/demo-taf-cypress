export class HomePage {
    private readonly homePageUrl = '/';
    private language: string;
    constructor(language: string) {
        this.language = language;
    }

    public visitHomePage() {
        cy.visit(this.homePageUrl);
    }

    public getHomeTitle() {
        return cy.get('.home-title');
    }

    public getHomeSubtitle() {
        return cy.get('.home-subtitle');
    }

    public getHomeButton() {
        return cy.get('.home-button');
    }
}
