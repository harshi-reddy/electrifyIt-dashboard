import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const data=[
    {
      "id": 1,
      "LicensePlate": "NGX4CPH",
      "Make": "Tesla",
      "VIN": "KYGKGBXYN5Z184ZKW",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/04/25",
      "MilesDriven": 199
    },
    {
      "id": 2,
      "LicensePlate": "65FEMCT",
      "Make": "Nikola",
      "VIN": "GH8ZYDE3XW7HNWXUK",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2024/03/07",
      "MilesDriven": 276
    },
    {
      "id": 3,
      "LicensePlate": "H7MDRKG",
      "Make": "GM Envolv",
      "VIN": "0CREARYENKERES04F",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/12/12",
      "MilesDriven": 199
    },
    {
      "id": 4,
      "LicensePlate": "9FKNTBR",
      "Make": "GM Envolv",
      "VIN": "HJCHNPVWGHVUTYAN9",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/04/01",
      "MilesDriven": 280
    },
    {
      "id": 5,
      "LicensePlate": "5S2ZBA3",
      "Make": "GM Envolv",
      "VIN": "0NN849UBPG7S07EWJ",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2024/03/12",
      "MilesDriven": 166
    },
    {
      "id": 6,
      "LicensePlate": "RS9CLS0",
      "Make": "GM Envolv",
      "VIN": "135USCY8DNENMK7UV",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/12/17",
      "MilesDriven": 255
    },
    {
      "id": 7,
      "LicensePlate": "SYC61UR",
      "Make": "Nikola",
      "VIN": "7L5AE57JWC8KNP5E2",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/11/16",
      "MilesDriven": 236
    },
    {
      "id": 8,
      "LicensePlate": "6CNVB44",
      "Make": "Tesla",
      "VIN": "9RUB6H2FVUJTKLGCY",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/07/12",
      "MilesDriven": 227
    },
    {
      "id": 9,
      "LicensePlate": "ZETGP1S",
      "Make": "BYD Auto",
      "VIN": "9MJ8SBKT6APRDEASS",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2023/12/29",
      "MilesDriven": 274
    },
    {
      "id": 10,
      "LicensePlate": "E56XNSD",
      "Make": "Tesla",
      "VIN": "GSRWTLLW92WXEAUXP",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/04/07",
      "MilesDriven": 278
    },
    {
      "id": 11,
      "LicensePlate": "V9VRV6W",
      "Make": "Nikola",
      "VIN": "B6ZUK9L6SGT6XSPS5",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/07/12",
      "MilesDriven": 194
    },
    {
      "id": 12,
      "LicensePlate": "658KWK9",
      "Make": "BYD Motors",
      "VIN": "NEZA9FE5ZR06WFWFV",
      "Model": "K7M '30 Transit Bus, 2021",
      "Type": "Bus",
      "Date": "2023/11/22",
      "MilesDriven": 166
    },
    {
      "id": 13,
      "LicensePlate": "2WY0GW6",
      "Make": "Ree",
      "VIN": "0U4M6F4YU7EM28WCY",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2024/01/31",
      "MilesDriven": 193
    },
    {
      "id": 14,
      "LicensePlate": "VZ9L0DX",
      "Make": "BYD Auto",
      "VIN": "HAD62PSEZKK414JAE",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2023/09/11",
      "MilesDriven": 130
    },
    {
      "id": 15,
      "LicensePlate": "EPXFB3E",
      "Make": "BYD Auto",
      "VIN": "R73ME9A76PVMMTFPS",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2023/10/14",
      "MilesDriven": 235
    },
    {
      "id": 16,
      "LicensePlate": "44ECM9T",
      "Make": "Nikola",
      "VIN": "UFCU13WTWSFARRJL6",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/09/09",
      "MilesDriven": 159
    },
    {
      "id": 17,
      "LicensePlate": "PFRBL79",
      "Make": "Nikola",
      "VIN": "35L46UWN4GWBRV981",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2024/02/23",
      "MilesDriven": 233
    },
    {
      "id": 18,
      "LicensePlate": "P9U2XAG",
      "Make": "BYD Auto",
      "VIN": "XLTXX3WWE3SLMWMYN",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2023/05/27",
      "MilesDriven": 248
    },
    {
      "id": 19,
      "LicensePlate": "PJ9L5M9",
      "Make": "BYD Auto",
      "VIN": "DLA5T87HZA0XDZK79",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2024/03/07",
      "MilesDriven": 206
    },
    {
      "id": 20,
      "LicensePlate": "CCXLDHK",
      "Make": "Ree",
      "VIN": "NKBLJY7U4FH1JB9A3",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/07/18",
      "MilesDriven": 131
    },
    {
      "id": 21,
      "LicensePlate": "AP4U9NW",
      "Make": "GM Envolv",
      "VIN": "4J9F9YRCW8T4TE2XN",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/07/28",
      "MilesDriven": 272
    },
    {
      "id": 22,
      "LicensePlate": "3N6CHH4",
      "Make": "BYD Auto",
      "VIN": "A8G6S531N76XX2PP8",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2023/12/10",
      "MilesDriven": 125
    },
    {
      "id": 23,
      "LicensePlate": "W9JGKNW",
      "Make": "BYD Motors",
      "VIN": "E6330XLX7C8P94W9B",
      "Model": "K7M '30 Transit Bus, 2021",
      "Type": "Bus",
      "Date": "2024/02/18",
      "MilesDriven": 106
    },
    {
      "id": 24,
      "LicensePlate": "DKVXAZX",
      "Make": "Tesla",
      "VIN": "XT2C6LXFPMZDL5U7E",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/06/21",
      "MilesDriven": 216
    },
    {
      "id": 25,
      "LicensePlate": "PM7502X",
      "Make": "Ree",
      "VIN": "2U6299Y3CZAVKLMKN",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2024/02/15",
      "MilesDriven": 229
    },
    {
      "id": 26,
      "LicensePlate": "D9UNX48",
      "Make": "Tesla",
      "VIN": "XEYVEBLKE90CA7F12",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2024/02/28",
      "MilesDriven": 297
    },
    {
      "id": 27,
      "LicensePlate": "41CGPVY",
      "Make": "Nikola",
      "VIN": "A6YVZL42E6RCVV7AV",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/05/15",
      "MilesDriven": 159
    },
    {
      "id": 28,
      "LicensePlate": "GNJTGTL",
      "Make": "Ree",
      "VIN": "T4F2DF6W0E11FVD9V",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/09/08",
      "MilesDriven": 126
    },
    {
      "id": 29,
      "LicensePlate": "166349D",
      "Make": "Ree",
      "VIN": "TZZRBLWBYR3338KDX",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/04/02",
      "MilesDriven": 266
    },
    {
      "id": 30,
      "LicensePlate": "70GRUG7",
      "Make": "GM Envolv",
      "VIN": "GSG9NBPHH2ME514SM",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/07/29",
      "MilesDriven": 106
    },
    {
      "id": 31,
      "LicensePlate": "T6RNLJT",
      "Make": "Nikola",
      "VIN": "AKKW83X3HCUNF22CE",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/08/15",
      "MilesDriven": 252
    },
    {
      "id": 32,
      "LicensePlate": "WHJW9HJ",
      "Make": "BYD Motors",
      "VIN": "U55KVCF527670K2V2",
      "Model": "K7M '30 Transit Bus, 2021",
      "Type": "Bus",
      "Date": "2023/04/15",
      "MilesDriven": 190
    },
    {
      "id": 33,
      "LicensePlate": "PBT024J",
      "Make": "GM Envolv",
      "VIN": "35MGUFDY66PFNNAR9",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/06/07",
      "MilesDriven": 201
    },
    {
      "id": 34,
      "LicensePlate": "P9G0KP2",
      "Make": "Ree",
      "VIN": "RFL7HPDK3N61DX1DJ",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/05/04",
      "MilesDriven": 279
    },
    {
      "id": 35,
      "LicensePlate": "CWYRHAS",
      "Make": "BYD Motors",
      "VIN": "RHY7YFRW5808V9MP5",
      "Model": "K7M '30 Transit Bus, 2021",
      "Type": "Bus",
      "Date": "2024/02/15",
      "MilesDriven": 151
    },
    {
      "id": 36,
      "LicensePlate": "X0H4BN8",
      "Make": "Tesla",
      "VIN": "3Z61XGUCJW9W05152",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/08/14",
      "MilesDriven": 277
    },
    {
      "id": 37,
      "LicensePlate": "F2LAKAW",
      "Make": "GM Envolv",
      "VIN": "9FMB13AATA6U31535",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/04/12",
      "MilesDriven": 257
    },
    {
      "id": 38,
      "LicensePlate": "8YLTK6B",
      "Make": "GM Envolv",
      "VIN": "VUVC60DCRHHCJ3ZA6",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2024/01/25",
      "MilesDriven": 191
    },
    {
      "id": 39,
      "LicensePlate": "RTDZGM0",
      "Make": "Nikola",
      "VIN": "2378NJU70BE767K6X",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/08/14",
      "MilesDriven": 109
    },
    {
      "id": 40,
      "LicensePlate": "M4N03GW",
      "Make": "BYD Motors",
      "VIN": "2WR47S9KYKGPGMSFM",
      "Model": "K7M '30 Transit Bus, 2021",
      "Type": "Bus",
      "Date": "2023/09/23",
      "MilesDriven": 203
    },
    {
      "id": 41,
      "LicensePlate": "XPD4LG0",
      "Make": "Tesla",
      "VIN": "X1P1K92BUGRV0ZS4R",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2024/03/21",
      "MilesDriven": 261
    },
    {
      "id": 42,
      "LicensePlate": "MXVDW1X",
      "Make": "Ree",
      "VIN": "CACDJZYERZB0XGPED",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/09/12",
      "MilesDriven": 267
    },
    {
      "id": 43,
      "LicensePlate": "UXJ4VN8",
      "Make": "Nikola",
      "VIN": "DYDDFV57AN9TDMVSU",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/09/19",
      "MilesDriven": 213
    },
    {
      "id": 44,
      "LicensePlate": "31CAKZH",
      "Make": "Nikola",
      "VIN": "JW4H0MM6WVEVKCC3B",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/10/06",
      "MilesDriven": 260
    },
    {
      "id": 45,
      "LicensePlate": "9B3LF7X",
      "Make": "Nikola",
      "VIN": "LCLER06HX8RVLLGUC",
      "Model": "TRE BEV, 2022",
      "Type": "Truck",
      "Date": "2023/12/05",
      "MilesDriven": 237
    },
    {
      "id": 46,
      "LicensePlate": "CSW0CVM",
      "Make": "Tesla",
      "VIN": "FKJB60ZA4M06ST3PY",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2023/12/19",
      "MilesDriven": 248
    },
    {
      "id": 47,
      "LicensePlate": "335BG7L",
      "Make": "GM Envolv",
      "VIN": "3JY7YLB7PM3TKL7CP",
      "Model": "Brightdrop zevo 600, 2022",
      "Type": "Van",
      "Date": "2023/08/30",
      "MilesDriven": 204
    },
    {
      "id": 48,
      "LicensePlate": "82WP4GE",
      "Make": "Tesla",
      "VIN": "H2MS03L9LAH53AJM0",
      "Model": "Semi Delivery Event, 2022",
      "Type": "Truck",
      "Date": "2024/02/10",
      "MilesDriven": 208
    },
    {
      "id": 49,
      "LicensePlate": "EEPZF54",
      "Make": "BYD Auto",
      "VIN": "J32NKJAZTC2DCDU86",
      "Model": "Class 6F cab & chassis 2022",
      "Type": "Truck",
      "Date": "2024/03/15",
      "MilesDriven": 268
    },
    {
      "id": 50,
      "LicensePlate": "B0CPZJV",
      "Make": "Ree",
      "VIN": "83ZU26W48SU8WU1G5",
      "Model": "P7 chassis cab 2023",
      "Type": "Van",
      "Date": "2023/10/02",
      "MilesDriven": 141
    }
  ]
  

