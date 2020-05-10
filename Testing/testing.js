

$(document).ready(function(){

    $("#synchronousStuff").click(synchronousStuff);

    $("#asynchronousStuff").click(asynchronousStuff);

    $("#updateCampaignALL").click(updateCampaignAll);

    $("#newCampaignMeta").click(newCampaignMeta);

    $("#updateCampaignMeta").click(updateCampaignMeta);

    $("#publishStoryTopics").click(publishTopicsMeta);

    $("#publishNodesMeta").click(publishNodesMeta);

    $("#publishNodeInputContent").click(publishNodeInputContent);

    $("#publishNodeOutputContent").click(publishNodeOutputContent);

    $("#campaignActivateParams").click(publishActivateParameters);

    $("#paymentProcessorMeta").click(publishPaymentProcessorMeta);

    $("#paymentProcessor").click(publishPaymentProcessorInput);

    $("#campaignSetupParams").click(publishSetupParameters);

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 420,
    useCaseID = 1,
    variationID = 1,
   // postAPI = "http://127.0.0.1:8000/api/webhooks",
    postAPI = "https://cret.chalakh.co/api/webhooks",


    campaignMetaNew = [
        {
          "metaData": {
            "trid": trackingID
          }
        },
      {
        "returnedData": {
          "ctype": "new",
          "vaid": variationID,
          "uscs": useCaseID,
          "tcnt": 1,
          "ncnt": 4,
          "campaignName": "First Survey",
          "webproperty": "bs-local.com",
          "searchType": "",
          "campaignType": "simple",
          "debugMode": true,
          "audioAnnotation": false,
          "visitorGreeting":
            "Hey there! Would you like to know how TESU can help advance your career?"
          ,
          "introduceStory": [],
          "callToAction": [
            {
              "capability": "sendVisitorToHighValuePage",
              "callToAction": "Apply Now",
              "callToActionAttribute": "https://www.tesu.edu/apply"
            },
            {
              "capability": "getVisitorContactInformation",
              "callToAction": "Request Information",
              "callToActionAttribute": ""
            },
            {
              "capability": "downloadImportantDocument",
              "callToAction": "Call Now!",
              "callToActionAttribute": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/docs/catalog-ug.pdf"
            }
          ]
        }
      }
      ],  // important visitor greeting needs to be an array; since converted to NIMB for PA-1

    storyTopicsMeta = [
     {
       "metaData": {
         "trid": trackingID
       }
     },
      {
        "returnedData": [
          {
            "topicID": 0,
            "topicName": "First Survey",
            "topicDescription": "",
            "topicImage": ""
          }
        ]
      }
    ],

    storyNodesMeta = [
      {
        "metaData": {
          "trid": trackingID
        }
      },
      {
        "returnedData": [
          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "yes",
                "skipTo": 1
              },
              {
                "resp": "no",
                "skipTo": 3
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          },
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Name, Business Title & Corporate Address",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          },
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Select Food Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          },
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          }
        ]
      }
    ],

    storyNodesInputContent = [

      {
          "topicID": 0,
          "nodeOrder": 0,
          "nodeDisplayName": "",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": "901_0_0",
          "answerRequired": true,
          "questionType": "singleChoice",
          "searchContent": false,
          "searchQuery": false,
          "conversationBlurbs": [
            "Hi",
            "All I need are answers to a few Qs",
            "So that we can send a free copy of Packaging World - a magzine for professionals in Packaging Industry",
            "Please confirm that you would like to receive Packaging World"
          ],
          "audioAnnotation": [],
          "nodeInputContent": [
            {
              "displayName": "Yes",
              "returnValue": "yes"
            },
            {
              "displayName": "No",
              "returnValue": "no"
            }
          ]
        },

      {
          "topicID": 0,
          "nodeOrder": 1,
          "nodeDisplayName": "Your Name, Business Title & Company",
          "nodeContentId": "901_0_1",
          "nodeTemplateCategory": "contactDataCollector",
          "answerRequired": true,
          "conversationBlurbs": [
            "We have your company name & tile as shown below",
            "Please confirm if there are errors"
          ],
          "audioAnnotation": [],
          "nodeInputContent": [
            {
              "fieldName": "firstName",
              "required": true,
              "label": "First Name"
            },
            {
              "fieldName": "lastName",
              "required": true,
              "label": "Last Name"
            },
            {
              "fieldName": "businessTitle",
              "required": true,
              "label": "Business Title"
            },
            {
              "fieldName": "company",
              "required": true,
              "label": "Company"
            }
          ]

      },

       {
          "topicID": 0,
          "nodeOrder": 2,
          "nodeDisplayName": "Food Products",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": "901_0_7",
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
          "searchQuery": false,
          "conversationBlurbs": [
            "Food product categories",
            "Choose all products that apply to you"
          ],
          "audioAnnotation": [],
          "nodeInputContent": [
            {
              "displayName": "Bakery & Snack",
              "returnValue": "bakerySnack"
            },
            {
              "displayName": "Cereals, Breakfast Foods",
              "returnValue": "cerealsBreakfast"
            },
            {
              "displayName": "Confection & Candy",
              "returnValue": "confectionCandy"
            },
            {
              "displayName": "dairy",
              "returnValue": "Dairy"
            },
            {
              "displayName": "Fruits, Vegetables",
              "returnValue": "fruits"
            },
            {
              "displayName": "Grains, Seeds, Beans, Flour",
              "returnValue": "grains"
            },
            {
              "displayName": "Meat, Poultry, Seafood",
              "returnValue": "meat"
            },
            {
              "displayName": "Pet Food, Pet Care",
              "returnValue": "petFood"
            },
            {
              "displayName": "Prepared Foods",
              "returnValue": "preparedFoods"
            },
            {
              "displayName": "Soups, Spices, etc",
              "returnValue": "soups"
            },
            {
              "displayName": "Frozen, Refrigerated Foods",
              "returnValue": "frozenFoods"
            },
            {
              "displayName": "Nutraceutical, Vitamin, Supplement",
              "returnValue": "vitamin"
            },
            {
              "displayName": "Other",
              "returnValue": "other"
            }
          ]

      },

       {
          "topicID": 0,
          "nodeOrder": 3,
          "nodeDisplayName": "",
          "nodeTemplateCategory": "terminateConversation",
          "nodeContentId": "901_0_16",
          "terminationMode": "exitOnCurrentPage",
          "conversationBlurbs": [],
          "audioAnnotation": [],
          "nodeInputContent": [
            {
              "exitMessage": [
                "Thank you so much!!",
                "I hope you like the magazine",
                "Good Bye Now!"
              ]
            }
          ]

      },

  ];

    setupParameters = [
    {
      "metaData": {
        "trid": "3890"
      }
    },
      {
        "returnedData": {
          "traffic": [
            "all",
            "email",
            "textMsg",
            "direct"
          ],
          "pageType": "website",
          "device": [
            "mobile",
            "desktop",
            "tablet"
          ],
          "region": [
            "USA",
            "CANADA"
          ],
          "pageTarget": [
            {
              "group": [
                {
                  "subGroup": {
                    "urlCategory": "url host",
                    "subGroupLogicOperand": "null",
                    "subGroupMatch": [
                      {
                        "urlCategoryMatchType": "is",
                        "urlCategoryValue": "bs-local.com:63342"
                      }
                    ]
                  }
                },
                {
                  "subGroup": {
                    "urlCategory": "url path",
                    "subGroupLogicOperand": "and",
                    "subGroupMatch": [
                      {
                        "urlCategoryMatchType": "is",
                        "urlCategoryValue": "/chso/clientPageWithSnippet.html"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    ];

    activateParameters = [
        {
          "metaData": {
            "trid": "544"
          }
        },
      {
        "returnedData": {
          "trafficAllocatedToBot": "1.0",
          "optimization": {
            "optimizationMethod": "manualOptimization",
            "conversationInitiationMode": "hybrid",
            "websiteBehaviour": [
              {
                "behaviorType": "secondsOnPage",
                "triggerValue": "30",
                "logicOperand": null
              },
              {
                "behaviorType": "secondsOnWebsite",
                "triggerValue": "60",
                "logicOperand": "or"
              },
              {
                "behaviorType": "pageViews",
                "triggerValue": "1",
                "logicOperand": "and"
              }
            ]
          },
          "schedule": {
            "timeZone": "EST",
            "scheduledHours": [
              {
                "day": "Monday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Tuesday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Wednesday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Thursday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Friday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Saturday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Sunday",
                "from": "0",
                "to": "23"
              }
            ]
          }
        }
      }

      ]; // json for manual optimization, scroll depth commented out, since a little complicaed

    SelfactivateParameters = [
    {
      "metaData": {
        "trid": "544"
      }
    },
    {
      "returnedData": {
        "trafficAllocatedToBot": "1.0",
        "optimization": {
          "optimizationMethod": "selfOptimization",

        },
        "schedule":
          {
            "timeZone": "EST",
            "scheduledHours": [
              {
                "day": "Monday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Tuesday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Wednesday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Thursday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Friday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Saturday",
                "from": "0",
                "to": "23"
              },
              {
                "day": "Sunday",
                "from": "0",
                "to": "23"
              }
            ]
          }

      }
    }
  ]; // json for self optimization

    conversionParameters = [
    {
      "metaData": {
        "trid": trackingID
      }
    },
    {
      "returnedData": {
        "includeSmartProbe": false,
        "goal": []

      }
    }];

    function postPayload(dataToBeSent, webHookType, trid) { // for now for surveys, answers and contact information - but can be for other user case

        apiURL = postAPI +'?whtype=' + webHookType + '&trid=' + trid;
        dataToBeSent = JSON.stringify(dataToBeSent); // if the object is not pure JSON the data is not posted
        var deferred = $.Deferred();
        $.ajax({
          method: 'POST', // only post is valid
          dataType: 'json', // this is what is received;
          //  contentType: "application/x-www-form-urlencoded", // data being sent; this format means a key-value pair
          contentType: "application/json", // IMPORTANT. DONT use it this will trigger a preflight handshake, with an OPTIONS call; Need Laravel to Handle that
          data: dataToBeSent,

          url: apiURL,
          success: function (response, status, xhr) { // What to do if we succeed
            console.log(response, status);
            try {
              var q = JSON.parse(response);
            } catch (e) {
              var a = JSON.stringify(response);
            }
            console.log(response, status, xhr.statusText);
            deferred.resolve(response);

          },
          error: function (jqXHR, response, textStatus, errorThrown) { // What to do if we fail
            console.log(JSON.stringify(jqXHR));
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            deferred.reject(response);
          }
        });
        return deferred.promise();
  } // with concept of promise

    function newCampaignMeta(a) {

      var response = postPayload(campaignMetaNew, 'start', trackingID);

    }

    function updateCampaignMeta(a) {

      var response = postPayload(campaignMetaUpdate, 'start', trackingID);

    }

    function publishPaymentProcessorInput(a) {
      var payload = [];
      metaData = {"trid":trackingID};
      payload[0] = {metaData};

      returnedData = paymentProcessorNodeInputContent;
      payload[1] = {returnedData};
      var response = postPayload(payload, 'nodeInputContent', trackingID);

    }

    function publishTopicsMeta(a) {

    var response = postPayload(storyTopicsMeta, 'topicsMeta', trackingID);

  }

    function publishPaymentProcessorMeta(a) {

      var response = postPayload(paymentProcessorMeta, 'nodesMeta', trackingID);

  }

    function publishNodesMeta(a) {

      var response = postPayload(storyNodesMeta, 'nodesMeta', trackingID);

    }

    function publishNodeInputContent(a) {

       var payload = [];

       metaData = {"trid":trackingID};
       payload[0] = {metaData};

      for (var n = 0; n < storyNodesInputContent.length; n++) {

          returnedData = storyNodesInputContent[n];
          payload[1] = {returnedData};
          var response = postPayload(payload, 'nodeInputContent', trackingID);
        }

    }

    function publishNodeOutputContent(a) {

    var payload = [];

    metaData = {"trid":trackingID};
    payload[0] = {metaData};

    for (var n = 0; n < storyNodesOutputContent.length; n++) {

      returnedData = storyNodesOutputContent[n];
      payload[1] = {returnedData};
      var response = postPayload(payload, 'nodeOutputContent', trackingID);
    }

  }

    function publishSetupParameters(a) {

    var response = postPayload(setupParameters, 'setup', trackingID);

    }

    function publishActivateParameters(a) {

    var response = postPayload(activateParameters, 'activate', trackingID);

  }

  //https://www.webniraj.com/2018/10/08/making-ajax-calls-sequentially-using-jquery/

    function publishCampaignConversionGoals(a) {

      var response = postPayload(conversionParameters, 'cgoal', trackingID);

    }

    function synchronousStuff(a) {

      var items = [ [campaignMetaNew, 'start', trackingID],
                    [storyTopicsMeta, 'topicsMeta', trackingID],
                    [storyNodesMeta, 'nodesMeta', trackingID],
                    ];

        var looper = $.Deferred().resolve();

        // go through each item and call the ajax function
          $.when.apply($, $.map(items, function(item, i) {
            looper = looper.then(function() {
                // trigger ajax call with item data
                return postPayload(item[0], item[1], item[2]);
            });
            return looper;
          })).then(function() {
            // run this after all ajax calls have completed
            console.log('Done!');
          });
    } // to make sure campaign meta, topics meta, and node meta are published sequentially

    function asynchronousStuff(a) {

       var response = publishNodeInputContent(a);
       var response = publishSetupParameters(a);
       var response = publishActivateParameters(a);
       var response = publishCampaignConversionGoals(a);

  }  // rest of the stuff - node input, activate, setup object

    function updateCampaignAll(a) {

      var response = updateCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeOutputContent(a);
      var response = publishSetupParameters(a);
      var response = publishActivateParameters(a);

  }

    function endPublishing(a) {

      var response = postPayload(null, 'end', trackingID);

    }



});



