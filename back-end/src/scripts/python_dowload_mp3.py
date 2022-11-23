from pytube import YouTube
from pytube import Playlist
import os
import sys
import zipfile

link = sys.argv[1]

pathLocalStorage = './back-end/src/temp/music'
list = Playlist(link)


# Dowload of the musics
for videos in list.videos:
    stream = videos.streams
    stream.filter(only_audio=True)
    stream.get_audio_only().download(output_path=pathLocalStorage)

# MOD extencion of .mp4 to .mp3
for file in os.scandir(pathLocalStorage):
    os.rename(file.path, pathLocalStorage + '/' + file.name.replace(
        '.mp4', '.mp3'))


# Compact muscis
z = zipfile.ZipFile('./src/temp/music.zip', 'w', zipfile.ZIP_DEFLATED)

for file in os.scandir(pathLocalStorage):
    z.write(file)

z.close()

# Remove Musics
for file in os.scandir(pathLocalStorage):
    os.remove(file.path)
