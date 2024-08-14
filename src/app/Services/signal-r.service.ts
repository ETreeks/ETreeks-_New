// import { Injectable } from '@angular/core';
// import * as signalR from '@microsoft/signalr';

// @Injectable({
//   providedIn: 'root'
// })
// export class SignalRService {
//   private hubConnection: signalR.HubConnection;
//   public notifications: string[] = [];

//   constructor() {
//     this.hubConnection = new signalR.HubConnectionBuilder()
//       .withUrl('https://localhost:7281/notificationHub', {
//         skipNegotiation: true,
//         transport: signalR.HttpTransportType.WebSockets
//       })
//       .build();

//     this.hubConnection.keepAliveIntervalInMilliseconds = 10000;
//     this.hubConnection.serverTimeoutInMilliseconds = 30000;
//     this.startConnection();
//     this.addNotificationListener();
//   }

//   private startConnection() {
//     this.hubConnection
//       .start()
//       .then(() => {
//         console.log('Connection started');
//         this.registerUser();
//       })
//       .catch(err => {
//         console.log('Error while starting connection: ' + err);
//         setTimeout(() => this.startConnection(), 5000); 
//       });

//     this.hubConnection.onclose(() => {
//       console.log('Connection closed. Attempting to reconnect...');
//       setTimeout(() => this.startConnection(), 5000); 
//     });
//   }

//   private registerUser() {
//     const userId = localStorage.getItem('Id');
//     if (userId) {
//       this.hubConnection.invoke('RegisterUser', userId)
//         .then(() => console.log(`User ${userId} registered successfully.`))
//         .catch(err => console.error('Error registering user: ' + err));
//     }
//   }

//   private addNotificationListener() {
//     this.hubConnection.on('ReceiveNotification', (message: string) => {
//       this.notifications.push(message);
//       console.log(`Notification received: ${message}`);
//     });
//   }

//   public sendNotification(userId: string, message: string) {
//     this.hubConnection
//       .invoke('SendNotificationToUser', userId, message)
//       .catch(err => console.error('Error sending notification: ' + err));
//   }
// }
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  public notifications: string[] = [];

  constructor(private snackBar: MatSnackBar) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7281/notificationHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection.keepAliveIntervalInMilliseconds = 10000;
    this.hubConnection.serverTimeoutInMilliseconds = 30000;
    this.startConnection();
    this.addNotificationListener();
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.registerUser();
      })
      .catch(err => {
        console.log('Error while starting connection: ' + err);
        setTimeout(() => this.startConnection(), 5000); 
      });

    this.hubConnection.onclose(() => {
      console.log('Connection closed. Attempting to reconnect...');
      setTimeout(() => this.startConnection(), 5000); 
    });
  }

  private registerUser() {
    const userId = localStorage.getItem('Id');
    if (userId) {
      this.hubConnection.invoke('RegisterUser', userId)
        .then(() => console.log(`User ${userId} registered successfully.`))
        .catch(err => console.error('Error registering user: ' + err));
    }
  }

  private addNotificationListener() {
    this.hubConnection.on('ReceiveNotification', (message: string) => {
      this.notifications.push(message);
      // this.snackBar.open(`Notification: ${message}`, 'Close', {
      //   duration: 8000,
      // });
      this.snackBar.open(`Notification: ${message}`, 'Close', {
        duration: 8000,
        verticalPosition: 'top', 
        horizontalPosition: 'center' 
      });
      console.log(`Notification received: ${message}`);
    });
  }

  public sendNotification(userId: string, message: string) {
    this.hubConnection
      .invoke('SendNotificationToUser', userId, message)
      .catch(err => console.error('Error sending notification: ' + err));
  }
}
