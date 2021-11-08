using System.Text.Json.Serialization;

namespace BasicReactBackend.Models 
{
    public sealed record RegisterForm 
    {
        [JsonPropertyName("login")] public string Login { get; init; }
        [JsonPropertyName("password")] public string Password { get; init; }
    }
}