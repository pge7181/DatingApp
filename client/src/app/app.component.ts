import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Ensure HttpClientModule is imported
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HttpClientModule, CommonModule ], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ] // Corrected typo: styleUrl -> styleUrls
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5267/api/users').subscribe(
      (response: any) => {
        console.log(response);
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
