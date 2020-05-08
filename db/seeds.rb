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

the_less_i_know_the_better = Video.create!(title: "The less I know the better", year: 2015)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/tame-impala-less-you-know-the-better.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
the_less_i_know_the_better.music_video.attach(io: file, filename: 'the-less-i-know-the-better.jpg')

file_thumbnail_the_less_i_know_the_better = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/tame-impala-the-less-i-know-the-better-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
the_less_i_know_the_better.thumbnail.attach(io: file_thumbnail_the_less_i_know_the_better, filename: 'the-less-i-know-the-better-thumbnail.jpg')

# -------- Uptown Funk - Bruno Mars --------------------#

uptown_funk = Video.create!(title: "Uptown Funk", year: 2014)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/uptown-funk.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
uptown_funk.music_video.attach(io: file, filename: 'uptown-funk.jpg')

file_thumbnail_uptown_funk = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/uptown-funk-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
uptown_funk.thumbnail.attach(io: file_thumbnail_uptown_funk, filename: 'uptown-funk-thumbnail.jpg')


# -------- Take Me Out - Franz Ferdinand --------------------#


take_me_out = Video.create!(title: "Take me Out", year: 2004)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/take-me-out-franz.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
take_me_out.music_video.attach(io: file, filename: 'take-me-out.jpg')

file_thumbnail_take_me_out = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/take-me-out-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
take_me_out.thumbnail.attach(io: file_thumbnail_take_me_out, filename: 'take-me-out-thumbnail.jpg')

# -------- Dog days are over - Florence and the machine --------------------#

dog_days_are_over = Video.create!(title: "Dog Days Are Over", year: 2008)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/dog-days-are-over.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
dog_days_are_over.music_video.attach(io: file, filename: 'dog-days-are-over.jpg')

file_thumbnail_dog_days_are_over = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/dog-days-are-over-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
dog_days_are_over.thumbnail.attach(io: file_thumbnail_dog_days_are_over, filename: 'dog-days-are-over-thumbnail.jpg')

# -------- Doing Time - Lana del Rey --------------------#

doing_time = Video.create!(title: "Doing Time", year: 2019)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/doing-time.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
doing_time.music_video.attach(io: file, filename: 'doing-time.jpg')

file_thumbnail_doing_time = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/doing-time-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
doing_time.thumbnail.attach(io: file_thumbnail_doing_time, filename: 'doing-time-thumbnail.jpg')

# -------- Little lion man - Mumford and sons --------------------#

little_lion_man = Video.create!(title: "Little Lion Man", year: 2009)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/little-lion-man.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
little_lion_man.music_video.attach(io: file, filename: 'little-lion-man.jpg')

file_thumbnail_little_lion_man = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/little-lion-man-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
little_lion_man.thumbnail.attach(io: file_thumbnail_little_lion_man, filename: 'little-lion-man-thumbnail.jpg')


# -------- Lost in yesterday - Tame Impala --------------------#

lost_in_yesterday = Video.create!(title: "Lost in Yesterday", year: 2020)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/lost-in-yesterday.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
lost_in_yesterday.music_video.attach(io: file, filename: 'lost-in-yesterday.jpg')

file_thumbnail_lost_in_yesterday = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/lost-in-yesterday-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
lost_in_yesterday.thumbnail.attach(io: file_thumbnail_lost_in_yesterday, filename: 'lost-in-yesterday-thumbnail.jpg')

# -------- Somebody told me - The Killers --------------------#

somebody_told_me = Video.create!(title: "Somebody Told Me", year: 2003)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/somebody-told-me.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
somebody_told_me.music_video.attach(io: file, filename: 'somebody-told-me.jpg')

file_thumbnail_somebody_told_me = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/somebody-told-me-thumbnail.png')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
somebody_told_me.thumbnail.attach(io: file_thumbnail_somebody_told_me, filename: 'somebody-told-me-thumbnail.jpg')

# -------- Starlight - Muse --------------------#

starlight = Video.create!(title: "Starlight", year: 2006)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/starlight.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
starlight.music_video.attach(io: file, filename: 'starlight.jpg')

file_thumbnail_starlight = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/starlight-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
starlight.thumbnail.attach(io: file_thumbnail_starlight, filename: 'starlight-thumbnail.jpg')


# -------- Rolling in the deep - Adele --------------------#

rolling_in_the_deep = Video.create!(title: "Rolling in the Deep", year: 2010)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/rolling-in-the-deep.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
rolling_in_the_deep.music_video.attach(io: file, filename: 'rolling-in-the-deep.jpg')

file_thumbnail_rolling_in_the_deep = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/rolling-in-the-deep-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
rolling_in_the_deep.thumbnail.attach(io: file_thumbnail_rolling_in_the_deep, filename: 'rolling-in-the-deep-thumbnail.jpg')
