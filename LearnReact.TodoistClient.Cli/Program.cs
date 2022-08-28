using LearnReact.TodoistClient.Cli;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHttpClient<TodoistService>(client =>
        {
            client.BaseAddress = new Uri("https://api.todoist.com/rest/v1/");
        });
    })
    .Build();

await host.RunAsync();