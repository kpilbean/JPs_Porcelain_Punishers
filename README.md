**JavaScript Project Requirements**
This project is a website I'm setting up for my family's annual fundraising team for the Crohn's & Colitis Foundation.  My son, Jack, is 17 and was diagnosed with Ulcerative Colitis when he was 10.  Since becoming involved with the CCF, Jack wanted to start a team for the annual fundraising walk and has, to date, raised over $30,000 for the CCF through the walk and fundraisers we've done in conjunction with it.  One of the fundraisers we do every year is a Kickball FUNdraiser for Jack, his younger sister Annie, and their classmates and friends the Saturday before Derby.  We have team registration forms (teams of 10 kids) and sponsorship forms with multiple options/levels to sponsor.  

I initially started this page for my front-end project over the summer and obviously had more than one project's worth of visions/dreams for the site - lol.  One of the main things I wanted to get completed through this project is setting up some of the forms online - at a minimum, the team registration form, so that we could possibly roll it out and use it for the event (fingers crossed we'll be on the other side of COVID by then) this coming spring.  I envisioned a countdown to the walk & kickball events on the Fundraising/Events page, as well as a "live feed" of the Facebook and Instagram pages displayed on our Contact Us page.  I would like to add the sponsorship form as well eventually, but wouldn't be able to take online payments due to the way the CCF has it's walk team pages set up.  They allow you to customize the address of your page, but they also shut it down each year after they close donations; then when they set dates for the following year, they implement a brand new site/page, which you can then customize as you please again (even to the exact same address - but there's no link to anything in previous years - it's a blank slate at the start of each year.) 

For this project, I decided to focus on fulfilling the below requirements:
1) Create a form and save the values (on click of Submit button) to an external file (must show or document where info is being stored so Code Louisville can confirm that info is being saved/persisted).  **Team Registration form - link to form on Fundraising/Events page.**

2) Implement a regular expression (regex) to ensure a field (either a phone number or an email address) is always stored and displayed in the same format.  **Included within Team Registration form - link to form on Fundraising/Events page.**

3) Calculate and display data based on an external factor (ex. get the current date, and display how many days remaining until some event).  **Countdown to Kickball FUNdraiser event on Fundraising/Events page.**

4) Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX).  **Facebook and Instagram live page feeds Home page.**

5) Additional Feature: Create a web server with at least one route and connect to it from your application using ExpressJS.  **Attempting to do this with Team Registration Form so submitted team info is sent to server and saved into database for use with event.**
________________________________________________________________________________________________________________________________________________________

# JPs_Porcelain_Punishers

Jack's CCF Take Steps Walk Team Website.

Home Page
  Header (across all pages of site)
    Menu items (Home, About Us, Fundraising/Events, Press/Publicity, Help Us!, Contact Us)
      Left justified on full, hamburger left corner when reduced ***Change to right inline justify/right hamburger.***
    Team logo 
      Center justified ***Change to left justify and rounded corners instead of circle.***
    Donate Now button 
      Right justified, links to CCF walk team fundraising page ***Change to top right corner.***

  Photo carousel
    Stretched full width of page
    Rotating pics of annual walk team pics for 6 years done so far - include walk year on pic at bottom right

  Jack's overview/story/bio
    Centered, smaller than photos above, equal margins on both sides

  Static Footer (center justified and across all pages of site)
    Team logo smaller than header
    Follow Us!  with linked logos for Facebook and Instagram pages/accounts
    JP's Porcelain Punishers - 3120 Creekside Drive, Louisville, KY  40241 - ______@gmail.com

About Us
  JP's Porcelain Punishers
    Logo with brief overview
  Jack & Family
    Pic (from walk?) with brief overview/story
  Crohn's & Colitis Foundation
    Logo with brief overview w/ link to their site

Fundraising/Events
  Kickball FUNdraiser (unsure whether to create separate pages for each year or just have same sections - Date/Sponsors/Pics - with info for each year within those three sections)
    2017
    2018
    2019
    2020
    2021
  Lemonade/Cupcake Stands
  School Hats Off/Free Dress Days
  Take Steps Walk

Press/Publicity
	Links to TV and radio spots from 2017 Honored Hero year.

Help Us!  **Good page to implement most of JavaScript Class Requirements**
**Add form to volunteer to help with Kickball event**
**Add digital form of Kickball sponsorship signup**
**Either add form to make donation or include direct link to CCF page to donate to team**
	Options for:
    Volunteer for Kickball and/or walk sign up.
    Make straight donation – buttons for $10, $25, $50, $75, $100, and Other $____.
    Kickball sponsorship signup/donation – different levels/amounts plus option to download sponsorship form to fill out and mail in with check.

Contact Us  **Good page to implement most of JavaScript Class Requirements**    
**Possible spot for JS by adding window or link of FB and Insta pages you could scroll through under the Social Media Links spot**
	Social Media Links – Facebook and Instagram team pages
	Email address
	Mailing address