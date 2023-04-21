# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all

demo_user = User.create!(
    email: 'demouser@songflix.com',
    password: 'password'
)

require 'open-uri'

# -------- The Less I Know the Better - Tame Impala --------------------#

the_less_i_know_the_better = Video.create!(title: "The less I know the better", year: 2015, genre: "alternative", artist: "Tame Impala")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/the-less-i-know-the-better.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
the_less_i_know_the_better.music_video.attach(io: file, filename: 'the-less-i-know-the-better.jpg')

file_thumbnail_the_less_i_know_the_better = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/the-less-i-know-the-better-thumbnail.png')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
the_less_i_know_the_better.thumbnail.attach(io: file_thumbnail_the_less_i_know_the_better, filename: 'the-less-i-know-the-better-thumbnail.jpg')

# -------- Somebody told me - The Killers --------------------#

somebody_told_me = Video.create!(title: "Somebody Told Me", year: 2003, genre: "rock", artist: "The Killers")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/somebody-told-me.mp4')
somebody_told_me.music_video.attach(io: file, filename: 'somebody-told-me.jpg')

file_thumbnail_somebody_told_me = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/somebody-told-me-thumbnail.png')
somebody_told_me.thumbnail.attach(io: file_thumbnail_somebody_told_me, filename: 'somebody-told-me-thumbnail.png')

# -------- Use Somebody - Kings of Leon --------------------#

use_somebody = Video.create!(title: "Use Somebody", year: 2008, genre: "rock", artist: "Kings of Leon")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/use-somebody.mp4')
use_somebody.music_video.attach(io: file, filename: 'use-somebody.jpg')

file_thumbnail_use_somebody = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/use-somebody-thumbnail.png')
use_somebody.thumbnail.attach(io: file_thumbnail_use_somebody, filename: 'use-somebody-thumbnail.png')

# -------- Vertigo - U2 --------------------#

vertigo = Video.create!(title: "Vertigo", year: 2004, genre: "rock", artist: "U2")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/vertigo.mp4')
vertigo.music_video.attach(io: file, filename: 'vertigo.jpg')

file_thumbnail_vertigo = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/vertigo-thumbnail.png')
vertigo.thumbnail.attach(io: file_thumbnail_vertigo, filename: 'vertigo-thumbnail.png')

# -------- Say it ain't so - Weezer --------------------#

say_it_aint_so = Video.create!(title: "Say it ain't so", year: 1992, genre: "rock", artist: "Weezer")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/say-it-aint-so.mp4')
say_it_aint_so.music_video.attach(io: file, filename: 'say-it-aint-so.jpg')

file_thumbnail_say_it_aint_so = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/say-it-aint-so-thumbnail.png')
say_it_aint_so.thumbnail.attach(io: file_thumbnail_say_it_aint_so, filename: 'say-it-aint-so-thumbnail.png')

# -------- Starlight - Muse --------------------#

starlight = Video.create!(title: "Starlight", year: 2006, genre: "rock", artist: "Muse")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/starlight.mp4')
starlight.music_video.attach(io: file, filename: 'starlight.jpg')

file_thumbnail_starlight = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/starlight-thumbnail.png')
starlight.thumbnail.attach(io: file_thumbnail_starlight, filename: 'starlight-thumbnail.png')

# -------- Take Me Out - Franz Ferdinand --------------------#


take_me_out = Video.create!(title: "Take me Out", year: 2004, genre: "rock", artist: "Franz Ferdinand")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/take-me-out-franz.mp4')
take_me_out.music_video.attach(io: file, filename: 'take-me-out.jpg')

file_thumbnail_take_me_out = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/take-me-out-thumbnail.png')
take_me_out.thumbnail.attach(io: file_thumbnail_take_me_out, filename: 'take-me-out-thumbnail.png')

# -------- Dog days are over - Florence and the machine --------------------#

dog_days_are_over = Video.create!(title: "Dog Days Are Over", year: 2008, genre: "alternative", artist: "Florence and the Machine")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/dog-days-are-over.mp4')
dog_days_are_over.music_video.attach(io: file, filename: 'dog-days-are-over.jpg')

file_thumbnail_dog_days_are_over = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/dog-days-are-over-thumbnail.png')
dog_days_are_over.thumbnail.attach(io: file_thumbnail_dog_days_are_over, filename: 'dog-days-are-over-thumbnail.png')

# -------- Hard Times - Paramore --------------------#

hard_times = Video.create!(title: "Hard Times", year: 2017, genre: "alternative", artist: "Paramore")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/hard-times.mp4')
hard_times.music_video.attach(io: file, filename: 'hard-times.jpg')

file_thumbnail_hard_times = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/hard-times-thumbnail.png')
hard_times.thumbnail.attach(io: file_thumbnail_hard_times, filename: 'hard-times-thumbnail.png')

# -------- Pumped up kicks - Foster the People --------------------#

