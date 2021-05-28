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
                vk.*,
                FROM vaultKeepss vk
                JOIN accounts a ON vk.creatorId = a.id
                WHERE vk.id = @id
                ";
            return _db.Query<VaultKeepDTO>(sql, new { id }).FirstOrDefault();
        }



        public List<VaultKeepView> GetVaultKeeps(int id)
        {
            string sql = @"
                SELECT
                k*,
                v.name as vaultName,
                vk.id,
                vk.vaultId,
                vk.keepId,
                a.name,
                a.picture
                FROM vault_keeps vk
                JOIN vaults v ON v.id = vk.vaultId
                JOIN keeps k ON k.id = vk.keepId
                JOIN accounts a ON v.creatorId = a.id
                WHERE vk.vaultId = @id
                ";
            return _db.Query<VaultKeepView>(sql, new { id }).ToList();
        }



        public VaultKeepDTO Create(VaultKeepDTO body)
        {
            string sql = @"
                INSERT INTO vaultKeeps
                (creatorId, VaultId, KeepId)
                VALUES
                (@CreatorId, @VaultId, @KeepId)
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }



        public VaultKeepDTO Update(VaultKeepDTO edit)
        {
            string sql = @"
            UPDATE vaultKeeps
            SET
                vaultId = @VaultId,
                keepId = @KeepId
            WHERE id = @Id";
            _db.Execute(sql, edit);
            return edit;
        }



        public void Delete(int id)
        {
            string sql = "DELETE FROM vaults WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}