// const uri = 'mongodb+srv://root:root@cluster0.n03hxot.mongodb.net/';
// const client = new MongoClient(uri);

// const dbName = 'dashboard';

// client.connect()
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });


  app.get('/api/data', async (req, res) => {
    // const db = client.db(dbName);
    // const collection = db.collection('dashboard');

    // const data = await collection.find().toArray();
    // console.log(data)
    let { frequency, startDate, endDate } = req.query;
    startDate = startDate ? new Date(startDate) : null;
    endDate = endDate ? new Date(endDate) : null;

    let filtered = data.filter(item => {
        if (!startDate || !endDate) return true;
        const itemDate = new Date(item.Date);

        if (itemDate < startDate || itemDate > endDate) {
            return false;
        }

        switch (frequency) {
            case 'Daily':
                return itemDate >= startDate && itemDate <= endDate;
            case 'Weekly':
                const weekStart = new Date(startDate);
                weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                const weekEnd = new Date(endDate);
                weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
                return itemDate >= weekStart && itemDate <= weekEnd;
            case 'Monthly':
                return itemDate >= startDate && itemDate <= endDate;
            case 'Yearly':
                return itemDate.getFullYear() >= startDate.getFullYear() &&
                    itemDate.getFullYear() <= endDate.getFullYear();
            default:
                return true;
        }
    });

    const groupedData = groupData(filtered, frequency);
    const totals = calculateTotals(groupedData);
  
    res.json({groupedData,totals});
});

