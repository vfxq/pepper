// How to use component 'Notify'

Architecure of Nofity oriented for using http response without any modification.
Notify uses for show alerts and notifications. It depends from field response.status in object response.
In some cases necessary render status since capital letter. We can reoder it directly in action.

Example of customization message text you can find it function assignItemsToPaymentSuccess() from paumentAction.js.
success:
    payload: {response: { ...payload.response, statusText: `Invoice items assigned.`}}

Error:
    payload: {response: { ...error.response, statusText: `Cann't assign Invoice items. ${error.response.statusText}.`}}