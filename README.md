<h1 id="title" align="center">Welcome to the Tournament room 👋</h1>

<h4 align="center">🚧 possible bugs... 🚧</h4>

- 🤔 [How To Use](#how-to-use)
- 📝 [Commands](#commands)

---

<h2 id="how-to-use">🤔 How To Use</h2>

<h3 id="databaseconfg">🔧 Database configuration</h3>

#### Download and installation
I am using the following commands:
```sh
wget http://repo.mysql.com/mysql-apt-config_0.8.24-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb
sudo apt update
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
```
My table looks like this:
```sql
CREATE TABLE IF NOT EXISTS users (
'id' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
auth text not null,
name text not null,
role int not null
)
```
```express.js``` is used to process requests

```haxbot.js``` starts the server

[Back To The Top](#title)


---


<h2 id="commands">📝 Commands</h2>

### Requires role 'Player'
```!help```

The command shows all available commands.
### Requires role 'Admin'
```!admin (!adm)```

The command reverts the admin.

```!switch (!sw)```

The command switching the teams.
### Requires role 'Owner'
```!add [publicID*] [name]```

This command adds a player to the server.

publicID* can be obtained at [haxball.com/playerauth](https://www.haxball.com/playerauth)

```!remove (!rm) [publicID]```

This command removes a player from the server.

```!rename (!rn) [publicID] [new name]```

This command renames the player.

```!role [publicID] [role*(int)]```

This command changes the role of a player.

#### Roles*:
- 0 - PLAYER
- 1 - ADMIN
- 2 - OWNER

[Back To The Top](#title)