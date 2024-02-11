import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: any[];
  newMessage: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.chatService.getMessages().subscribe(messages => this.messages = messages);
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      const message = { text: this.newMessage, sender: 'User' };
      this.chatService.addMessage(message).subscribe(() => {
        this.getMessages(); // Refresh messages after sending
        this.newMessage = '';
      });
    }
  }
}
