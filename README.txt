DAVYNE TRUTH — PREMIUM MULTI-PAGE WEBSITE

This build keeps the approved premium transparent/cinematic look but splits the site into separate pages:

- index.html — Home
- about.html — About
- what-i-do.html — What I Do
- placements-sync.html — Placements + Sync
- gallery.html — Gallery
- bio.html — Bio
- contact.html — Contact

ALREADY ADDED
- Your official bio exactly as supplied
- Facebook: https://www.facebook.com/DaVyneTruth
- Instagram: https://www.instagram.com/davynetruth
- Twitter: https://www.twitter.com/davynetruth
- X: https://x.com/davynetruth
- Spotify: https://open.spotify.com/user/lf144j13sxmfapda1o04e5alr
- TikTok: https://www.tiktok.com/@davynetruth
- YouTube: https://m.youtube.com/davynetruth?uid=V9Ilr6UWLgY7OuwnoI8a3g
- LinkedIn: https://www.linkedin.com/in/davynetruth/
- PEPSI reel: https://www.instagram.com/reel/DJ4GoK1N2vu/?igsh=MTFyNzQ3YTh2ZWE5&igsi=MTFyNzQ3YTh2ZWE5
- "The Artist Behind The Sound"
- "Book DaVyne Truth"
- "Genres + Energy"
- Featured PEPSI ribbon on the home page
- Horizontal PEPSI video embed on Placements + Sync
- Placements organized into Brand + Advertising, Scripted Television, and Reality/Lifestyle/Entertainment

HOW TO EDIT PHOTOS
All photos are in /assets.
To swap a photo, replace the file while keeping its filename OR edit the src in the HTML.

HOW TO REORDER GALLERY
Open gallery.html.
Inside <div class="gallery">, move the <div class="photo glass">...</div> blocks into any order.

ADDING MORE PLACEMENT VIDEOS
Open placements-sync.html.
You can wrap a placement card in an <a> tag to make it clickable, or insert another .video-row block using a YouTube/Vimeo/Instagram embed.

NETLIFY
Upload the entire folder (not just index.html), or connect the folder/repository through GitHub.


PLACEMENT VIDEO SLIDESHOW
- 19 supplied placement clips are included in assets/placements.
- The slideshow is on placements-sync.html.
- Arrow controls move forward/back.
- The thumbnail strip lets visitors jump directly to a placement.
- Videos pause automatically when visitors move to another slide.
- PEPSI now uses the uploaded local video file instead of relying only on Instagram.

GALLERY UPDATE
- collage.png has been removed from gallery.html and deleted from assets.


FINAL REVISION CHANGES
- Removed collage.png from site.
- Home tagline shortened.
- Home role tabs changed to Ad Music / Promo Music / Trailer Music / TV + Film Music.
- About and Bio combined into one About page.
- Bio page removed from navigation and site files.
- About page keeps "Who Is DaVyne Truth?" and "ARTIST".
- Full updated bio included.
- What I Do > Artist changed to "Original releases and features".
- Placement intro changed to "A growing catalog..."
- PEPSI uses the actual uploaded movie file and is stacked under Featured Brand Placement / PEPSI.
- Placement slideshow reduced to 18 videos.
- Toya & Reginae placement 1 removed.
- Requested placement captions updated.
- Actual uploaded social logo icons added.
- Twitter removed from Contact.
- Footer role line removed.


BOOKING CONTACT FORM
The Contact page now includes:
- Name
- Email
- Subject
- Message
- Social links at the top
- Direct booking email: davynetruthbookings@gmail.com
- Netlify Forms integration
- Spam honeypot protection
- Thank-you page after submission

IMPORTANT NETLIFY EMAIL NOTIFICATION STEP
After deploying this version to Netlify:
1. Make sure Netlify Forms / form detection is enabled for the site.
2. Submit one test message from the live Contact page.
3. In Netlify, go to Project configuration > Notifications > Emails and webhooks > Form submission notifications.
4. Add an email notification for the form named: davynetruth-booking
5. Set the notification email to: davynetruthbookings@gmail.com

The form itself is already coded. This Netlify account setting is what makes Netlify email new form submissions directly to that inbox.
