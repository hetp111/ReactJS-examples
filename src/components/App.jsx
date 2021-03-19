import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

let cardList = [];

for (let i = 0; i < contacts.length; i++) {
    cardList.push(
        <Card
            id={contacts[i].id}
            key={contacts[i].id}//has to be spelled as "key", dont use it yourself
            name={contacts[i].name}
            img={contacts[i].imgURL}
            tel={contacts[i].phone}
            email={contacts[i].email}
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg" />
            {cardList}
        </div>
    );
}

export default App;
