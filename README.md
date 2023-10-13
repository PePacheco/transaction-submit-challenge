# Steps to run the application

## 1# Step
Build the Dockerfile into an image.
```
docker build -t transaction_submit_challenge_app .
```

---

## 2# Step
Run the docker container.
```
docker run transaction_submit_challenge_app
```

---

## 3# Step
Test the application.
```
docker run transaction_submit_challenge_app npm test
```