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
