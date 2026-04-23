let panelOneTalks = [];
let panelOneTitle;
let panelOneDescription;

let panelTwoTitle;
let panelTwoDescription;

let onDivOne = null;

let onDivs = [];

let visDesc = null;

function main(stuff) {
    panels = stuff;

    //panelOneTalks = [panels[0].abstractOne, panels[0].abstractTwo];

    if (document.getElementById("panelOneDesc")) {
        document.getElementById("panelOneDesc").innerHTML = panels[0].description;
    }
    onDivs[0] = document.getElementById("panOne").getElementsByTagName('div')[0];
    onDivs[1] = document.getElementById("panTwo").getElementsByTagName('div')[0];
    onDivs[2] = document.getElementById("panThree").getElementsByTagName('div')[0];
    onDivs[3] = document.getElementById("panFour").getElementsByTagName('div')[0];
    onDivs[4] = document.getElementById("panFive").getElementsByTagName('div')[0];
    onDivs[5] = document.getElementById("panSix").getElementsByTagName('div')[0];
    onDivs[6] = document.getElementById("panSeven").getElementsByTagName('div')[0];
    onDivs[7] = document.getElementById("panEight").getElementsByTagName('div')[0];

    if (document.getElementById("panelTwoTitle")) {
        document.getElementById("panelTwoTitle").innerHTML = panels[1].title;
    }
    if (document.getElementById("panelTwoDesc")) {
        document.getElementById("panelTwoDesc").innerHTML = panels[1].description;
    }

    if (document.getElementById("panelThreeTitle")) {
        document.getElementById("panelThreeTitle").innerHTML = panels[2].title;
    }
    if (document.getElementById("panelThreeDesc")) {
        document.getElementById("panelThreeDesc").innerHTML = panels[2].description;
    }

    if (document.getElementById("panelFourTitle")) {
        document.getElementById("panelFourTitle").innerHTML = panels[3].title;
    }
    if (document.getElementById("panelFourDesc")) {
        document.getElementById("panelFourDesc").innerHTML = panels[3].description;
    }

    if (document.getElementById("panelFiveTitle")) {
        document.getElementById("panelFiveTitle").innerHTML = panels[4].title;
    }
    if (document.getElementById("panelFiveDesc")) {
        document.getElementById("panelFiveDesc").innerHTML = panels[4].description;
    }

    if (document.getElementById("panelSixTitle")) {
        document.getElementById("panelSixTitle").innerHTML = panels[5].title;
    }
    if (document.getElementById("panelSixDesc")) {
        document.getElementById("panelSixDesc").innerHTML = panels[5].description;
    }

    if (document.getElementById("panelSevenTitle")) {
        document.getElementById("panelSevenTitle").innerHTML = panels[6].title;
    }
    if (document.getElementById("panelSevenDesc")) {
        document.getElementById("panelSevenDesc").innerHTML = panels[6].description;
    }

    if (document.getElementById("panelEightTitle")) {
        document.getElementById("panelEightTitle").innerHTML = panels[7].title;
    }
    if (document.getElementById("panelEightDesc")) {
        document.getElementById("panelEightDesc").innerHTML = panels[7].description;
    }

    if (document.getElementById("panelNineTitle")) {
        document.getElementById("panelNineTitle").innerHTML = panels[8].title;
    }
    if (document.getElementById("panelNineDesc")) {
        document.getElementById("panelNineDesc").innerHTML = panels[8].description;
    }
}

function changeText(panel, talk, elem) {
    if(visDesc!=null)visDesc.innerHTML = "";
    var x = document.getElementById(elem);
    if (onDivs[panel] != null) onDivs[panel].classList.remove("on");
    onDivs[panel] = x.parentNode;
    onDivs[panel].classList.add("on");
    if (talk == -1) {
        x.innerHTML = panels[panel].description;
        //y.innerHTML = panels[panel].title;
    } else {
        //y.innerHTML = panels[panel].abstracts[talk].title;
        x.innerHTML = panels[panel].abstracts[talk].description;
        visDesc = x;
    }
}



