import React from "react";

const menu = () => {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return (
        <div className="tab">
            <a href="#profile">
                <button className="tablinks" onClick={event => {openTab(event, 'profile')}}>Profile</button>
            </a>
            <a href="#experience">
                <button className="tablinks" onClick={event => {openTab(event, 'experience')}}>Experiences</button>
            </a>
            <a href="#ability">
                <button className="tablinks" onClick={event => {openTab(event, 'ability')}}>Abilities</button>
            </a>
        </div>
    );
}

export default menu;