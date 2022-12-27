import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PagginationData } from '../models/paggination-data';

@Injectable({ providedIn: 'root' })
export class PagginationService {
    private pagginationData$ = new BehaviorSubject<PagginationData>({page: 0, totalPages: 0, totalCount: 0});
    pagginationData = this.pagginationData$.asObservable();
  
    setPagginationData(data: PagginationData) {
        this.pagginationData$.next(data);
    }
}