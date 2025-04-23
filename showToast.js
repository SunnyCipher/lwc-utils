import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const showToast = (that, title, message, variant = 'info') => {
    that.dispatchEvent(new ShowToastEvent({
        title,
        message,
        variant,
        mode: 'dismissable'
    }));
};

export { showToast };
