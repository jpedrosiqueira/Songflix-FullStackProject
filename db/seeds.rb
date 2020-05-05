# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo_user = User.create!(
    email: 'demouser@songflix.com',
    password: 'password'
)

require 'open-uri'
video_1 = Video.create(title: "The less I know the better", year: 2015)

file = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/tame-impala-less-you-know-the-better.mp4')
# grab the url from amazon from the video that you uploaded from youtube to your computer
video_1.video.attach(io: file, filename: 'TameImpala_1.jpg')


file_thumbnail_video_1 = open('https://songflix-seeds.s3-us-west-1.amazonaws.com/tame-impala-the-less-i-know-the-better-thumbnail.jpg')
# grab the url from amazon from the picture that i'll use as a thumbnail for that video
video_1.photo.attach(io: file_thumbnail_video_1, filename: 'thumbnail1.jpg')
