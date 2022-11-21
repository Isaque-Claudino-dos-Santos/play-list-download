from pytube import YouTube
from pytube import Playlist
import os
import sys


link = sys.argv[0]
pathLocalStorage = './music'
list = Playlist(link)


for videos in list.videos:
    stream = videos.streams
    stream.filter(only_audio=True)
    stream.get_audio_only().download(output_path=pathLocalStorage)


for file in os.scandir(pathLocalStorage):
    os.rename(file.path, pathLocalStorage + file.name.replace(
        '.mp4', '.mp3'))
