var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter current age"));
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
    alert("Age in Years = " + floatAge + "\nAge in Days = " + floatDays + "\nAge in Months = " + floatMonths + "\nAge in Weeks = " + intWeeks + "\nAge in Fortnights = " + intFortnights);