pumped_up_kicks = Video.create!(title: "Pumped up kicks", year: 2010, genre: "alternative", artist: "Foster the People")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/pumped-up-kicks.mp4')
pumped_up_kicks.music_video.attach(io: file, filename: 'pumped-up-kicks.jpg')

file_thumbnail_pumped_up_kicks = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/pumped-up-kicks-thumbnail.png')
pumped_up_kicks.thumbnail.attach(io: file_thumbnail_pumped_up_kicks, filename: 'pumped-up-kicks-thumbnail.png')

# -------- Riptide - Vance Joy --------------------#

riptide = Video.create!(title: "Riptide", year: 2013, genre: "alternative", artist: "Vance Joy")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/riptide.mp4')
riptide.music_video.attach(io: file, filename: 'riptide.jpg')

file_thumbnail_riptide = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/riptide-thumbnail.png')
riptide.thumbnail.attach(io: file_thumbnail_riptide, filename: 'riptide-thumbnail.png')

# -------- Little lion man - Mumford and sons --------------------#

little_lion_man = Video.create!(title: "Little Lion Man", year: 2009, genre: "alternative", artist: "Mumford and Sons")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/little-lion-man.mp4')
little_lion_man.music_video.attach(io: file, filename: 'little-lion-man.jpg')

file_thumbnail_little_lion_man = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/little-lion-man-thumbnail.png')
little_lion_man.thumbnail.attach(io: file_thumbnail_little_lion_man, filename: 'little-lion-man-thumbnail.png')


# -------- Lost in yesterday - Tame Impala --------------------#

lost_in_yesterday = Video.create!(title: "Lost in Yesterday", year: 2020, genre: "alternative", artist: "Tame Impala")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/lost-in-yesterday.mp4')
lost_in_yesterday.music_video.attach(io: file, filename: 'lost-in-yesterday.jpg')

file_thumbnail_lost_in_yesterday = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/lost-in-yesterday-thumbnail.png')
lost_in_yesterday.thumbnail.attach(io: file_thumbnail_lost_in_yesterday, filename: 'lost-in-yesterday-thumbnail.png')

# -------- Rolling in the deep - Adele --------------------#

rolling_in_the_deep = Video.create!(title: "Rolling in the Deep", year: 2010, genre: "pop", artist: "Adele")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/rolling-in-the-deep.mp4')
rolling_in_the_deep.music_video.attach(io: file, filename: 'rolling-in-the-deep.jpg')

file_thumbnail_rolling_in_the_deep = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/rolling-in-the-deep-thumbnail.png')
rolling_in_the_deep.thumbnail.attach(io: file_thumbnail_rolling_in_the_deep, filename: 'rolling-in-the-deep-thumbnail.png')

# -------- Delicate - Taylor Swift --------------------#

delicate = Video.create!(title: "Delicate", year: 2017, genre: "pop", artist: "Taylor Swift")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/delicate.mp4')
delicate.music_video.attach(io: file, filename: 'delicate.jpg')

file_thumbnail_delicate = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/delicate-thumbnail.png')
delicate.thumbnail.attach(io: file_thumbnail_delicate, filename: 'delicate-thumbnail.png')

# -------- Galway Girl - Ed Sheeran --------------------#

galway_girl = Video.create!(title: "Galway Girl", year: 2017, genre: "pop", artist: "Ed Sheeran")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/galway-girl.mp4')
galway_girl.music_video.attach(io: file, filename: 'galway-girl.jpg')

file_thumbnail_galway_girl = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/galway-girl-thumbnail.png')
galway_girl.thumbnail.attach(io: file_thumbnail_galway_girl, filename: 'galway-girl-thumbnail.png')

# -------- Royals - Lorde --------------------#

royals = Video.create!(title: "Royals", year: 2013, genre: "pop", artist: "Lorde")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/royals.mp4')
royals.music_video.attach(io: file, filename: 'royals.jpg')

file_thumbnail_royals = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/royals-thumbnail.png')
royals.thumbnail.attach(io: file_thumbnail_royals, filename: 'royals-thumbnail.png')

# -------- Uptown Funk - Bruno Mars --------------------#

uptown_funk = Video.create!(title: "Uptown Funk", year: 2014, genre: "pop", artist: "Bruno Mars")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/uptown-funk.mp4')
uptown_funk.music_video.attach(io: file, filename: 'uptown-funk.jpg')

file_thumbnail_uptown_funk = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/uptown-funk-thumbnail.png')
uptown_funk.thumbnail.attach(io: file_thumbnail_uptown_funk, filename: 'uptown-funk-thumbnail.png')

# -------- Doing Time - Lana del Rey --------------------#

doing_time = Video.create!(title: "Doing Time", year: 2019, genre: "pop", artist: "Lana Del Rey")

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/doing-time.mp4')
doing_time.music_video.attach(io: file, filename: 'doing-time.jpg')

file_thumbnail_doing_time = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/doing-time-thumbnail.png')
doing_time.thumbnail.attach(io: file_thumbnail_doing_time, filename: 'doing-time-thumbnail.png')
