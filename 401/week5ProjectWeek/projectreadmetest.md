


### test 1
![Alt](/401/week5ProjectWeek/401-midtermFlowChart.001.png)


POST localhost:9000/api/signUp

```
{
  "username": "gavin206",
  "name": "gavin",
  "password": "1234",
  "email": "test@test.com",
  "subscribedToEmail": "true",
  "isAdmin": "true"
}
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImM5ZGQ4YmY4ZTUxMjZiNGRjYmNiMDYzZGYzNmExOTg5Nzg4YzY4YTE2YmJjNzIxMzU5NmNkNTdmNGU5YWM3OGEiLCJpYXQiOjE1MDU3Nzc1MTN9.kNmAc_ezsP7WdmsLkdpWAwjWOaYH-PKCcgHMkkfGHVE


POST localhost:9000/api/newApi

```
{
	"name": "sportsradar",
	"url": "www.ombd.com",
	"desc": "testing",
	"examplesOfUse": "randommovie",
	"examplesInUse": "www.google.com",
	"rating": "awesome",
	"tokenRequired": "yes",
	"tokenAccessWaitTime": "36hrs",
	"maxReqMin": "20",
	"numUsersFav": "3",
	"category": "entertainment"
}
```



```
{
    "__v": 0,
    "updatedAt": "2017-09-18T23:39:40.345Z",
    "createdAt": "2017-09-18T23:39:40.345Z",
    "name": "sportsradar",
    "url": "www.ombd.com",
    "desc": "testing",
    "examplesOfUse": "randommovie",
    "examplesInUse": "www.google.com",
    "rating": "awesome",
    "tokenRequired": true,
    "tokenAccessWaitTime": "36hrs",
    "maxReqMin": "20",
    "numUsersFav": "3",
    "category": "entertainment",
    "userId": "59c057695c15226fd3a1a99c",
    "_id": "59c0593c42cc9b705f79dda5"
}
```

GET localhost:9000/api/newApi/getAllById/59c0593c42cc9b705f79dda5

```
{
    "_id": "59c0593c42cc9b705f79dda5",
    "updatedAt": "2017-09-18T23:49:20.113Z",
    "createdAt": "2017-09-18T23:39:40.345Z",
    "name": "sportsradar",
    "url": "www.sportsradar.com",
    "desc": "testing",
    "examplesOfUse": "randommovie",
    "examplesInUse": "www.google.com",
    "rating": "awesome",
    "tokenRequired": true,
    "tokenAccessWaitTime": "36hrs",
    "maxReqMin": "20",
    "numUsersFav": "3",
    "category": "entertainment",
    "userId": "59c057695c15226fd3a1a99c",
    "__v": 0
}
```

GET localhost:9000/api/newApi/getAll
```
[
    "59c057965c15226fd3a1a99d",
    "59c0593c42cc9b705f79dda5"
]
```

PUT localhost:9000/api/newApi/59c057965c15226fd3a1a99d
```
{
	"name": "yo",
	"url": "yo",
	"desc": "yo",
	"examplesOfUse": "yo",
	"examplesInUse": "yo",
	"rating": "yo",
	"tokenRequired": "true",
	"tokenAccessWaitTime": "yo",
	"maxReqMin": "yo",
	"numUsersFav": "yo",
	"category": "yo"
}
```

DELETE
localhost:9000/api/newApi/59c0593c42cc9b705f79dda5
