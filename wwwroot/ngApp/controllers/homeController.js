class HomeController {
    constructor() {
        this.messages=[];
        this.message="";
        this.connection = new signalR.HubConnection('/chat');
        this.connection.start().then(() => this.connection.invoke('send', 'Hello'));
        this.connection.on('send', data => {
                    this.messages.push(data);
                });
        
       
    }
    sendMessage() {
        this.connection.invoke('send', this.message);
    }
}