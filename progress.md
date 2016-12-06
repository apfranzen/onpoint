1. upload picture from front-end to cloudinary
1. come up with solution to add a tag to the picture, either using [explicit](http://cloudinary.com/documentation/image_upload_api_reference#explicit) to add a tag, or to do a Promise.all function

1. Get a response with the compass direction the picture was taken at.

[getting all images with tag](https://support.cloudinary.com/hc/en-us/articles/203189031-How-to-retrieve-a-list-of-all-resources-sharing-the-same-tag-)

[getting all images within a folder](https://support.cloudinary.com/hc/en-us/articles/202521082-How-to-list-all-images-within-a-folder-)

> getting JSON of pictures with a tag: `http https://447252371969227:V-FVFFtZ3P6QOxWwudo3caL1998@api.cloudinary.com/v1_1/apfranzen/resources/image`
...then use client library to produce the url

> getting JSON of pictures with a tag: `http https://447252371969227:V-FVFFtZ3P6QOxWwudo3caL1998@api.cloudinary.com/v1_1/apfranzen/resources/image/tags/1001`

## app storage
- https://developer.chrome.com/apps/app_storage
- https://gist.github.com/rioki/3713041

- Take image name, compass orientation, project, etc and make a `get` request to add to knex db once the image has been added
- Plotting pictures on floorplan
- Large view to view the picture
- Deploy front-end
- deploy back-end
- Loading an image SLR onto pi
  - http://www.makeuseof.com/tag/how-to-capture-time-lapse-photography-with-your-raspberry-pi-and-dslr-or-usb-webcam/

Login/logout pages
Filtering on projects page
Fort
Readme
Metrics
Different views on room view
Single picture view has info a d loads large
Orbit view
Plotting pictures on floorplan
Landing page
Use date posted in project/room view
Use select to filter on room for orientation
Change compass orientation based on direction
Fix header (link highlighting)
Add filter to project view:
  - date range
  - floor
  - room dropdown
icon
bring landing page in
seed more projects
if picture is < 1 day "added today"
fix project view -> room -> all pics for room -> next room
projects view
  - project value
  - core market
room view
  - add direction filter
