IMD3901
Assignment 3
Simone Cormier

Overview of what you did:
For Assignment 3, I decided to make a game similar to the game 'Simon', the color game. For this game, one player must be in the 3D mode, and the other in 2D mode. The player in 3D mode presses 'Start Game' and must press 4 colors. Then the screen is disabled, and it is the 2D players turn. The 2D player must repeat the four same colors as the other player inputted. If they get it right, they get +10 points. If they get it wrong, they get -10 points. It is then the same process but with the 2D player going first. The competitive aspect of the game is that the first player to 50 points wins. The collaborative aspect is that the players are times, and if they dont work together to finish on time, they both lose. 

What was challenging:
What was challenging for this assignment was firstly figuring out how to use socket.io, it was very confising at first. I had to figure out what socket.emit and socket.on did, and it got very confusing throughout the procesess. My other challenge was going from player to player in turns successfully, and also the score system. Since the players went twice each time, I had to find a way to end their turn and keep their screen on. I also got some weird errors and loops with my score system, and the score would go up by 20 instead of 10 for the 3D player. 

What went well:
Throughout working on this assignment I slowly overcame my challenges. By just using and researching socket.io, I slowly figured out how to use it and by the ned of the assignment knew exactly how it worked, and started making my own socket.on that we did not make in class and getting it to work. By getting familiar with socket.io, this also helped me with my challenge of going from one turn to another. I ended up figuring out to use a socket.io for the next turn and that ended up working. I also fixed my score system by figuring out that socket.on loops multiple times, so I had to seperate my sockets(instead of having them all together. This ended up successfulyl working, and I am very happy with the result of my project, it works exactly how I wanted it to and I am glad it works on mobile and a computer, and I used 2D and 3D which was a fun challenge.  

URL to Git Repository:
https://github.com/SimoneCormier1/CormierSimone_IMD3901_A3

References:
sounds taken from:
https://www.youtube.com/watch?v=1Yqj76Q4jJ4