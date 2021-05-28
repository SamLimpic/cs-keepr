CREATE TABLE IF NOT EXISTS accounts (
  id VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updateddAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS vaults (
  id INT NOT NULL AUTO_INCREMENT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updateddAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  creatorId VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  isPrivate TINYINT NOT NULL,
  img VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS keeps (
  id INT NOT NULL AUTO_INCREMENT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updateddAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  creatorId VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  views INT NOT NULL,
  shares INT NOT NULL,
  keeps INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
);