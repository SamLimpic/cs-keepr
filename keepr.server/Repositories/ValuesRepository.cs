using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class ValuesRepository : IRepository<Value>
    {
        private readonly IDbConnection _db;

        public ValuesRepository(IDbConnection db)
        {
            _db = db;
        }



        public List<Value> GetAll()
        {
            string sql = @"
                SELECT
                v.*
                a.name,
                a.picture
                FROM values v
                JOIN accounts a ON v.creatorId = a.id
                ";
            return _db.Query<Value, Account, Value>(sql, (value, account) =>
            {
                value.Creator = account;
                return value;
            }, splitOn: "id").ToList();
        }



        public Value GetById(int id)
        {
            string sql = @"
                SELECT 
                v.*,
                a.name,
                a.picture 
                FROM values v
                JOIN accounts a ON v.creatorId = a.id
                WHERE v.id = @id
                ";
            return _db.Query<Value, Account, Value>(sql, (value, account) =>
            {
                value.Creator = account;
                return value;
            }
            , new { id }, splitOn: "id").FirstOrDefault();
        }



        public Value Create(Value data)
        {
            string sql = @"
                INSERT INTO values
                (creatorId, name)
                VALUES
                (@CreatorId, @Name)
                SELECT LAST_INSERT_ID()
                ";
            data.Id = _db.ExecuteScalar<int>(sql, data);
            return data;
        }



        public Value Update(Value edit)
        {
            string sql = @"
            UPDATE values
            SET
                name = @Name
            WHERE id = @Id";
            _db.Execute(sql, edit);
            return edit;
        }



        public void Delete(int id)
        {
            string sql = "DELETE FROM values WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}