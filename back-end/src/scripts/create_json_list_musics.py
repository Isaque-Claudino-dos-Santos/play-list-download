from pytube import Playlist
import sys

link = sys.argv[0]
list = Playlist(link)

f = open('currentMusic.json', 'w')


f.write("{\n\"musics\": [")

for music in list.videos:
    f.write("\n\"" + music.title + "\",")

f.write("]}")


f.close()
