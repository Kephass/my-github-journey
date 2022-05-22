This is a small Github API prject built with [Next.js](https://nextjs.org/).

## My Github Journey project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies used

- Next.js
- Chakra UI
- Vercel | Netlify
- Recoil
- SWR
- Octokit

## ES6 features

1. Optional chaining
   I used optional chaining to read the value of the github api data located deep within connected objects without having to check that each reference in the chain is valid. That way I avoid writing chunky code.

2. Map
   I used the map() function to loop over the data I got back from the api to create the repos and commits layout. map() is really useful because it returns an array from the function passed to it which is directly useful without having to append the elements to another array as you would with for instance a for loop.

## Learn More

## Deployed onto Vercel and Netlify

The link to the live version is [on Netlify](https://fascinating-kataifi-1759e0.netlify.app/) or [on Vercel] (https://my-github-journey.vercel.app/)
