import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState("");
    const [commentValue, setCommentValue] = React.useState("");
    const [newsletterValue, toggleNewsletterValue] = React.useState(false);
    function handleClick(e) {
        e.preventDefault();
        console.log(`Naam: ${nameValue}`);
        console.log(`Leeftijd: ${ageValue}`);
        console.log(`Opmerkingen: ${commentValue}`);
        console.log(`Nieuwsbrief ontvangen: ${newsletterValue}`);
        console.log("Verstuurd!");
    }
    return (
        <div>
            <form
            onSubmit={handleClick}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="name">
                        Naam:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age">
                        Leeftijd:
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="comments">
                        Opmerkingen:
                        <textarea
                            id="comments"
                            name="comments"
                            placeholder="wat vond je van het recept"
                            value={commentValue}
                            onChange={(e) => setCommentValue(e.target.value)}
                        >
                        </textarea>
                    </label>
                    <label htmlFor="newsletter-checkbox">
                        <input
                            type="checkbox"
                            id="newsletter-checkbox"
                            name="newsletter-checkbox"
                            checked={newsletterValue}
                            onChange={() => toggleNewsletterValue(!newsletterValue)}
                        />
                        Ik schrijf mij in voor de nieuwsbrief
                    </label>
                    <button
                        type="submit"
                    >
                        Versturen
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
