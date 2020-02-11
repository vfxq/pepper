import reducer from '../invoice';
import * as types from '../../types';
import {
    normalizedInvoiceData,
    mockSetSelectionInvoice,
    mockSetSelectionInvoiceItem,
    mockUpdateSelectionInvoiceItemBefore,
    mockUpdateSelectionInvoiceItemSmallAfter,
    mockUpdateSelectionInvoiceItemBigAfter,
    mockUpdateSelectionInvoiceItemZero,
    mockUpdateSelectionInvoiceBefore,
    mockUpdateSelectionInvoiceSmallAfter,
    mockUpdateSelectionInvoiceBigAfter,
    mockUpdateSelectionInvoiceZeroAfter,
    mockForDistribDataBefore,
    mockForDistribDataAfter,
    
    mockForResetSelectionBefore,
    mockForResetSelectionAfter
} from'../../../../__mocks__/invoicesData';

const initialState = {
    loading: false,
    data: [],
    item: false,
    itemData: false,
    notify: false,
    balance: 0,
    createdInvoiceFlag: false,
    generating: false,
    generatedInvoices: null,
}

describe('Invoice reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {...initialState}
        )
    })

    it('should handle SET_SELECTION for invoice', () => {
        const setSelectionStateInvoice = {
            ...initialState,
            balance: 1200,
            data: new Array(...normalizedInvoiceData),
        }

        const action = {
            type: types.SET_SELECTION,
            payload: { id: 7, amount: 544 }
        }

        expect(reducer(setSelectionStateInvoice, action))
        .toEqual({
            ...initialState,
            balance: 656,
            data: mockSetSelectionInvoice,
        })
    })

    it('should handle SET_SELECTION for invoice item', () => {
        const setSelectionStateInvoiceItem = {
            ...initialState,
            balance: 1200,
            data: JSON.parse(JSON.stringify(normalizedInvoiceData)),
        }

        const action = {
            type: types.SET_SELECTION,
            payload: { id: 10017, amount: 544 }
        }

        expect(reducer(setSelectionStateInvoiceItem, action))
        .toEqual({
            ...initialState,
            balance: 656,
            data: mockSetSelectionInvoiceItem,
        })
    })

    it('should handle UPDATE_SELECTION for invoice item to small side', () => {
        const initialState = {
            balance: 1200,
            data: JSON.parse(JSON.stringify(mockUpdateSelectionInvoiceItemBefore)),
        }

        const newData = {id: 10017, amount: 10}
        const oldData = {
            id: 10017,
            content: "Ozl7@30NW|zb8.M-^0xWjZW\:[50kJPY{^cLU2-91fg_.wHbbVJjrz^-KFOrgsARBz}ta\rxATrhnlWMbTF",
            quantity: null,
            price: 633,
            reportId: 285168333,
            invoiceId: 7,
            requestSource: null,
            customerId: "000001",
            referenceNo: "qvz7Sw1tkS",
            oderedBy: null,
            reportType: "AN420S",
            reportTypeDescription: null,
            reportState: "NV",
            creationDate: "2019-11-14T08:52:56",
            reportCompletionDate: "2019-11-14T08:52:56",
            orderNo: null,
            priceGroup: "STAT",
            status: "COMPLETED",
            payments: 89,
            amount: 100,
            isSelected: true,
        }
        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1290,
            data: mockUpdateSelectionInvoiceItemSmallAfter,
        })
    })

    it('should handle UPDATE_SELECTION for invoice item to big side', () => {
        const initialState = {
            balance: 1200,
            data: JSON.parse(JSON.stringify(mockUpdateSelectionInvoiceItemBefore)),
        }

        const newData = {id: 10017, amount: 150}
        const oldData = {
            id: 10017,
            price: 633,
            reportId: 285168333,
            invoiceId: 7,
            payments: 89,
            amount: 100,
            isSelected: true,
        }
        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1150,
            data: mockUpdateSelectionInvoiceItemBigAfter,
        })
    })

    it('should handle UPDATE_SELECTION for invoice item to 0', () => {
        const initialState = {
            balance: 1200,
            data: [...mockUpdateSelectionInvoiceItemBefore],
        }

        const newData = {id: 10017, amount: 0}
        const oldData = {
            id: 10017,
            price: 633,
            reportId: 285168333,
            invoiceId: 7,
            payments: 89,
            amount: 100,
            isSelected: true,
        }
        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1300,
            data: mockUpdateSelectionInvoiceItemZero,
        })
    })

    it('should handle UPDATE_SELECTION for invoice to small side', () => {
        const initialState = {
            balance: 1200,
            data: [...mockUpdateSelectionInvoiceBefore],
        }

        const newData = {id: 9, amount: 50}
        const oldData = {
            id: 9,
            items: [{id: 10019}, {id: 10020}, {id: 10021}, {id: 10022}, {id: 10023}, {id: 10024}],
            amount: 400,
            price: 2204,
            isSelected: true,
            payments: 210,
        };

        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1550,
            data: mockUpdateSelectionInvoiceSmallAfter,
        })
    })

    it('should handle UPDATE_SELECTION for invoice to big side', () => {
        const initialState = {
            balance: 1200,
            data: [...mockUpdateSelectionInvoiceBefore],
        }

        const newData = {id: 9, amount: 500}
        const oldData = {
            id: 9,
            items: [{id: 10019}, {id: 10020}, {id: 10021}, {id: 10022}, {id: 10023}, {id: 10024}],
            amount: 400,
            price: 2204,
            isSelected: true,
            payments: 210,
        };

        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1100,
            data: mockUpdateSelectionInvoiceBigAfter,
        })
    })

    it('should handle UPDATE_SELECTION for invoice to 0', () => {
        const initialState = {
            balance: 1200,
            data: [...mockUpdateSelectionInvoiceBefore],
        }

        const newData = {id: 9, amount: 0}
        const oldData = {
            id: 9,
            items: [{id: 10019}, {id: 10020}, {id: 10021}, {id: 10022}, {id: 10023}, {id: 10024}],
            amount: 400,
            price: 2204,
            isSelected: true,
            payments: 210,
        };

        const action = {
            type: types.UPDATE_SELECTION,
            payload: { newData, oldData }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 1600,
            data: mockUpdateSelectionInvoiceZeroAfter,
        })
    })

    it('should handle DISTRIB_PAYMENT and set balance equal 0', () => {
        let testAmount = 1200;

        const initialState = {
            balance: testAmount,
            data: [...mockForDistribDataBefore],
        }

        const action = {
            type: types.DISTRIB_PAYMENT,
            payload: { value: testAmount }
        }

        expect(reducer(initialState, action))
        .toEqual({
            balance: 0,
            data: mockForDistribDataAfter,
        })
    })

    it('should handle RESET_SELECTION and set balance equal 158', () => {
        const initialState = {
            balance: 0,
            data: mockForResetSelectionBefore,
        }

        const action = {
            type: types.RESET_SELECTION,
            payload: { id: 9 }
        }

        expect(reducer(initialState, action))
            .toEqual({
                balance: 158,
                data: mockForResetSelectionAfter,
            })
    })

    it('should handle SET_BALANCE', () => {
        const handledData = [...normalizedInvoiceData];

        const initialState = {
            balance: 0,
            data: normalizedInvoiceData,
        }

        const action = {
            type: types.SET_BALANCE,
            payload: 500
        }

        handledData.forEach(item => {
            item.isSelected = false;
            item.amount = 0;
        })
        
        expect(reducer(initialState, action))
            .toEqual({
                balance: 500,
                data: handledData,
            })
    })
})