const defaultResults = JSON.parse(`[
    {
      "Version": 1,
      "Key": "328328",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "London",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "LND",
        "LocalizedName": "London"
      }
    },
    {
      "Version": 1,
      "Key": "264120",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Lima",
      "Country": {
        "ID": "PE",
        "LocalizedName": "Peru"
      },
      "AdministrativeArea": {
        "ID": "LMA",
        "LocalizedName": "Lima"
      }
    },
    {
      "Version": 1,
      "Key": "102246",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Lanzhou",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "GS",
        "LocalizedName": "Gansu"
      }
    },
    {
      "Version": 1,
      "Key": "260622",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Lahore",
      "Country": {
        "ID": "PK",
        "LocalizedName": "Pakistan"
      },
      "AdministrativeArea": {
        "ID": "PB",
        "LocalizedName": "Punjab"
      }
    },
    {
      "Version": 1,
      "Key": "58668",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Langfang",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "HE",
        "LocalizedName": "Hebei"
      }
    },
    {
      "Version": 1,
      "Key": "59411",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Loudi",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "HN",
        "LocalizedName": "Hunan"
      }
    },
    {
      "Version": 1,
      "Key": "60972",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Leshan",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "SC",
        "LocalizedName": "Sichuan"
      }
    },
    {
      "Version": 1,
      "Key": "60636",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Liaocheng",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "SD",
        "LocalizedName": "Shandong"
      }
    },
    {
      "Version": 1,
      "Key": "60637",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Linyi",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "SD",
        "LocalizedName": "Shandong"
      }
    },
    {
      "Version": 1,
      "Key": "60838",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Linfen",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "SX",
        "LocalizedName": "Shanxi"
      }
    }
  ]`);

  let temp = JSON.parse(`{
    "Version": 1,
    "Key": "60838",
    "Type": "City",
    "Rank": 13,
    "LocalizedName": "Linfen",
    "Country": {
      "ID": "CN",
      "LocalizedName": "China"
    },
    "AdministrativeArea": {
      "ID": "SX",
      "LocalizedName": "Shanxi"
    }
  }`);

  const defaultCity = JSON.parse(`
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    }`);


const resultsReducer = (state = {
    selectedResult: defaultCity
}, action) => {
    switch(action.type){
        case 'selected':
            return {
                selectedResult: action.selectedResult
            }
        default: return state;
    }
}

export default resultsReducer;