---
title: "DataLibrarian - Collect your data"
date: "1.8.2020"
cover: ./dl_cover.jpeg
thumbnail: ./dl_logo.png
---




# DataLibrarian	
This project was one of those ”this will be a tad too much” ones. As I was working on the [CropperHead](/projects/cropperhead) project, I realised that I needed more training data – a lot more. 

First, I naturally tried to rely on my friends: by asking them to dive into their dark, tech side and export me their libraries of photos that had been cropper. Practically the same that I had done with the [PhotoAnnotator] tool. 

However, this proved a tad cumbersome, as the crop info I had extracted was only applicable for those performed with Adobe Lightroom. 

So, I decided to give an opportunity for the end users to help me gather the much needed data – crowdsourcing at its best!

## Needs
To collect the data effectively, I would need means to record the preferred crop at the UI, a backend to sort and validate the data and finally places to store the items. The UI I implemented in the [CropperHead UI project].  For the storage, I went with mongoDB for the labels and AWS S3 free tier for the images.  The basic architecture and plans are shown in image below.

For the backend server, I needed a system that could effectively take incoming data, validate it and store it if deemed worthy. I also thought it would be nice if the service would be designed in an expandable way to accommodate possible high traffic.


## The design!
I started with simple REST API in mind: the service would take in the image and labels with a PUT call and return a success or error based on a few cases where it went wrong. I.e., in its simplicity:

	1. Receive the image as base64 encoded string
	2. Receive the labels as json
	3. Validate the image
	4. Validate the labels
	5. Send the image to S3
	6. Send the labels to MongoDB
	7. Return a HTTP status code on whether the validations and uploads were successful.

Seems simple enough, right!



## The Expand!
Well it wasn’t. Mainly due to my “if I implement it once, why not use it later” –mentality. Here’s a breakdown of what happened:

Soon after implementing the base functionality, I realised that I would need some simple way to debug the service. I only wanted to find out how the individual parts worked and felt that writing unit tests to such a seemingly small and ever non specced project was unnecessary. So I implemented simple functions to save the image and labels on the disk instead.

Then it hit me. Why not have this as an option at the service...

The expand started.


I implemented and debugged the service further,and had to change to mlab as DB provider as it was so nicely tied with Heroku already. This inspired the second option: having alternatives for saving the labels to. And heck, why not the images as well! 

So,  I added functionality to specify your own S3 instances, as well as your own mongoDB instances. All the configuration could be made with an .env file, or environmental variables to ensure security  (no clear text secrets to git) and expandability (using env would apply even if multiple instances of the service would be launched)


## The expandability
As mentioned in the intro, I wanted to make the service scalable from the get go. Some features I added just for this reason:
	1. Configuration with environment variables
	2. Unique Identifiers for the received images
	
## The result
And lo and behold, it worked! I could use several clients to send data simultaneously to the service,and it would snappily process them. I did not do a full stress test for the system, but I added a pop–up to the UI informing the user whether the update was successful or not.

### Configuring the service
One can configure the service with command line arguments, .env file or environmental variables. One can define several data inputs, how to validate them and where to store them.

### Starting the service / fire it up!
This was another entertaining part to implement. I had just learned of the Google’s Fire library. Using that, making the command line scripts for starting the service was child’s play! Moreover, user can overwrite some settings for easier debugging, verbosity, logging etc. All this candy implemented with relative ease!

## The future tense
I suppose that in the future, the configuration could be improved further. At the moment setting each secret individually at the host panel is rather cumbersome. Also, making the service into a docker container could prove beneficial to control the amount of instances and hence the workload better. 

However, for a simple hobbyist like me, this solution was more than sufficient.

I can now set up a service to take in varying type of data (text, images, files), do validation on them (several ready written validation) and select where to store the approved data, locally or remotely. Quite versatile and neat if you ask me.

Now to only come up with more projects to utilise my newly trained librarian!