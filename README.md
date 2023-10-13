# Running the application

## With Docker
```
docker build -t transaction_submit_challenge_app .
docker run --rm transaction_submit_challenge_app
docker run --rm transaction_submit_challenge_app npm test
```

---

## Without Docker
Build the Dockerfile into an image.
```
npm install
npm run start
npm  test
```
