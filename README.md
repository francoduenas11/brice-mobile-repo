# Done With It (Example React Native App)

**Short overview**

A small marketplace app built while following a React Native + Expo tutorial. Users can browse listings, view item details, message sellers, and post new listings with images and upload progress.

---

## Key features

* Authentication: Login and register screens.
* Listings feed with pull-to-refresh and simple filters (by category).
* Item detail screen showing item info, seller, and item location on a map.
* Messaging between buyer and seller with push notification example hooks.
* Create listing flow with image picker (up to 3 images), title, price, category.
* Upload progress bar and a finish animation after posting.
* Account screen showing your listings and messages.
* Swipe-to-delete for your listings.

## Screenshots

In `assets/screenshots/`.*

```
/screenshots/welcome.png
/screenshots/listings.png
/screenshots/item-detail.png
/screenshots/new-listing-progress.png
```

## Quick start (development)

Requirements

* Node 12 or higher
* Expo CLI (`npm install -g expo-cli`)
* Expo Go app on your device for quick testing

Install and run

```bash
git clone <your-repo>
cd <your-repo>
npm install
npm start
# then open in Expo Go or run on emulator
```

Publish (optional)

```bash
expo publish
```

## Folder structure (suggested)

```
/app
  /assets
    /images
    /screenshots
  /components
  /screens
    WelcomeScreen.js
    ListingsScreen.js
    ItemDetailScreen.js
    AccountScreen.js
    NewListingScreen.js
  App.js
  app.json
```

## Important implementation notes

* Uses Expo managed workflow for simplicity.
* Network images require explicit width/height or styles.
* Upload flow shows a progress bar. The sample uses a visual animation when upload completes.
* Map view shows item location. Requires appropriate map keys or Expo map setup for real builds.
* Some platform differences handled by `Platform` and `SafeAreaView`.

## Testing

* Manual: run on simulator and physical device via Expo Go.
* Test: adding listings, uploading images, messaging, swipe-delete.

## Built with

* React Native + Expo