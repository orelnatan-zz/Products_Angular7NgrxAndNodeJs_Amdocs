import { HttpClient, HttpParams, } from '@angular/common/http';
import { Injectable, }  from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of as observableOf } from 'rxjs';  
import { map, catchError, delay } from 'rxjs/operators';
import { throwError, } from 'rxjs';
import { Product } from '../Models/Product.model';
import { ProductsResponse } from '../Models/ProductsResponse.model';
import { Update } from '../Models/Update.model';

interface response {
    message: string,
    status: number
}

@Injectable()
export class Products {
    constructor(
		private httpClient: HttpClient
    ){}
    
    public getAllProducts(): Observable<Product[] | Error> {
		return this.httpClient.get(environment.apis.products.getAllProducts)
			.pipe(
				map((response: Array<Product>): Product[] => {
                    return response;    
				}), catchError((error) => {      
                    return throwError(error);  
				})
			)
    }

    public getProductById(imdbID: string): Observable<Product[] | Error> {
        let params: HttpParams = new HttpParams();
        params = params.append('imdbID', imdbID);

		return this.httpClient.get(environment.apis.products.getProductById, {
            params: params,
        }).pipe(
				map((response: Array<Product>): Product[] => {
                    return response;    
				}), catchError((error) => {      
                    return throwError(error);  
				})
			)
    }

    public deleteProductById(imdbID: string): Observable<number> {
        let params: HttpParams = new HttpParams();
        params = params.append('imdbID', imdbID);
        
        return this.httpClient.delete(environment.apis.products.deleteProductById, {
            params: params,
        }).pipe(
				map((response: response) => {
                    return response.status;       
				}), catchError((error) => {
					return throwError(error);  
				})
			)
    }

    public updateProduct(product: Product): Observable<number> {  
        return this.httpClient.put(environment.apis.products.updateProduct, product).pipe(
				map((response: response) => {
                    return response.status;       
				}), catchError((error) => {
					return throwError(error);  
				})
			)
    }
}
