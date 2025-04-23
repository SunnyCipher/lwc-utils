import { LightningElement, api } from 'lwc';

export default class ModalDialog extends LightningElement {
    @api title = 'Dialog';
    @api visible = false;

    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
