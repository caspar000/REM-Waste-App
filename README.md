# What is this Repository?

This is a repository which contains the solution to a coding challenge from REMWaste. The rest of the README is for the purpose of explaining how I approached this challenge and show off my current skills.

# Organization and Initial Setup
I was asked to re-design the look and feel of a web page while keeping the functionality intact. Usually, I would have a designer working with me who would provide me with updated UI/UX designs. Since I don't have such a designer available, I decided to create a basic mockup in Figma by myself.

https://www.figma.com/design/kBHHO7bdTa7o6Psr0m5txF/REMWaste?node-id=0-1&t=nYqSN2FnNsm8JBNl-1

![My Re-Design](image.png)

I decided to follow the same design system which the website was written in, but change some component to make them more appealing (to my eyes, I'm not a designer!). I took note of all the colors, icons, images, and fonts that the website was using. I would need them later when setting up my own project.

I'm using a React-ts-vite-eslint-prettier-tailwindcss boilerplate from "bezlant". This template saves me time by setting up all the libraries and settings that I'm most comforable with. 

To make my life easier in the future, and to write code which can be easily maintained I do the following things:
1. Add the colors to my tailwind.config.js
2. Add ('max-sm', 'max-md', etc) classes in my tailwind.config.js (Sometimes I prefer writing 'max-sm' to indicate if a style should only be applied on 'sm' screens and below.)
3. Add all the icons as TSX SVG assets with good defaults, so I can change their size, color, and add any other classes if desired
4. Change title and favicon, remove default styling
5. Added some initial folders which I will be working in

# Working on the Design
## Header
It would not make any sense to change the styling of the header, since all the other pages share it. I decided to make the header responsive (which it was not in the previous design) by making the progress line change width and make the text dissapear on certain screen sizes. I also made sure that the progress line is blue up to the current active step, which it was not before. 

I made the header component accept an array of objects which contain an icon and a name, as well as the current active index. This way, the header component could be reused on other parts of the website if desired by simply changing the array of icons and names. Passing the current active index will automatically "light up" the steps.

> I'm using basic `assert()` statements in the beginning of some function (preconditions) to formalize the assumptions and easily catch errors while coding.

## Card Component
The main component on this page will the the card design which will hold the information about the Skip. I wrote some additional "atom" components for this card, mainly: PostcodeIndicator, KeyValueIndicator, WarningIndicator; these atoms might be useful on other parts of the website, so it is best to keep them modular. I noticed that there are no images from the backed, which seems like an oversight. Usually, I would include the card image from the backend like `<img src={image_url}>...</img>` but since it was not provided I hard-coded the image to be the same as on the original website.

I was not sure if the price to be displayed should have been the price after VAT. I decided to display price before VAT separately and wrote a helper function to calculate the price after VAT, which I display as the main number.

Depending on the parameters that I recieve from backend, I will display different indicators. For example, if `allowed_on_road` parameters is False, it will display the "Private Property Only" warning indicator, otherwise it will not be shown. Similarly for other parameters.

On top of the Skip parameters, I'm also keeping track of `active` and `onClick` parameters, which are used for the selection logic to change the border of the card and change the action button to be blue instead of gray.

## Swiper
For the swiper functionality I'm using `Swiper` with `Navigation` and `Pagination` modules. Most customization of Swiper is easily done. I have decided to display 3 cards per group on desktop and 1 on mobile, with another responsive breakpoint. I added custom navigation buttons which fit with the current design system.

## Selected Footer
When selecting the card, there was a selected footer on the website which I re-created. I added the skip size indicator with an icon, total price, (I don't know how to calculate total price, because the business logic is not available to me. I have decided to take the weekly price after VAT and multiply it by the number of weeks.) and Back and Continue buttons. When selecting a card, it will ease-in to the screen from the bottom. The Back and Continue buttons don't work since they require other pages according to the functionality of the original website.

# Adding Important Functionality
## ReduxToolkit
To get the data from the backend, I decided to use ReduxToolkit with it's Async Thunk functionality (I also additionally use AXIOS in the API). I created the redux store, the slice for the skip data (and added it to the store with combineReducer so other slices could be added in the future easily) and the skip api which gets the data from the backend. I made the api accept `postcode` and `area` so it could be used to get data about other postcodes. Usually, the DOMAIN variable would be saved in an `.env` file, but I don't know if it will work in the sandbox, so I have hard-coded it. The data from the backend gets saved to the store with the extra reducer after the API request is fullfilled, and it stays saved in the store in case it is needed somewhere else in the page. The API request gets sent in the beginning of the current page load. 

I added a loading spinner to show that data is loading from backend. In a full website, this spinner might not activate if the api request was made on a previous web-page, since data would have been saved in the store.

The data is taken from the store and populated into the Swiper.

## Selection Logic
Compared to everything else, selecting a card is easy. I save the selected card data in state, make the card from the list be activated in case the id of the selected card and the current card is the same, and display the selected footer with the data from the selected card.

# Final Touches
I made sure that the website is responsive, displays correctly on both desktop and mobile and across every breakpoint. I made sure that some absolute/fixed components don't overlap by tweaking the Z values. 

The final product is a responsive, modular website which is built on a solid foundation and could be extended easily to include other functionality.

# Technology Used
- Vite
- React
- TypeScript
- TailwindCSS
- ReduxToolkit
- Swiper
- Axios

# Sandbox Link