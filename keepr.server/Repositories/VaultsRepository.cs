using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.server.Models;
using keepr.server.Interfaces;

namespace keepr.server.Repositories
{
    public class VaultsRepository : IRepository<Vault>
    {
        private readonly IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }



        public IEnumerable<Vault> GetAll()
        {
            string sql = @"
                SELECT
                v.*,
                a.*
                FROM vaults v
                JOIN accounts a ON v.creatorId = a.id
                WHERE v.isPrivate = 0
                ";
            return _db.Query<Vault, Account, Vault>(sql, (vault, account) =>
            {
                vault.Creator = account;
                return vault;
            }, splitOn: "id");
        }



        public Vault GetById(int id)
        {
            string sql = @"
                SELECT 
                v.*,
                a.*
                FROM vaults v
                JOIN accounts a ON v.creatorId = a.id
                WHERE v.id = @id AND v.isPrivate = 0
                ";
            return _db.Query<Vault, Account, Vault>(sql, (vault, account) =>
            {
                vault.Creator = account;
                return vault;
            }
            , new { id }, splitOn: "id").FirstOrDefault();
        }

        internal IEnumerable<Vault> GetVaultsByProfileId(string id)
        {
            string sql = @"
                SELECT 
                v.*,
                a.* 
                FROM vaults v
                JOIN accounts a ON v.creatorId = a.id
                WHERE
                v.creatorId = @id AND v.isPrivate = 0
                ";
            return _db.Query<Vault, Account, Vault>(sql, (vault, account) =>
            {
                vault.Creator = account;
                return vault;
            }
            , new { id }, splitOn: "id");
        }


        internal IEnumerable<Vault> GetMyVaults(string id)
        {
            string sql = @"
                SELECT 
                v.*,
                a.* 
                FROM vaults v
                JOIN accounts a ON v.creatorId = a.id
                WHERE
                v.creatorId = @id
                ";
            return _db.Query<Vault, Account, Vault>(sql, (vault, account) =>
            {
                vault.Creator = account;
                return vault;
            }
            , new { id }, splitOn: "id");
        }

        public Vault Create(Vault body)
        {
            string sql = @"
                INSERT INTO vaults
                (creatorId, name, description, isPrivate, img)
                VALUES
                (@CreatorId, @Name, @Description, @IsPrivate, @Img);
                SELECT LAST_INSERT_ID()
                ";
            body.Id = _db.ExecuteScalar<int>(sql, body);
            return body;
        }



        public Vault Update(Vault edit)
        {
            string sql = @"
            UPDATE vaults
            SET
                name = @Name,
                description = @Description,
                isPrivate = @IsPrivate,
                img = @Img
            WHERE id = @Id
            ";
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