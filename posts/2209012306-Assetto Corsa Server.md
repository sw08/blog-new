# I made my AC Server <br>

## Prologue <br>
I made my own ac multiplayer server.<br>
Some might think, "Though there's a site called SideBySide, why don't you use it?".
The reason is that SideBySide is a kinda annoying.
It's full of bugs - not being able to use advanced setting no matter if you inputted personal information, which is said to be necessary to use them, not being detected in game, being slow, etc.
As I'm a student, I can use Azure For Student.
I made the server with this.
<br>
<br>
## Guide <br>
It's so easy to make your own server, so I'm gonna make a guide in this post.
<br>
<br>
### Installation <br>
What you must install are three - lib32gcc1, steamcmd, ac server manager.
First, you can install lib32gcc1 and steamcmd using apt.
If you can't install steamcmd using apt, try manual installation. In this case, you must execute command whose "steamcmd" is replaced to "./steamcmd.sh".
Second, you have to install AC Dedicated Server - I'll call it ACDS.
Run steamcmd with option `+@sSteamCmdForcePlatformType windows`, which made steam able to install AC which can be installed on only Windows.
Login with your steam account, and install ACDS by app_update command.
<br>
<br>
Script:
```
>>> sudo apt install lib32gcc1
>>> sudo apt install steamcmd
>>> steamcmd +@sSteamCmdForcePlatformType windows
>>> login <your steam id>
(account registeration when you try first)
>>> app_update 302550
```
<br>
<br>
### Configuration <br>
You can config server by editing `entry_list.ini` and `server_cfg.ini` in `steamapps/common/Assetto Corsa Dedicated Server/cfg/`.
But I recommend you to make them on your PC and copy the files.
<br>
<br>
### Running Server <br>
Just typing the command below, you can run the server.<br>
Script:
```
>>> .acServer start
```
(The file is in `steamapps/common/Assetto Corsa Dedicated Server/`)
<br>
<br>
### Finishment <br>
Congratulations! Now you have your own AC server!
If it doesn't work, try opening port 8081/9600!
If you want to keep it open, consider using hosting services like Oracle, Axure, GCP, AWS, etc.
<br>
<br>
## Epilogue <br>
In fact, it wasn't very difficult - while I searched for several days.
I'm a little bit worried because of my VM's spec - I selected B1s.
But now, I'm just gonna enjoy AC :)
<br>

Bye!
