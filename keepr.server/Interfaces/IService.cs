using System.Collections.Generic;

namespace keepr.server.Interfaces
{
    public interface IService<T>
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        T Create(T data);
        T Update(T data, string creatorId);
        void Delete(int id, string creatorId);
    }
}