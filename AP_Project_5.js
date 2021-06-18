function countryselection() {
    var x = document.getElementById("continent").selectedIndex;
    
    if ((document.getElementsByTagName("option")[x].value) == "Asia") {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in Asia
        const as = [
            "Choose country",
            "Afganishtan",
            "Armenia",
            "Azerbaijan",
            "Bahrain",
            "Bangladesh",
            "Bhutan",
            "Brunei",
            "Burma",
            "Cambodia",
            "China",
            "Cyprus",
            "Georgia",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Israel",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Lebanon",
            "Malaysia",
            "Maldives",
            "Mongolia",
            "Nepal",
            "North Korea",
            "Oman",
            "Pakistan",
            "Palestine",
            "Philippines",
            "Qatar",
            "Russia",
            "Saudi Arabia",
            "Singapore",
            "South Korea",
            "Sri Lanka",
            "Syria",
            "Tajikistan",
            "Thailand",
            "Timor-Leste",
            "Turkey",
            "Turkmenistan",
            "United Arab Emirates",
            "Uzbekistan",
            "Vietnam",
            "Yemen",
        ];
        let len = as.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", as[i]);
            let val = document.createTextNode(as[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
    }
    else if ((document.getElementsByTagName("option")[x].value) == "Africa") {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in Africa
        const af = [
            "Choose country",
            "Algeria",
            "Angola",
            "Benin",
            "Botswana",
            "Burkina Faso",
            "Burundi",
            "Cameroon",
            "Cape Verde",
            "Central African Republic",
            "Chad",
            "Comoros",
            "Congo",
            "Côte d'Ivoire",
            "Djibouti",
            "DR Congo",
            "Egypt",
            "Equatorial Guinea",
            "Eritrea",
            "Eswatini",
            "Ethiopia",
            "Gabon",
            "Gambia",
            "Ghana",
            "Guinea",
            "Guinea-Bissau",
            "Kenya",
            "Lesotho",
            "Liberia",
            "Libya",
            "Madagascar",
            "Malawi",
            "Mali",
            "Mauritania",
            "Mauritius",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Niger",
            "Nigeria",
            "Rwanda",
            "Sao Tome & Principe",
            "Senegal",
            "Seychelles",
            "Sierra Leone",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Sudan",
            "Tanzania",
            "Togo",
            "Tunisia",
            "Uganda",
            "Zambia",
            "Zimbabwe"
        ];

        let len = af.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", af[i]);
            let val = document.createTextNode(af[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }

    }
    else if ((document.getElementsByTagName("option")[x].value) == "Europe") {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in Europe
        const eur = [
            "Choose country",
            "Aland Islands",
            "Albania",
            "Andorra",
            "Austria",
            "Belarus",
            "Belgium",
            "Bosnia and Herzegovina",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Faroe Islands",
            "Finland",
            "France",
            "Germany",
            "Gibraltar",
            "Greece",
            "Guernsey",
            "Hungary",
            "Iceland",
            "Ireland",
            "Isle of Man",
            "Italy",
            "Jersey",
            "Kosovo",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Malta",
            "Moldova",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Russia",
            "San Marino",
            "Serbia",
            "Serbia and Montenegro",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Svalbard and Jan Mayen",
            "Sweden",
            "Switzerland",
            "Ukraine",
            "United Kingdom",
            "Vatican"
        ];
        let len = eur.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", eur[i]);
            let val = document.createTextNode(eur[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
    }
    else if ((document.getElementsByTagName("option")[x].value) == "North America") {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in North America
        const na = [
            "Choose country",
            "Antigua and Barbuda",
            "Bahamas",
            "Barbados",
            "Belize",
            "Canada",
            "Costa Rica",
            "Cuba",
            "Dominica",
            "Dominican Republic",
            "El Salvador",
            "Grenada",
            "Guatemala",
            "Haiti",
            "Honduras",
            "Jamaica",
            "Mexico",
            "Nicaragua",
            "Panama",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Vincent and the Grenadines",
            "Trinidad and Tobago",
            "United States of America (USA)",
        ];
        let len = na.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", na[i]);
            let val = document.createTextNode(na[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
    }

    else if ((document.getElementsByTagName("option")[x].value) == "South America")
    {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in South America
        const sa=[
            "Choose country",
            "Argentina",
            "Bolivia",
            "Brazil",
            "Chile",
            "Colombia",
            "Ecuador",
            "Guyana",
            "Paraguay",
            "Peru",
            "Suriname",
            "Uruguay",
            "Venezuela"
          ];
          let len = sa.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", sa[i]);
            let val = document.createTextNode(sa[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
       
    }
    else if ((document.getElementsByTagName("option")[x].value) == "Australia")
    {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        //countries in Australia
        const aust=[
            "Choose country",
            "Australia",
            "Fiji",
            "Kiribati",
            "Marshall Islands",
            "Micronesia",
            "Nauru",
            "New Zealand",
            "Palau",
            "Papua New Guinea",
            "Samoa",
            "Solomon Islands",
            "Tonga",
            "Tuvalu",
            "Vanuatu"
          ];
          let len = aust.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", aust[i]);
            let val = document.createTextNode(aust[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
        
    }
    else if ((document.getElementsByTagName("option")[x].value) == "Antartica")
    {
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
     //there are actually zero countries in Antartica, so taking itself as country by default
         const antar=["Choose country","Antartica"];
         let len = antar.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value", antar[i]);
            let val = document.createTextNode(antar[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
    }
    else if ((document.getElementsByTagName("option")[x].value) == "null"){
        //clearing content of previous list
        document.getElementById("country").innerHTML = "";
        const n=["First choose continent"];
        let len = n.length;
        for (let i = 0; i < len; i++) {
            let v = document.createElement("option");
            v.setAttribute("value","");
            let val = document.createTextNode(n[i]);
            v.appendChild(val);
            document.getElementById("country").appendChild(v);
        }
    }

}
function handleForm(){
    var title=document.getElementById("title").value;
    if(title=="")
    {
        alert("Please fill the Title");
        document.getElementById("title").focus();
        return false;
    }
    var description=document.getElementById("description").value;
    if(description=="")
    {
        alert("Please fill the Description");
        document.getElementById("description").focus();
        return false;
    }
    var continent=document.getElementById("continent").value;
    var country=document.getElementById("country").value;
    if(continent=="null"|| country=="Choose country")
    {
        alert("Please fill continent and country");
        document.getElementById("continent").focus();
        document.getElementById("country").focus();
        return false;
    }
    var city=document.getElementById("city").value;
    if(city=="")
    {
        alert("Please fill the city");
        document.getElementById("city").focus();
        return false;
    }
    var rightsreserved=document.getElementById("all_rights_reserved").checked;
    var creativecommons=document.getElementById("creative_commons").checked;
    if(!rightsreserved && !creativecommons)
    {
        alert("Please fill copywrite");
        document.getElementById("copywrite").focus();
        return false;
    }
    var attribution=document.getElementById("attribution").checked;
    var noncommercial=document.getElementById("noncommercial").checked;
    var noderivativework=document.getElementById("no_derivative_work").checked;
    var sharealike=document.getElementById("share_alike").checked;
    if(!attribution && !noncommercial && !noderivativework && !sharealike)
    {
        alert("Please fill creative common type");
        document.getElementById("creativecommontypes").focus();
        return false;
    }
    var accept=document.getElementById("accept").checked;
    if(!accept)
    {
        alert("Please accept the software license");
        document.getElementById("accept").focus();
        return false;
    }

    return confirm
    ("Make sure you have set the rating, color, date and time accordingly, if not then cancel and set those values carefully, otherwise click okay to submit");
}
function ask(){
    return confirm("Are you sure you want to reset if yes then click okay to proceed");
}