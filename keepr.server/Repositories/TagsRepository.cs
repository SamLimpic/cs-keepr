using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class TagsRepository
    {
        private readonly IDbConnection _db;

        public TagsRepository(IDbConnection db)
        {
            _db = db;
        }



        public IEnumerable<Tag> GetAll()
        {
            string sql = @"
                SELECT
                t.*
                FROM tags t
                ";
            return _db.Query<Tag>(sql);
        }



        public Tag GetById(int id)
        {
            string sql = @"
                SELECT 
                t.*
                FROM tags t
                WHERE t.id = @id
                ";
            return _db.Query<Tag>(sql, new { id }).FirstOrDefault();
        }


        public Tag Create(Tag body)
        {
            string sql = @"
                INSERT INTO tags
                (name)
                VALUES
                (@Name);
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }
    }
}