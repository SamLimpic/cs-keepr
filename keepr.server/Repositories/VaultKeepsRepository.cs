using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }



        public VaultKeepDTO GetById(int id)
        {
            string sql = @"
                SELECT 
                vk.*
                FROM vault_keeps vk
                JOIN accounts a ON vk.creatorId = a.id
                WHERE vk.id = @id
                ";
            return _db.Query<VaultKeepDTO>(sql, new { id }).FirstOrDefault();
        }



        public IEnumerable<VaultKeepView> GetVaultKeeps(int id)
        {
            string sql = @"
                SELECT
                    k.*,
                    v.name as vault,
                    v.id as vaultKeepId,
                    vk.vaultId,
                    vk.keepId
                FROM 
                    vault_keeps vk
                    JOIN vaults v ON v.id = vk.vaultId
                    JOIN keeps k ON k.id = vk.keepId
                    JOIN accounts a ON k.creatorId = a.id
                WHERE vaultId = @id
                ";
            return _db.Query<VaultKeepView, Account, VaultKeepView>(sql, (vaultKeepView, account) =>
           {
               vaultKeepView.Creator = account;
               return vaultKeepView;
           }
           , new { id }, splitOn: "keepId");
        }



        public VaultKeepDTO Create(VaultKeepDTO body)
        {
            string sql = @"
                INSERT INTO vault_keeps
                (creatorId, VaultId, KeepId)
                VALUES
                (@CreatorId, @VaultId, @KeepId);
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }



        public VaultKeepDTO Update(VaultKeepDTO edit)
        {
            string sql = @"
            UPDATE vault_keeps
            SET
                vaultId = @VaultId,
                keepId = @KeepId
            WHERE id = @Id";
            _db.Execute(sql, edit);
            return edit;
        }



        public void Delete(int id)
        {
            string sql = "DELETE FROM vault_keeps WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}