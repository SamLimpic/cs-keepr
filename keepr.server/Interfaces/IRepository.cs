using System.Collections.Generic;

namespace keepr.server.Interfaces
{
    public interface IRepository<T>
    // NOTE Generic Repository template for all repositories EXCEPT Auth0
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        T Create(T data);
        T Update(T data);
        void Delete(int id);
    }
}