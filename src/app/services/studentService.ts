import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../dtos/student';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/students';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) { }
  getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(MAIN_URL + URL);
  }

  // deleteStudent(id: string): Observable<boolean> {
  //   return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  // }

  saveStudent(student: Student): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, student);
  }

  // getStudents(): Observable<number>{
  //   return this.http.get<number>(MAIN_URL + URL + "/count");
  // }

  // searchCustomer(id: String): Observable<Student> {
  //   return this.http.get<Student>(MAIN_URL + URL + '/' + id);
  // }

}
