using System.Collections.Generic;
using System.Linq;
using BasicReactBackend.Interfaces;

namespace BasicReactBackend.Services {
    internal sealed class AccountService : IAccountService
    {
        private readonly Dictionary<string, string> accounts = new ();
        public void Create(string username, string password)
        {
            if (this.accounts.ContainsKey(username)) {
                return;
            }
            this.accounts.Add(username, password);
        }

        public List<string> GetUsers()
        {
            return this.accounts.Keys.ToList();
        }
    }
}