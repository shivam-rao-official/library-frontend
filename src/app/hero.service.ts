import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  adminEmailToken: String = '';
  private baseUrl = 'http://localhost:8080/api/v1/lbs/staff';
  private userBaseUrl = 'http://localhost:8080/api/v1/lbs/user';
  // private baseUrl = 'http://localhost:9090/api/v1/lbs/staff';
  // private userBaseUrl = 'http://localhost:9090/api/v1/lbs/user';
  constructor(private http: HttpClient) {}
  register(val: any, email: any) {
    console.log(val);
    return this.http.post(
      `${this.baseUrl}/create-user?staff_email=${email}`,
      val
    );
  }
  login(email: String, pswd: String) {
    return this.http.post(
      `${this.baseUrl}/login?email=${email}&pswd=${pswd}`,
      ''
    );
  }
  userlist(val: any) {
    return this.http.post(
      'http://localhost/libraryjson/project_min.php?tag=userlist',
      val
    );
  }

  issueReturnReportAll(email: any) {
    return this.http.get(`${this.userBaseUrl}/report?email=${email}&filter=`);
  }
  issueReturnReportByFilter(filter: any, email: any) {
    return this.http.get(
      `${this.userBaseUrl}/report?email=test.user@gmail.com&filter=${filter}`
    );
  }

  dropdown() {
    return this.http.get(`${this.baseUrl}/showAllBooks`);
  }
  view() {
    return this.http.get(`${this.baseUrl}/showAllBooks`);
  }
  viewByFilter(filter: String) {
    return this.http.get(`${this.baseUrl}/showBooks?filter=${filter}`);
  }

  viewBooksByDept(dept: String) {
    return this.http.get(`${this.baseUrl}/showBooks?filter=''&dept=${dept}`);
  }

  viewBooksByFilterAndDept() {}

  AddBookview(val: any) {
    console.log(val);
    console.log(this.adminEmailToken);

    return this.http.post(
      `${this.baseUrl}/add-book?staff_email=${this.adminEmailToken}`,
      val
    );
  }
  editBookview(val: any) {
    console.log(val);
    return this.http.post(
      `${this.baseUrl}/update?staff_email=${this.adminEmailToken}`,
      val
    );
  }
  deleteBookview(val: any) {
    console.log(val);
    return this.http.delete(
      `${this.baseUrl}/delete-books?email=${this.adminEmailToken}`,
      val
    );
  }

  totalbooks() {
    return this.http.get(``);
  }
  // availablebooks() {
  //   return this.http.get(
  //     'http://localhost/libraryjson/project_min.php?tag=availablebooks'
  //   );
  // }
  // unavailablebooks() {
  //   return this.http.get(
  //     'http://localhost/libraryjson/project_min.php?tag=unavailablebooks'
  //   );
  // }
  viewUserByFilter(val: any) {
    return this.http.get(`${this.baseUrl}/showUsers?filter=${val}`);
  }

  bookSummary() {
    return this.http.get(`${this.baseUrl}/summary`);
  }

  userSummary() {
    return this.http.get(`${this.baseUrl}/userSummary`);
  }

  issueBook(val: any, staffEmail: any) {
    return this.http.post(
      `${this.baseUrl}/issue?isbn=${val.isbn}&user_email=${val.userEmail}&staff_email=${staffEmail}`,
      ''
    );
  }
  returnBook(val: any, staffEmail: any) {
    return this.http.post(
      `${this.baseUrl}/return?isbn=${val.isbn}&user_email=${val.userEmail}&staff_email=${staffEmail}`,
      ''
    );
  }
  searchBook(val: any) {
    return this.http.get(`${this.baseUrl}/byBookName?key=${val}`);
  }
}
