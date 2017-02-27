define({ "api": [
  {
    "type": "get",
    "url": "/:id",
    "title": "Get job detail",
    "version": "0.3.0",
    "name": "GetJob",
    "group": "Job",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get job detail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The job-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": [\n\t    {\n\t      \"name\": \"long\",\n\t      \"avatar\": \"/upload.jpg\",\n\t      \"knowledgeid\": null,\n\t      \"personalityid\": null,\n\t      \"id\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t      \"userid\": \"08eb3ed0-ec37-11e6-891a-6573654d38a\",\n\t      \"longitude\": 106.681,\n\t      \"latitude\": 10.8103,\n\t      \"type\": [\n\t        {\n\t          \"flagid\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"typeid\": \"6\"\n\t        },\n\t        {\n\t          \"flagid\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"typeid\": \"7\"\n\t        }\n\t      ],\n\t      \"validfromdate\": null,\n\t      \"validtodate\": null,\n\t      \"price\": 1,\n\t      \"currency\": \"VND\",\n\t      \"duration\": 2,\n\t      \"datemodified\": \"2017-02-07T06:17:41.000Z\",\n\t      \"datecreated\": \"2017-02-07T06:17:41.000Z\",\n\t      \"status\": 1,\n\t      \"day\": [\n\t        {\n\t          \"id\": \"2141a4d0-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"flagid\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"day\": \"0000-00-00 00:00:00\",\n\t          \"fromhour\": \"1\",\n\t          \"tohour\": \"2\"\n\t        },\n\t        {\n\t          \"id\": \"2141cbe0-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"flagid\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t          \"day\": \"0000-00-00 00:00:00\",\n\t          \"fromhour\": \"3\",\n\t          \"tohour\": \"4\"\n\t        }\n\t      ]\n\t    }\n\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Job",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/nearbyme/:latitude/:longitude",
    "title": "Get job at a location",
    "version": "0.3.0",
    "name": "GetJobByLocation",
    "group": "Job",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get list job by location</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": [\n\t    {\n\t      \"name\": \"long\",\n\t      \"avatar\": \"/upload.jpg\",\n\t      \"knowledgeid\": null,\n\t      \"personalityid\": null,\n\t      \"id\": \"078fe290-ecfd-11e6-8945-e7b33c1470a9\",\n\t      \"longitude\": 106.627,\n\t      \"latitude\": 10.8509,\n\t      \"type\": 0,\n\t      \"price\": 1,\n\t      \"currency\": \"VND\",\n\t      \"duration\": 2,\n\t      \"datecreated\": \"2017-02-07T06:16:57.000Z\"\n\t    },\n\t    {\n\t      \"name\": \"long\",\n\t      \"avatar\": \"/upload.jpg\",\n\t      \"knowledgeid\": null,\n\t      \"personalityid\": null,\n\t      \"id\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t      \"longitude\": 106.681,\n\t      \"latitude\": 10.8103,\n\t      \"type\": 0,\n\t      \"price\": 1,\n\t      \"currency\": \"VND\",\n\t      \"duration\": 2,\n\t      \"datecreated\": \"2017-02-07T06:17:41.000Z\"\n\t    }\n\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Job",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/nearbyme/:latitude/:longitude"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get my job",
    "version": "0.3.0",
    "name": "GetMyJob",
    "group": "Job",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get list job by user create</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The user-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": [\n\t    {\n\t      \"name\": \"long\",\n\t      \"avatar\": \"/upload.jpg\",\n\t      \"knowledgeid\": null,\n\t      \"personalityid\": null,\n\t      \"id\": \"078fe290-ecfd-11e6-8945-e7b33c1470a9\",\n\t      \"longitude\": 106.627,\n\t      \"latitude\": 10.8509,\n\t      \"type\": 0,\n\t      \"price\": 1,\n\t      \"currency\": \"VND\",\n\t      \"duration\": 2,\n\t      \"datecreated\": \"2017-02-07T06:16:57.000Z\"\n\t    },\n\t    {\n\t      \"name\": \"long\",\n\t      \"avatar\": \"/upload.jpg\",\n\t      \"knowledgeid\": null,\n\t      \"personalityid\": null,\n\t      \"id\": \"21409360-ecfd-11e6-913f-f7ec3e7e0df7\",\n\t      \"longitude\": 106.681,\n\t      \"latitude\": 10.8103,\n\t      \"type\": 0,\n\t      \"price\": 1,\n\t      \"currency\": \"VND\",\n\t      \"duration\": 2,\n\t      \"datecreated\": \"2017-02-07T06:17:41.000Z\"\n\t    }\n\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Job",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/type",
    "title": "Get all type",
    "version": "0.3.0",
    "name": "GetType",
    "group": "Job",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get list job type</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-1687-11e6-bc8a-45b3eb0c3c3c\",\n\t\t\t      \"name\": \"Cafe\",\n\t\t\t      \"status\": 1\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"id\": \"082ec8d0-1687-11e6-bc8a-45b3eb0c3c56\",\n\t\t\t      \"name\": \"Mua sắm\",\n\t\t\t      \"status\": 1\n\t\t\t    }]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Job",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/type"
      }
    ]
  },
  {
    "type": "post",
    "url": "/job",
    "title": "add new job",
    "version": "0.3.0",
    "name": "PostJob",
    "group": "Job",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>add new job</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the Job.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>userid of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>duration hours of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "jobday",
            "description": "<p>jobday array object item = {day, from, to} of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "jobtype",
            "description": "<p>jobtype array string of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude of the Job</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of the Job</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"2d4bdf10-fcc6-11e6-8bb0-f18f3bbfb165\"\n\t\t\t    }\n\t\t\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Job",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/job"
      }
    ]
  },
  {
    "type": "post",
    "url": "/knowledge",
    "title": "Create a knowledge",
    "version": "0.3.0",
    "name": "AddKnowledge",
    "group": "Knowledge",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Add new Knowledge</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The knowledge-name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Knowledge",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/knowledge"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/knowledge/:id",
    "title": "Delete a knowledge",
    "version": "0.3.0",
    "name": "DeleteKnowledge",
    "group": "Knowledge",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Delete a knowledge</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The knowledge-id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Knowledge",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/knowledge/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/knowledge",
    "title": "Get all Knowledge",
    "version": "0.3.0",
    "name": "GetKnowledge",
    "group": "Knowledge",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get list Knowledge</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-1687-11e6-bc9b-45b3eb0c3c3c\",\n\t\t\t      \"name\": \"Đại học\"\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"id\": \"073er8d0-1687-11e6-bc9b-45b3eb0c3c3c\",\n\t\t\t      \"name\": \"Cao đẳng\"\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"id\": \"073er8d0-1687-11e6-bc9b-45b3eb0c3c45\",\n\t\t\t      \"name\": \"Trung học phổ thông\"\n\t\t\t    }]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Knowledge",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/knowledge"
      }
    ]
  },
  {
    "type": "get",
    "url": "/knowledge/:id",
    "title": "Get a Knowledge",
    "version": "0.3.0",
    "name": "GetKnowledge",
    "group": "Knowledge",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get data detail of a Knowledge</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Knowledge-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-1687-11e6-bc9b-45b3eb0c3c3c\",\n\t\t\t      \"name\": \"Đại học\"\n\t\t\t    }\n\t\t\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Knowledge",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/knowledge/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/knowledge/:id",
    "title": "Update a Knowledge",
    "version": "0.3.0",
    "name": "PutKnowledge",
    "group": "Knowledge",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Change info knowledge</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The knowledge-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nam of the knowledge.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Knowledge",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/knowledge/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/Personality",
    "title": "Create a Personality",
    "version": "0.3.0",
    "name": "AddPersonality",
    "group": "Personality",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Add new Personality</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Personality-name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Personality",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/Personality"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/Personality/:id",
    "title": "Delete a Personality",
    "version": "0.3.0",
    "name": "DeletePersonality",
    "group": "Personality",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Delete a Personality</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Personality-id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Personality",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/Personality/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/Personality",
    "title": "Get all Personality",
    "version": "0.3.0",
    "name": "GetPersonality",
    "group": "Personality",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get list Personality</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-162-11e6-bc8a-45b3eb0c3c89\",\n\t\t\t      \"name\": \"Vui vẻ\"\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-1687-11e6-bc8a-45b3eb0c3c89\",\n\t\t\t      \"name\": \"Hòa đồng\"\n\t\t\t    }]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Personality",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/Personality"
      }
    ]
  },
  {
    "type": "get",
    "url": "/Personality/:id",
    "title": "Get a Personality",
    "version": "0.3.0",
    "name": "Personality",
    "group": "Personality",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get data detail of a Personality</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Personality-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"073ec8d0-162-11e6-bc8a-45b3eb0c3c89\",\n\t\t\t      \"name\": \"Vui vẻ\"\n\t\t\t    }\n\t\t\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Personality",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/Personality/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/Personality/:id",
    "title": "Update a Personality",
    "version": "0.3.0",
    "name": "PutPersonality",
    "group": "Personality",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Change info Personality</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Personality-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nam of the Personality.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Personality",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/Personality/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete a User",
    "version": "0.3.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Delete a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get all Users",
    "version": "0.3.0",
    "name": "GetAllUser",
    "group": "User",
    "permission": [
      {
        "name": "nonde"
      }
    ],
    "description": "<p>Get list users.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"0bb5e5a0-ec39-11e6-bf10-cf0b0041062\",\n\t\t\t      \"name\": \"long\",\n\t\t\t      \"age\": null,\n\t\t\t      \"avatar\": \"/upload.jpg\",\n\t\t\t      \"knowledgeid\": null,\n\t\t\t      \"personalityid\": null,\n\t\t\t      \"datecreated\": \"2017-02-06T06:54:03.000Z\",\n\t\t\t      \"datemodified\": \"2017-02-06T06:54:03.000Z\",\n\t\t\t      \"gender\": 0,\n\t\t\t      \"status\": 1,\n\t\t\t      \"email\": \"long@gmail.com\",\n\t\t\t      \"snid\": \"12312312324578901015654956\",\n\t\t\t      \"sntoken\": \"11111111\",\n\t\t\t      \"type\": 1\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"id\": \"0e0d26e0-fa41-11e6-bf52-1978d01519b2\",\n\t\t\t      \"name\": \"long\",\n\t\t\t      \"age\": null,\n\t\t\t      \"avatar\": \"avatar\",\n\t\t\t      \"knowledgeid\": null,\n\t\t\t      \"personalityid\": null,\n\t\t\t      \"datecreated\": \"2017-02-24T03:26:39.000Z\",\n\t\t\t      \"datemodified\": \"2017-02-24T03:26:39.000Z\",\n\t\t\t      \"gender\": 123,\n\t\t\t      \"status\": 1,\n\t\t\t      \"email\": \"long@gmail.com\",\n\t\t\t      \"snid\": \"9123123123245789010105555555556619997\",\n\t\t\t      \"sntoken\": \"facebooktoken\",\n\t\t\t      \"type\": 1\n\t\t\t    }]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "node"
      }
    ],
    "description": "<p>Get data detail of a User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t\t\t    {\n\t\t\t      \"id\": \"0fc0ca50-fa41-11e6-bf52-1978d01519b2\",\n\t\t\t      \"name\": \"long\",\n\t\t\t      \"age\": null,\n\t\t\t      \"avatar\": \"avatar\",\n\t\t\t      \"knowledgeid\": \"2\",\n\t\t\t      \"personalityid\": \"1\",\n\t\t\t      \"datecreated\": \"2017-02-24T03:26:42.000Z\",\n\t\t\t      \"datemodified\": \"2017-02-24T03:31:03.000Z\",\n\t\t\t      \"gender\": 123,\n\t\t\t      \"status\": 1,\n\t\t\t      \"email\": \"long@gmail.com\",\n\t\t\t      \"snid\": \"9123123123245789010105555555556619997\",\n\t\t\t      \"sntoken\": \"facebooktoken\",\n\t\t\t      \"type\": 1\n\t\t\t    }\n\t\t\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.3.0.</p>"
          }
        ]
      }
    },
    "filename": "example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create a new user if not exits. *</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nam of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "knowledgeid",
            "description": "<p>knowledgeid of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalityid",
            "description": "<p>personalityid of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snid",
            "description": "<p>snid of the User(social network id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sntoken",
            "description": "<p>sntoken of the User(social network token)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the User (social network type)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datecreated",
            "description": "<p>datecreated of the User</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"Success\",\n\t  \"data\": [\n\t    {\n\t      \"id\": \"3c9bd680-fa5c-11e6-a12b-b3019682ae6a\",\n\t      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.x.y\"\n\t    }\n\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/login"
      }
    ]
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update a User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Change info user profile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nam of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "knowledgeid",
            "description": "<p>knowledgeid of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalityid",
            "description": "<p>personalityid of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snid",
            "description": "<p>snid of the User(social network id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sntoken",
            "description": "<p>sntoken of the User(social network token)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the User (social network type)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datemodified",
            "description": "<p>datemodified of the User</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated users can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error - Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"fail\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/:id/setting",
    "title": "Setting a user",
    "version": "0.3.0",
    "name": "SettingUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Setting block message &amp; notification of a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t  \"error\": false,\n\t  \"message\": \"success\",\n\t  \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9011/api/user/:id/setting"
      }
    ]
  }
] });
