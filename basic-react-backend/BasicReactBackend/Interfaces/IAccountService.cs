using System.Collections.Generic;

namespace BasicReactBackend.Interfaces 
{
    public interface IAccountService 
    {
        public void Create(string username, string password);
        public List<string> GetUsers();
    }
}