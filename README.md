Maildrop Client
================

# Installation

```
npm install maildrop-client
```


# Get all emails

```
var maildrop = require('maildrop-client')

maildrop.getEmails('mailaddress').then(function(results){
    console.log(results)
})
```

will print something like

```
[
    {
        'sender' : 'name of sender',
        'id' : 'maildropid',
        'date' : 'Jun 25 2016 03:29 PM',
        'subject' : 'some subject'
    },
    ...
]
```


# Get specific email content


```
var maildrop = require('maildrop-client')

maildrop.getRawContent('mailaddress','someid').then(function(results){
    console.log(results) // body of email
})
```

