import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// export interface tableData {
//   id: number
//   name: string
//   email: string
//   phone: string
// }


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _http: HttpClient) { }

  base_url_php = "http://localhost/Test%20Projects/PHP_SECOND_API/customers/read.php";
  base_url_jsonPlaceholder = "https://jsonplaceholder.typicode.com/posts";

  getData() {
    return this._http.get<any>(this.base_url_php);
  }

  getJsonData() {
    return this._http.get<any>(this.base_url_jsonPlaceholder);
  }
}
