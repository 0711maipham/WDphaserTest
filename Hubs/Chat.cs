using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WanderDragon.Hubs
{
    public class Chat : Hub
    {
        public Task Send(string message)
        {
            return Clients.All.InvokeAsync("Send", message);
        }
    }
}