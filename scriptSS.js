function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//Variables for dates we want to mark: Day and Month
var birthday = [27,3];
var mom_birthday = [1, 3];
var dad_birthday = [15, 9];
var national_holidays = [ [1, 1], [1, 5], [27, 5], [12, 6], [1, 10], [25, 12], [26, 12] ];
//Variables

months = monthDefault;
days = dayDefault;

var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    var classString = "";
    // creating all cells

    //This variable stores the day number in the current month
    var date = 1;
    
    //Creates each row
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        //Creates each column of table
        for ( var j = 0; j < 7; j++ ) {
            
            /*If current cell on first row is less than starting day of month
            Don't print anything in cell*/
           if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } 
            else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                    cell.setAttribute("title", "Today")
                }
                if ( classString = checkDates(date, month+1) ) {
                    cell.className = classString;
                }
                row.appendChild(cell);
                date++;
            }
            
        }

        tbl.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function checkDates(bDay, bMonth) {
    if(bDay === birthday[0] && bMonth === birthday[1]) {
        return "birthday";
    }
    else if(bDay === mom_birthday[0] && bMonth === mom_birthday[1]) {
        return "mom-birthday";
    }
    else if(bDay === dad_birthday[0] && bMonth === dad_birthday[1]) {
        return "dad-birthday";
    }
    
    for(var i = 0; i < national_holidays.length; i++) {
        if(bDay === national_holidays[i][0] && bMonth === national_holidays[i][1]) {
            return "holiday";
        }
    }
}
