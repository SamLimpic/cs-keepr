using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class KeepsRepository : IRepository<Keep>
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }



        public IEnumerable<Keep> GetAll()
        {
            string sql = @"
                SELECT
                k.*,
                a.*
                FROM keeps k
                JOIN accounts a ON k.creatorId = a.id
                ";
            return _db.Query<Keep, Account, Keep>(sql, (keep, account) =>
            {
                keep.Creator = account;
                return keep;
            }, splitOn: "id");
        }


        public Keep GetById(int id)
        {
            string sql = @"
                SELECT 
                k.*,
                a.*
                FROM keeps k
                JOIN accounts a ON k.creatorId = a.id
                WHERE k.id = @id
                ";
            return _db.Query<Keep, Account, Keep>(sql, (keep, account) =>
            {
                keep.Creator = account;
                return keep;
            }
            , new { id }, splitOn: "id").FirstOrDefault();
        }



        internal IEnumerable<Keep> GetKeepsByProfileId(string id)
        {
            string sql = @"
                SELECT 
                k.*,
                a.* 
                FROM keeps k
                JOIN accounts a ON k.creatorId = a.id
                WHERE
                k.creatorId = @id
                ";
            return _db.Query<Keep, Account, Keep>(sql, (keep, account) =>
            {
                keep.Creator = account;
                return keep;
            }
            , new { id }, splitOn: "id");
        }


        public Keep Create(Keep body)
        {
            string sql = @"
                INSERT INTO keeps
                (creatorId, name, description, img, views, shares, keeps)
                VALUES
                (@CreatorId, @Name, @Description, @Img, @Views, @Shares, @Keeps);
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }



        public Keep Update(Keep edit)
        {
            string sql = @"
            UPDATE keeps
            SET
                name = @Name,
                description = @Description,
                img = @Img
            WHERE id = @Id
            ";
            _db.Execute(sql, edit);
            return edit;
        }



        internal Keep UpdateCount(Keep keep)
        {
            string sql = @"
            UPDATE keeps
            SET
                views = @Views,
                shares = @Shares,
                keeps = @Keeps
            WHERE id = @Id
            ";
            _db.Execute(sql, keep);
            return keep;
        }



        public void Delete(int id)
        {
            string sql = "DELETE FROM keeps WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}