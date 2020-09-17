dotnet ef dbcontext scaffold "Server=.\SQLEXPRESS;Database=Raul;Integrated Security=SSPI;" Microsoft.EntityFrameworkCore.SqlServer -c RaulDbContext -f -o Models\Db

pause