function calculateTotals(groupedData){
    const totals = {
        daily : 0,
        weekly: 0,
        monthly: 0,
        yearly: 0
    };

    for(const key in groupedData){
        if(groupedData.hasOwnProperty(key)){
            const group = groupedData[key];
            group.forEach(item=>{
                totals.daily+= item.MilesDriven;
            });
            totals.weekly += group.reduce((acc,item)=> acc+item.MilesDriven,0);
        }
    }

    for(const key in groupedData){
        if(groupedData.hasOwnProperty(key)){
            const group = groupedData[key];
            totals.monthly += group.reduce((acc,item)=> acc+item.MilesDriven,0);
        }
    }

    for(const key in groupedData){
        if(groupedData.hasOwnProperty(key)){
            const group = groupedData[key];
            totals.yearly += group.reduce((acc,item)=> acc+item.MilesDriven,0);
        }
    }
    return totals
}

function groupData(data, frequency) {
    const sortedData = data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    const grouped = {};
    sortedData.forEach(item => {
        const itemDate = new Date(item.Date);

        let key;
        switch (frequency) {
            case 'Weekly':
                const weekStart = new Date(itemDate);
                weekStart.setDate(itemDate.getDate() - itemDate.getDay());
                key = weekStart.toISOString().substring(0, 10);
                break;
            case 'Monthly':
                key = `${itemDate.getFullYear()}-${itemDate.getMonth() + 1}`;
                break;
            case 'Yearly':
                key = `${itemDate.getFullYear()}`;
                break;
            default:
                key = 'All'; 
                break;
        }

        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
    });
    return grouped;
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
