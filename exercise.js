var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE Return the total number of records
    //-------------------------------------------
    datalen=('There are ' + JSON.stringify(chicago.data.length) + ' records of crimes in the dataset.')
    return datalen;
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE Return the number of crimes for the given district
    //-------------------------------------------
    //Note: districts are column 20(so index 19) of each crime datapoint array
    //Code will count how many of the specified district in the distric column
    crimecount=0
    for (i=0;i<chicago.data.length;i++){ //Using a full for-loop because I can't figure out how to use foreach and still specify the [19] part
        if (parseInt(chicago.data[i][19],10)==district){crimecount++}
    }
    return ('There are '+JSON.stringify(crimecount)+' crimes in District '+JSON.stringify(district)+'.'); 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE Return the number of crimes for the giving primary type
    //-------------------------------------------    
    //Note: crime types are column 14(so index 13) of each crime datapoint array
    //Code will count how many of the specified crime type is in the crime type column
    crimecount=0
    for (i=0;i<chicago.data.length;i++){ //Using a full for-loop because I can't figure out how to use foreach and still specify the [19] part
        if (chicago.data[i][13]==primaryType){crimecount++}
    }
    return ('There are '+JSON.stringify(crimecount)+' crimes of type '+JSON.stringify(primaryType)+'.'); 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE Return the number of crimes for the given location
    //-------------------------------------------
    //Note: locations(called location descriptions on the table) are column 16(so index 15) of each crime datapoint
    //Code will count how many of the specified crime locations is in the location descrption column
    crimecount=0
    for (i=0;i<chicago.data.length;i++){ //Using a full for-loop because I can't figure out how to use foreach and still specify the [19] part
        if (chicago.data[i][15]==location){crimecount++}
    }
    return ('There are '+JSON.stringify(crimecount)+' crimes in location '+JSON.stringify(location)+'.'); 
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------
    //Note: locations(long&lat) are columns 27&29(so index 26&28) of each crime datapoint array
    //Code will put lat and longitude into array for given crime.
    point={"longitude":{}*chicago.data.length,"latitude":{}*chicago.data.length}
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




