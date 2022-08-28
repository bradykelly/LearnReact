namespace LearnReact.TodoistClient.Cli;

public class TodoistService
{
    private readonly IHttpClientFactory _clientFactory;
    private readonly IConfiguration _configuration;
    
    public TodoistService(IHttpClientFactory clientFactory, IConfiguration configuration)
    {
        _clientFactory = clientFactory;
        _configuration = configuration;
    }
}