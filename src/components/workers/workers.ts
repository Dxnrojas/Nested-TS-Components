export enum Attribute {
    'image' = 'image',
    'name' = 'name',
    'uid' = 'uid',
    'age' = 'age',
    'gender' = 'gender',
    'area' = 'area',
    'position' = 'position',
    'timeInCompany' = 'timeInCompany',
    'experience' = 'experience'
}

class Workers extends HTMLElement {

    image?: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeInCompany?: number;
    experience?: number;

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.timeInCompany:
                this.timeInCompany = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.experience:
                this.experience = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[Attribute[propName]] = newValue;
                break;
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <img src='${this.image || 'No image'}'>
                <h2>${this.name || 'No name'}</h2>
                <p>${this.uid || 'No ID'}</p>
                <p>${this.age || 'No age'}</p>
                <p>${this.gender || 'No gender'}</p>
                <p>${this.area || 'No area'}</p>
                <p>${this.position || 'No position'}</p>
                <p>${this.timeInCompany || 'No time in company'}</p>
                <p>${this.experience || 'No experience'}</p>
            </section>
            `;
        }
    }

}

customElements.define('my-workers', Workers);
export default Workers;
