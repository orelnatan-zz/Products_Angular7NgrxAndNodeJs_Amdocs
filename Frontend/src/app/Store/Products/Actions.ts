import { Action } from '@ngrx/store';
import { Product } from '../../Shop/Models/Product.model';
import { Update as UpdateModel } from '../../Shop/Models/Update.model';

export enum ActionTypes {
	LOAD = '[PRODUCTS] Load',
	REJECTED = '[PRODUCTS] Rejected', 
    READY = '[PRODUCTS] Ready',
    VIEW = '[PRODUCTS] View',
    TYPE = '[PRODUCTS] Type',
    SORT = '[PRODUCTS] Sort',
    FILTER = '[PRODUCTS] Filter',
    DELETE = '[PRODUCTS] Delete', 
    UPDATE = '[PRODUCTS] Update',
    REFRESH = '[PRODUCTS] Refresh'
}

export class Load implements Action {
	readonly type = ActionTypes.LOAD;

	constructor(public payload: {
        imdbID?: string
    }){}
}

export class Rejected implements Action {
    readonly type = ActionTypes.REJECTED;

    constructor(){}
}

export class Ready implements Action {
    readonly type = ActionTypes.READY;

    constructor(public payload: {
        products: Array<Product>,
    }){}
}

export class Type implements Action {
    readonly type = ActionTypes.TYPE;

    constructor(public payload: {
		type: string
    }){}
}

export class Sort implements Action {
    readonly type = ActionTypes.SORT;

    constructor(public payload: {
		sort: string
    }){}
}

export class Filter implements Action {
    readonly type = ActionTypes.FILTER;

    constructor(public payload: {
		text: string
    }){}
}

export class Delete implements Action {
    readonly type = ActionTypes.DELETE;

    constructor(public payload: {
		imdbID: string
    }){}
}

export class View implements Action {
    readonly type = ActionTypes.VIEW;

    constructor(public payload: {
		mode: string
    }){}
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: {
		product: Product
    }){}
}

export class Refresh implements Action {
    readonly type = ActionTypes.REFRESH;

    constructor(){}
}

export type Actions = Load | Rejected | Ready | Type | Sort | Filter | Delete | View | Update | Refresh;
					