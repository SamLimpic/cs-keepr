using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class KeepTagsRepository
    {
        private readonly IDbConnection _db;

        public KeepTagsRepository(IDbConnection db)
        {
            _db = db;
        }



        public KeepTagDTO GetById(int id)
        {
            string sql = @"
                SELECT 
                kt.*
                FROM keep_tags kt
                WHERE kt.id = @id
                ";
            return _db.Query<KeepTagDTO>(sql, new { id }).FirstOrDefault();
        }



        public IEnumerable<Keep> GetKeepsByTag(int tagId)
        {
            string sql = @"
                SELECT
                    k.*,
                    kt.id as keepTagId,
                    kt.keepId,
                    kt.tagId,
                    a.*
                FROM 
                    keep_tags kt
                    JOIN keeps k ON k.id = kt.keepId
                    JOIN accounts a ON k.creatorId = a.id
                WHERE tagId = @tagId
                ";
            return _db.Query<Keep, Account, Keep>(sql, (keep, account) =>
           {
               keep.Creator = account;
               return keep;
           }
           , new { tagId }, splitOn: "id");
        }



        public IEnumerable<KeepTagView> GetKeepTags(int keepId)
        {
            string sql = @"
                SELECT
                    t.*,
                    kt.id as keepTagId,
                    kt.keepId,
                    kt.tagId
                FROM 
                    keep_tags kt
                    JOIN tags t ON t.id = kt.tagId
                WHERE keepId = @keepId
                ";
            return _db.Query<KeepTagView>(sql, new { keepId });
        }



        public KeepTagDTO Create(KeepTagDTO body)
        {
            string sql = @"
                INSERT INTO keep_tags
                (keepId, tagId)
                VALUES
                (@KeepId, @TagId);
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }
    }
}