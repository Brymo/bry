[//]: # (Implementing Mobile Rescaling)
[//]: # (29.4.2019)

So I clearly wasn't thinking about how this website would look on mobile when I was prototyping it.  Heck I really should have but I was so focused on getting features for a PC version out that it wasn't really on my mind until well...

![bad](http://d3ho76wtf3u3sm.cloudfront.net/sardined.jpg)

Yeah...not the best.  Thanks *cough* friends *cough* for pointing this one out.

But good news!  Mobile implementation is finally is so whip your phone out or resize this screen and just you try and break this thing.  There were a few way I had in mind of pulling this off but I decided upon implementing a screen listener when the app mounts which keeps track of the window size.

Once the window size drops below a certain width the app gets an extra css className tag (".mobile") in the topmost component.  I then define "alternative" classes to be used when the app is in mobile mode e.g.: 

	
~~~~
.componentName{
    stuff:"stuff"
}

.mobile .componentName{
    stuff:"stuff"
}
~~~~

I'm a bit of a newbie at this so there's probably a better way to do this but hey it works.  Send me an email if you have a better idea :)

