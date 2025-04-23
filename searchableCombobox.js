import { LightningElement, api, track } from 'lwc';

export default class SearchableCombobox extends LightningElement {
    @api label;
    @api placeholder = 'Search...';
    @api options = [];

    @track filtered = [];

    handleInput(event) {
        const keyword = event.target.value.toLowerCase();
        this.filtered = this.options.filter(o => o.label.toLowerCase().includes(keyword));
    }

    connectedCallback() {
        this.filtered = this.options;
    }
}
