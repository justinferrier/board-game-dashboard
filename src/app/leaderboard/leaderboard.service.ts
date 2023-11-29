import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private leaderboardUrl = 'api/leaderboard'

  constructor(private http: HttpClient) { }

  getLeaderboard(gameId: string): Observable<any[]> {
    const url = `${this.leaderboardUrl}/${gameId}`;
    return this.http.get<any[]>(url);
  }

  updateLeaderboard(gameId: string, userId: string, newScore: number): Observable<any> {
    const url = `${this.leaderboardUrl}/${gameId}`
    const data = { userId, score: newScore}
    return this.http.post<any>(url, data)
  }
}
